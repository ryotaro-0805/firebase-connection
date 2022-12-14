import React from 'react'
import {db} from '../firebase';
import {deleteDoc, doc} from "firebase/firestore";
import { useState } from 'react';



const Delete = ({sendData ,setSwitcher}) => {

  const [switching, setSwitching]=useState('start');
  
      // データー削除関数
    const clickFnc = async (sendData) => {
        await deleteDoc(doc(db, 'posts', sendData.id));
        setSwitching('daneHtml');
    };

    const startHtml=[
      <div  className='delete_div' key={'startHtml_check'}>
      <p>『{sendData.data().todo}』を削除してよろしいでしょうか？</p>
      <button onClick={()=>clickFnc(sendData)}>決定</button>  
      </div>
    ]
    const daneHtml=[
      <div key={'startHtml_delete'}>
      <p>削除しました。</p> 
      </div>
    ]
  
  return (
    <div className='delete_div'>
      {switching==='start' && startHtml}
      {switching==='daneHtml' && daneHtml}
      <button onClick={() => setSwitcher('start')}>戻る</button>
    </div>
  )
}

export default Delete
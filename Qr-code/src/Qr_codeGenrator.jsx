import React from 'react'
import { useState } from 'react'
import QrCode from 'react-qr-code'

export default function Qr_codeGenrator() {
    const [qrCode,setqrCode]=useState('')
    const [input,setinput]=useState('')
    function handleGenerateQrCode(){
      setqrCode(input);
    }

  return (
    <div>
        <h1>Qr-codeGenrator</h1>
        <div className='qr-block'>
            <input 
            onChange={(e)=>setinput(e.target.value)}
            type="text"  name='qr-code' placeholder='Enter your value here '/>
            <button disabled={input && input.trim() !==""? false:true} onClick={handleGenerateQrCode}>Generate</button>
            <QrCode
            id='qr-code-value'
            value={qrCode} size={400} bgColor='#fff'
            />
        </div>
    </div>
  )
}

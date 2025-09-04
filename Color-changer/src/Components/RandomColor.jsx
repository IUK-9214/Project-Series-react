import React, { useEffect } from 'react'
import { useState } from 'react'
function RandomColor() {


    const [ColorType, setColorType] = useState('hex')
    const [Color, setColor] = useState('#000000')

    function colornumberGenrator(length) {
        return Math.floor(Math.random() * length);
    }

    function randomColorGeneratorHex() {
        let HEXColor = "#";
        let HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

        for (let i = 0; i < 6; i++) {
            HEXColor += HEX[colornumberGenrator(HEX.length)]
        }
        setColor(HEXColor);

    }

    function randomColorGeneratorRGB() {

        let r = colornumberGenrator(255)
        let g = colornumberGenrator(255)
        let b = colornumberGenrator(255)
        setColor(`rgb(${r},${g},${b})`)

    }
    useEffect (()=>{

        if(ColorType==='rgb') randomColorGeneratorRGB()
        else randomColorGeneratorHex()
    },[ColorType])

    return (


        <div style={{ backgroundColor: Color }} className='flex flex-col items-center justify-center gap-4 h-screen w-screen'>

            <div className='  flex flex-col items-center gap-2'

            >
                <button
                    onClick={() => setColorType('hex')}
                    className='bg-black w-50 text-white rounded-2xl p-2 hover:bg-white hover:text-black transition duration-300' >HEX COLOR GENERATOR</button>
                <button
                    onClick={() => setColorType('rgb')}
                    className='bg-black w-50 text-white rounded-2xl p-2 hover:bg-white hover:text-black transition duration-300'>RGB COLOR GENERATOR</button>
                <button
                    onClick={ColorType === 'hex' ? randomColorGeneratorHex : randomColorGeneratorRGB}
                    className='bg-black w-50 text-white rounded-2xl p-2 hover:bg-white hover:text-black transition duration-300'> GENERATE COLOR </button>
            </div>
            <div className='flex justify-center items-center flex-col gap-2'>
                <h3 className='font-bold text-5xl'>{ColorType}</h3>
                <h4 className='font-bold text-3xl'>{Color}</h4>
            </div>
        </div>
    )
}

export default RandomColor
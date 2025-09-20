import React, { useState } from 'react'
import Menu_list from './Menu_list'
import {FaPlus,FaMinus} from 'react-icons/fa'

export default function Menu_Item({ item }) {


  function handleToggleChildren(getcurrentlabel) {
    setdisplaycurrentchildren({
      ...displaycurrentchildren, [getcurrentlabel]: !displaycurrentchildren[getcurrentlabel]
    })
  }

  const [displaycurrentchildren, setdisplaycurrentchildren] = useState({})
  return (
    <li className=' text-white font-bold uppercase pl-[30px]'>

      <div className=' p-2 flex items-center gap-[20px] cursor-pointer'>
        <p>{item.label}</p>
        {item && item.children && item.children.length ?
          <span onClick={() => handleToggleChildren(item.label)}>

            {displaycurrentchildren[item.label] ? <FaMinus color='#fff' size={25}/> : <FaPlus color='#fff' size={25}/>}

          </span>
          : null}
      </div>

      {item && item.children && item.children.length > 0 && displaycurrentchildren[item.label] ?
        (<Menu_list list={item.children} />)
        : null}
    </li>
  )
}

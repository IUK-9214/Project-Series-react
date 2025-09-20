import React from 'react'

export default function Menu_Item({item}) {
  return (
    <li className='flex justify-center'>

      <p>{item.label}</p>

      {item && item.children && item.children.length >0 ? 
       (<Menu_Item list={item.children} />)
      :null}
    </li>
  )
}

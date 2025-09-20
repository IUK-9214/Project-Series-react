import React from 'react'
import Menu_list from './Menu_list'

function TreeView({menu=[]}) {
  return (
    <div className='tree-view-component'>

        <Menu_list list={menu} />
    </div>
  )
}

export default TreeView
import React from 'react'
import Menu_list from './Menu_list'

function TreeView({ menu = [] }) {
    return (
        <div className='min-h-[100vh] w-[350px] bg-blue-700 '>

            <Menu_list list={menu} />
        </div>
    )
}

export default TreeView
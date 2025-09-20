import React from 'react'
import Menu_Item from './Menu_Item'

function Menu_list({ list = [] }) {
    return (
        <ul className='' >

            {list && list.length ?

                list.map(listItem => <Menu_Item item={listItem} />)
                : null}
        </ul>
    )
}

export default Menu_list 
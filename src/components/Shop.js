import React from 'react'
import Item from './Item';
function Shop(){
    return(
        <>
        <div className='flex flex-row justify-center'>
            <Item gender="men" cloth="shirt" price="$25.00"/>
            <Item gender="women" cloth="pants" price="$36.00"/>
        </div>
        <div className='flex flex-row justify-center'>
            <Item gender="men" cloth="hoodie" price="$40.00"/>
            <Item gender="women" cloth="cardigan" price="$20.00"/>
        </div>
        </>
    )
}

export default Shop;

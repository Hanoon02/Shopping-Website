import React from 'react'
import {Link} from 'react-router-dom'
function NavBar(){
    return(
        <>
        <div className="flex flex-row">
            <Link to="/" className="px-8 py-2">Home</Link>
            <Link to="/about" className="px-8 py-2">About</Link>
            <Link to="/shop" className="px-8 py-2">Shop</Link>
            <Link to="/cart" className="px-8 py-2">Cart</Link>
        </div>
        </>
    )
}

export default NavBar;
import React from 'react'
import {Link} from 'react-router-dom'
function Home(){
    return(
        <>
        <div className='text-5xl font-extrabold font-sans antialiased py-10'>
            <span className='bg-gradient-to-r from-green-700 to-green-300'>Welcome to Cloth Store</span>
        </div>
        <button className='bg-sky-500 hover:bg-sky-700 rounded w-24 h-8'><Link to="/shop">Shop Now</Link></button>
        </>
    )
}

export default Home;
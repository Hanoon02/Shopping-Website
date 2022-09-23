import React from 'react'
import {Link} from 'react-router-dom'
function Home(){
    return(
        <>
        <div className='flex justify-center text-5xl font-extrabold font-sans antialiased pt-10 h-48'>
            <span>Welcome to Cloth Store</span>
        </div>
        <div className='flex flex-row justify-center  ' >
            <p className=' self-center text-4xl font-extrabold font-sans antialiased'>
                We define fashion, shop with us
                </p>
            <img className='pl-36 h-96  rounded' src={require("/Users/hanoon/CSE/VSCode/Web Development/TOP Repos/Shopping-Cart/src/components/images/intro.jpg")} alt="none" />
        </div>
        <div className='flex justify-center py-10'>
            <button className='bg-gradient-to-r from-purple-500 to-pink-500 border-black border-2 rounded w-44 h-12 text-3xl'><Link to="/shop">Shop Now</Link></button>
        </div>
        </>
    )
}

export default Home;
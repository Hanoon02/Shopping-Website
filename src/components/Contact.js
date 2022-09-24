import React from 'react'
import Store from './Store';
import Footer from './Footer';
function Contact(){
    return(
        <>
        <div className='flex justify-center text-5xl font-extrabold font-sans antialiased pt-10 h-48'>
            <span>Our stores are present in</span>
        </div>
        <div className='flex flex-row'>
            <Store location='newyork' place="New York" address="14th Street, Manhattan, NY"/>
            <Store location='la' place="Los Angeles" address="Downtown Boulevard, Hollywood, LA"/>
        </div>
        <div className='pt-40'>
            <Footer/>
        </div>
        </>
    )
}

export default Contact;
import React from 'react'

function Store(props){
    return(
        <>
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href="/#" className="w-full block h-full">
                <img alt="location" src={require(`/Users/hanoon/CSE/VSCode/Web Development/TOP Repos/Shopping-Cart/src/components/images/${props.location}.jpg`)} className="max-h-40 w-full object-cover"/>
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-indigo-500 text-md font-medium">
                    </p>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        {props.place}
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        {props.address}
                    </p>
                </div>
            </a>
        </div>
        </>
    )
}

export default Store;
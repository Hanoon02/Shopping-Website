import React from 'react'

function Item(props){
    return(
        <>
        <div className="flex flex-wrap items-center justify-center py-2">
            <div className={`h-full border-4flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-sky-500 rounded-lg max-w-xs shadow-lg`}>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                    <picture>
                        <img className="relative w-40" src={require(`/Users/hanoon/CSE/VSCode/Web Development/TOP Repos/Shopping-Cart/src/components/images/${props.cloth}-${props.gender}.jpg`)} alt="shopping item"/>
                    </picture>
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">
                            {props.gender}
                    </span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">
                            {props.cloth}
                        </span>
                        <span className={`bg-white rounded-full text-black text-xs font-bold px-3 py-2 leading-none flex items-center`}>
                            {props.price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item;
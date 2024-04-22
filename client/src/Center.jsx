import { useEffect, useState } from "react";
import axios from "axios";
import ArrowLeftIcon from '@iconscout/react-unicons/icons/uil-angle-left.js'
import ArrowRightIcon from '@iconscout/react-unicons/icons/uil-angle-right.js'
import { Link } from "react-router-dom"
import Image from "./Image.jsx";




const Center = ({ places }) => {

    return (
        <div className='p-8 mt-10'>
            <div className="flex justify-between items-center">
                <div className="text">
                    <h1 className="text-2xl font-bold">اجاره اقامتگاه‌های سنتی در شهرهای مرکزی</h1>
                    <h4 className="mt-1">اقامت خاطره انگیز در خانه‌های سنتی با ما</h4>
                </div>
                <div className="buttons ">
                    <button className="btn mr-2 w-10 h-10 bg-white text-black p-2 border border-gray-300 rounded-xl"><ArrowRightIcon /></button>
                    <button className="btn mr-2 w-10 h-10 bg-white text-black p-2 border border-gray-300 rounded-xl"><ArrowLeftIcon /></button>
                </div>
            </div>
            <div className="mt-8 mb-10 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-6 lg:grid-cols-6 min-w-4xl">
                {places.length > 0 && places.slice(20,26).map(place => (
                    <Link to={'/place/' + place._id}>
                        <div className="bg-gray-500 mb-2 rounded-xl flex">
                            {place.photos?.[0] && (
                                <Image className="rounded-xl object-cover aspect-square" src={place.photos?.[0]} alt="" />
                            )}
                        </div>
                        <h2 className="font-bold">{place.address}</h2>
                        <h3 className="text-sm text-gray-500">{place.title}</h3>
                        <div className="mt-1">
                            قیمت به ازای هر شب
                            <span className="font-bold"> {place.price}</span>
                            <small className="text-gray-500 block">{place.description}</small>
                        </div>
                    </Link>
                ))}
               
            </div>
        </div>
    )
}

export default Center
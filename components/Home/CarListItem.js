import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import { HiUser } from "react-icons/hi";
import { SourceContext } from '@/context/SourceContext'
import { Destination } from '@/context/Destination'

function CarListItem({car,distance}) {
    // const {source,setSource} = useContext(SourceContext)
    // const {destination,setDestination} = useContext(Destination)
    //       console.log(source.name,'source in car list')
    //       console.log(destination.name,'destination in car list')
    // const splitted_sentence = source.name.split(",")
    // console.log(splitted_sentence,"split name in india")
    // console.log(splitted_sentence.length, "length of the splitted distance")
    // const last_Word_index = splitted_sentence.length    
    // const source_last_word = splitted_sentence[last_Word_index-1]
    // const dest_split_sentence = destination.name.split(",")
    // const length_dest_sentence = dest_split_sentence.length
    // console.log(source_last_word,"hello")
    // const dest_last_word = dest_split_sentence[length_dest_sentence-1]
    // console.log(dest_last_word,"hi")
    // if(source_last_word === dest_last_word){
    //   return(
    //     <div>
         
    //     </div>
    //   )
    // }else{
    //   console.log('different countries')
    // }

  const amount = Number(car.amount);
const roundedDistance = Math.round(Number(distance));
const total = (amount * roundedDistance).toFixed(2);
  return (

    <div>
        <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-7'>
            <Image src = {car.image}
            width = {100} height = {100}/>
            <div >
                <h2 className='font-semibold text-[18px] flex gap-3 items-center'>{car.name}
                <span className='flex gap-2 items-center font-normal text-[14px]'><HiUser /> {car.seat}
                </span>
                </h2>
                <p>{car.desc}</p>
            </div>
            </div>
            <h2 className='text-[18px] font-semibold pl-3'>{total}</h2>
        </div>
    </div>
  )
}

export default CarListItem


"use client"
import React, { useContext, useEffect, useState } from 'react'
import InputItem from './InputItem'
import { SourceContext } from '@/context/SourceContext'
import { Destination } from '@/context/Destination'
import CarOptions from './CarOptions'

function SearchSection() {
  const {source,setSource} = useContext(SourceContext)
  const {destination,setDestination} = useContext(Destination)
  const [distance,setDistance] = useState();

  const calculateDistance = () => {
    const dist = google.maps.geometry.spherical.computeDistanceBetween(
      {
        lat:source.lat,lng:source.lng
      },
      {lat:destination.lat,lng:destination.lng}
    )
    console.log(dist,"dis")
    setDistance((dist * 0.000621374).toFixed(1))
   
    console.log((dist * 0.000621374).toFixed(1),"disatance from lat and longitude")
  }

  // useEffect(()=>{
  //   if(source){
  //     console.log(source,'source')
  //   }
  //   if(destination){
  //     console.log(destination,'destination')
  //   }
  // },[source,destination])

  return (
    <div>
    <div className='p-2 md:p-5 border-[2px] rounded-xl'>
        <p className='text-[20px] font-bold'>Get a Ride</p>
        <InputItem type = {'source'}/>
        <InputItem type = {'destination'}/>
        <button className='p-3 bg-black w-full mt-5 text-white rounded-lg' 
        onClick={()=>calculateDistance()}>search</button>
    </div>
    {distance?<CarOptions distance = {distance}/>:null}
    </div>
  )
}

export default SearchSection
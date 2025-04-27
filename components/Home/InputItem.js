"use client"

import { Destination } from '@/context/Destination'
import { SourceContext } from '@/context/SourceContext'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function InputItem({type}) {
  const [value,setValue] = useState(null)
  const [placeholder,setPlaceholder] = useState(null)
  const {source,setSource} = useContext(SourceContext)
  const {destination,setDestination} = useContext(Destination)
  const getLatAndLong = (place,type)=>{
    console.log(place,type,"place&type")
   
    const placeId = place.value.place_id
    const service = new google.maps.places.PlacesService(document.createElement('div'))
    service.getDetails({placeId},(place,status)=>{
      if(status === 'OK' && place.geometry && place.geometry.location)
      {
        console.log(place.geometry.location.lat(),"latitude");
      }
      if(type === 'source'){
        setSource({
          lat:place.geometry.location.lat(),
          lng:place.geometry.location.lng(),
          name:place.formatted_address,
          label:place.name
        })
      }else{
        setDestination({
          lat:place.geometry.location.lat(),
          lng:place.geometry.location.lng(),
          name:place.formatted_address,
          label:place.name
        })
      }
    })
    
  }

  useEffect(()=>{
    type == 'source'
    ?setPlaceholder('Pickup Location')
    :setPlaceholder('Drop Location')
  }
  )
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
        <Image src = {type === 'source' ? '/source.png' : '/dest.png'} height = {15} width = {15}/>
         {/* <input type = "text" placeholder = {type == 'source'?"Pickup Location":"Drop Location"}
         className='bg-transparent w-full outline-none'/> */}
        <GooglePlacesAutocomplete
        onLoad={(autocomplete) => console.log('Autocomplete loaded', autocomplete)}
        selectProps={{
          value,
          onChange:(place)=>{getLatAndLong(place,type);setValue(place)},
          placeholder:placeholder,
          isClearable:true,
          className:'w-full',
          components:{
            DropdownIndicator:false
          },
         styles:{
          control:(provided)=>({
            ...provided,
            backgroundColor:'transparent',
            border:'none'
          })
         }
        }}/>
    </div>
  )
}

export default InputItem
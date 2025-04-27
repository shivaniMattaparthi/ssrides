// "use client"

// import { CarListData } from '@/app/utils/CarListData'
// import React, { useState } from 'react'
// import CarListItem from './CarListItem'
// import { useRouter } from "next/navigation"; // For App Router

// function CarOptions({distance}) {
//   const router = useRouter();
//   const [confirmation,setConfirmation] = useState(false)
//   const [activeIndex,setactiveIndex]= useState()
//   const [selectedCar,setSelectedCar]= useState([])

//   return (
//     <div className='mt-5 p-5 overflow-auto h-[250px]'>
//         <h2 className='text-[22px] font-bold'>Recommended </h2>
//         {CarListData.map((item,index)=>(
//             <div key = {index} className={`cursor-pointer p-2 px-4 rounded-md border-black ${activeIndex == index?'border-[2px]':null}`}
//             onClick={()=>{setactiveIndex(index);
//               setSelectedCar(item)}}>
//                 <CarListItem distance = {distance} car ={item}/>
//             </div>
//         ))}
//        {selectedCar?.name ? <div className='flex justify-between fixed bottom-5 left-1/2 transform -translate-x-1/2 center
//          bg-white shadow-xl rounded-lg p-3 
//         w-full md:w-[30%] border-[1px] items-center'>
//           <h2>Make Payment for </h2>
//           <button className='p-3 bg-black text-white rounded-lg 
//           text-center' onClick={()=>{
//              router.push(`/Payment?car=${selectedCar.name}`);
//           }}>Request {selectedCar.name}</button>
//         </div>:null}
        
//     </div>
//   )
// }

// export default CarOptions



// "use client"

// import { CarListData } from '@/app/utils/CarListData'
// import React, { useState, useContext } from 'react'
// import CarListItem from './CarListItem'
// import { useRouter } from "next/navigation"
// import { SourceContext } from '@/context/SourceContext'
// import { Destination} from '@/context/Destination'

// function CarOptions({distance}) {
//   const router = useRouter();
//   const [activeIndex, setActiveIndex] = useState()
//   const [selectedCar, setSelectedCar] = useState([])
//   const { source } = useContext(SourceContext)
//   const { destination } = useContext(Destination)

//   // Helper function to extract country from address
//   const getCountry = (address) => {
//     if (!address) return ''
//     const parts = address.split(",")
//     return parts[parts.length - 1].trim()
//   }

//   // Check if countries match
//   const countriesMatch = () => {
//     if (!source?.name || !destination?.name) return false
//     return getCountry(source.name) === getCountry(destination.name)
//   }

//   // Check if both locations are selected
//   const bothLocationsSelected = source?.name && destination?.name

//   return (
//     <div className='mt-5 p-5 overflow-auto h-[250px]'>
//       <h2 className='text-[22px] font-bold'>Recommended</h2>
      
//       {!bothLocationsSelected ? (
//         <div className="text-center text-gray-500 py-4">
//           Please select both pickup and dropoff locations
//         </div>
//       ) : !countriesMatch() ? (
//         <div className="flex flex-col items-center justify-center p-4 my-4 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
//         <div className="flex items-center text-red-600">
//           <svg 
//             className="w-5 h-5 mr-2" 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24" 
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               strokeWidth={2} 
//               d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
//             />
//           </svg>
//           <span className="font-medium">Location Selection Error</span>
//         </div>
//         <p className="mt-1 text-sm text-red-500 text-center">
//           Please select locations within the same country to continue.
//         </p>
//       </div>
//       ) : (
//         CarListData.map((item, index) => (
//           <div 
//             key={index}
//             className={`cursor-pointer p-2 px-4 rounded-md border-black ${
//               activeIndex == index ? 'border-[2px]' : null
//             }`}
//             onClick={() => {
//               setActiveIndex(index)
//               setSelectedCar(item)
//             }}
//           >
//             <CarListItem distance={distance} car={item} />
//           </div>
//         ))
//       )}

//       {selectedCar?.name && countriesMatch() && (
//         <div className='flex justify-between fixed bottom-5 left-1/2 transform -translate-x-1/2 center
//           bg-white shadow-xl rounded-lg p-3 w-full md:w-[30%] border-[1px] items-center'>
//           <h2>Make Payment for {selectedCar.name}</h2>
//           <button 
//             className='p-3 bg-black text-white rounded-lg text-center'
//             onClick={() => {
//               router.push(`/Payment?car=${selectedCar.name}`)
//             }}
//           >
//             Request {selectedCar.name}
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CarOptions



// "use client"

// import { CarListData } from '@/app/utils/CarListData'
// import React, { useState, useContext, useEffect } from 'react'
// import CarListItem from './CarListItem'
// import { useRouter } from "next/navigation"
// import { SourceContext } from '@/context/SourceContext'
// import { Destination } from '@/context/Destination'

// function CarOptions({distance}) {
//   const router = useRouter();
//   const [activeIndex, setActiveIndex] = useState()
//   const [selectedCar, setSelectedCar] = useState([])
//   const [cars, setCars] = useState([])
//   const { source } = useContext(SourceContext)
//   const { destination } = useContext(Destination)

//   // Load cars from localStorage
//   useEffect(() => {
//     const storedCars = localStorage.getItem('carList')
//     if (storedCars) {
//       setCars(JSON.parse(storedCars))
//     } else {
//       // If no data in localStorage, use the default data
//       setCars(CarListData)
//       localStorage.setItem('carList', JSON.stringify(CarListData))
//     }
//   }, [])
// //for one time deletion
//   // useEffect(() => {
//   //   const storedCars = localStorage.getItem('carList')
//   //   if (storedCars) {
//   //     const parsedCars = JSON.parse(storedCars)
      
//   //     // ONE-TIME DELETION - Remove this after running once
//   //     if (parsedCars.length > CarListData.length) {
//   //       const updatedCars = parsedCars.slice(0, -1) // Remove last item
//   //       localStorage.setItem('carList', JSON.stringify(updatedCars))
//   //       setCars(updatedCars)
//   //       console.log('Last added car removed successfully!')
//   //     } else {
//   //       setCars(parsedCars)
//   //     }
//   //   } else {
//   //     // If no data in localStorage, use the default data
//   //     setCars(CarListData)
//   //     localStorage.setItem('carList', JSON.stringify(CarListData))
//   //   }
//   // }, [])

//   // Helper function to extract country from address
//   const getCountry = (address) => {
//     if (!address) return ''
//     const parts = address.split(",")
//     return parts[parts.length - 1].trim()
//   }

//   // Check if countries match
//   const countriesMatch = () => {
//     if (!source?.name || !destination?.name) return false
//     return getCountry(source.name) === getCountry(destination.name)
//   }

//   // Check if both locations are selected
//   const bothLocationsSelected = source?.name && destination?.name

//   return (
//     <div className='mt-5 p-5 overflow-auto h-[250px]'>
//       <h2 className='text-[22px] font-bold'>Recommended</h2>
      
//       {!bothLocationsSelected ? (
//         <div className="text-center text-gray-500 py-4">
//           Please select both pickup and dropoff locations
//         </div>
//       ) : !countriesMatch() ? (
//         <div className="flex flex-col items-center justify-center p-4 my-4 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
//           <div className="flex items-center text-red-600">
//             <svg 
//               className="w-5 h-5 mr-2" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24" 
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
//               />
//             </svg>
//             <span className="font-medium">Location Selection Error</span>
//           </div>
//           <p className="mt-1 text-sm text-red-500 text-center">
//             Please select locations within the same country to continue.
//           </p>
//         </div>
//       ) : (
//         cars.map((item, index) => (
//           <div 
//             key={index}
//             className={`cursor-pointer p-2 px-4 rounded-md border-black ${
//               activeIndex == index ? 'border-[2px]' : null
//             }`}
//             onClick={() => {
//               setActiveIndex(index)
//               setSelectedCar(item)
//             }}
//           >
//             <CarListItem distance={distance} car={item} />
//           </div>
//         ))
//       )}

//       {selectedCar?.name && countriesMatch() && (
//         <div className='flex justify-between fixed bottom-5 left-1/2 transform -translate-x-1/2 center
//           bg-white shadow-xl rounded-lg p-3 w-full md:w-[30%] border-[1px] items-center'>
//           <h2>Make Payment for {selectedCar.name}</h2>
//           <button 
//             className='p-3 bg-black text-white rounded-lg text-center'
//             onClick={() => {
//               router.push(`/Payment?car=${selectedCar.name}`)
//             }}
//           >
//             Request {selectedCar.name}
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CarOptions


"use client"

import { CarListData } from '@/app/utils/CarListData'
import React, { useState, useContext, useEffect } from 'react'
import CarListItem from './CarListItem'
import { useRouter } from "next/navigation"
import { SourceContext } from '@/context/SourceContext'
import { Destination } from '@/context/Destination'

function CarOptions({distance}) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState()
  const [selectedCar, setSelectedCar] = useState([])
  const [cars, setCars] = useState([])
  const { source } = useContext(SourceContext)
  const { destination } = useContext(Destination)

  // Load cars from localStorage
  useEffect(() => {
    const storedCars = localStorage.getItem('carList')
    if (storedCars) {
      setCars(JSON.parse(storedCars))
    } else {
      // If no data in localStorage, use the default data
      setCars(CarListData)
      localStorage.setItem('carList', JSON.stringify(CarListData))
    }
  }, [])
// for one time deletion
  // useEffect(() => {
  //   const storedCars = localStorage.getItem('carList')
  //   if (storedCars) {
  //     const parsedCars = JSON.parse(storedCars)
      
  //     // ONE-TIME DELETION - Remove this after running once
  //     if (parsedCars.length > CarListData.length) {
  //       const updatedCars = parsedCars.slice(0, -1) // Remove last item
  //       localStorage.setItem('carList', JSON.stringify(updatedCars))
  //       setCars(updatedCars)
  //       console.log('Last added car removed successfully!')
  //     } else {
  //       setCars(parsedCars)
  //     }
  //   } else {
  //     // If no data in localStorage, use the default data
  //     setCars(CarListData)
  //     localStorage.setItem('carList', JSON.stringify(CarListData))
  //   }
  // }, [])
  // Helper function to extract country from address
  const getCountry = (address) => {
    if (!address) return ''
    const parts = address.split(",")
    return parts[parts.length - 1].trim()
  }

  // Check if countries match
  const countriesMatch = () => {
    if (!source?.name || !destination?.name) return false
    return getCountry(source.name) === getCountry(destination.name)
  }

  // Check if both locations are selected
  const bothLocationsSelected = source?.name && destination?.name

  // Check if distance exceeds limit
  const distanceExceedsLimit = distance > 30

  return (
    <div className='mt-5 p-5 overflow-auto h-[250px]'>
      <h2 className='text-[22px] font-bold'>Recommended</h2>
      
      {!bothLocationsSelected ? (
        <div className="text-center text-gray-500 py-4">
          Please select both pickup and dropoff locations
        </div>
      ) : !countriesMatch() ? (
        <div className="flex flex-col items-center justify-center p-4 my-4 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
          <div className="flex items-center text-red-600">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span className="font-medium">Location Selection Error</span>
          </div>
          <p className="mt-1 text-sm text-red-500 text-center">
            Please select locations within the same country to continue.
          </p>
        </div>
      ) : distanceExceedsLimit ? (
        <div className="flex flex-col items-center justify-center p-4 my-4 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
          <div className="flex items-center text-red-600">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span className="font-medium">Distance Limit Exceeded</span>
          </div>
          <p className="mt-1 text-sm text-red-500 text-center">
            Sorry, we only support rides up to 30 miles. Your current distance is {distance} miles.
          </p>
        </div>
      ) : (
        cars.map((item, index) => (
          <div 
            key={index}
            className={`cursor-pointer p-2 px-4 rounded-md border-black ${
              activeIndex == index ? 'border-[2px]' : null
            }`}
            onClick={() => {
              setActiveIndex(index)
              setSelectedCar(item)
            }}
          >
            <CarListItem distance={distance} car={item} />
          </div>
        ))
      )}

      {selectedCar?.name && countriesMatch() && !distanceExceedsLimit && (
        <div className='flex justify-between fixed bottom-5 left-1/2 transform -translate-x-1/2 center
          bg-white shadow-xl rounded-lg p-3 w-full md:w-[30%] border-[1px] items-center'>
          <h2>Make Payment for {selectedCar.name}</h2>
          <button 
            className='p-3 bg-black text-white rounded-lg text-center'
            onClick={() => {
              router.push(`/Payment?car=${selectedCar.name}`)
            }}
          >
            Request {selectedCar.name}
          </button>
        </div>
      )}
    </div>
  )
}

export default CarOptions
// // import React from 'react'

// // function GoogleMapSection() {
// //   return (
// //     <div>GoogleMapSection</div>
// //   )
// // }

// // export default GoogleMapSection

// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
// const containerStyle = {
//   width: '100%',
//   height: window.innerWidth*0.45,
// }



// function GoogleMapSection() {
//   // const { isLoaded } = useJsApiLoader({
//   //   id: 'google-map-script',
//   //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
//   // })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center)
//     map.fitBounds(bounds)

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//        options = {{mapId:'d68660958d2eaa3'}}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   )
// }

// export default GoogleMapSection

import React from 'react'

function GoogleMapSection() {
  return (
    <div>GoogleMapSection</div>
  )
}

export default GoogleMapSection
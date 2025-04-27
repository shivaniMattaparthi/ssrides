// "use client"

// import SearchSection from "@/components/Home/SearchSection";
// import { Destination } from "@/context/Destination";
// import { SourceContext } from "@/context/SourceContext";
// import { UserButton } from "@clerk/nextjs";
// import { LoadScript } from "@react-google-maps/api";
// import Image from "next/image";
// import { useState } from "react";

// export default function Home() {
//   const [source,setSource] = useState([]);
//   const [destination,setDestination] = useState([])
//   return (
//     <SourceContext.Provider value={{source,setSource}}>
//       <Destination.Provider value = {{destination,setDestination}}>
//         <LoadScript
//          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
//          libraries={['places','geometry']}>
//    <div className="p-6  gap-5">
//     <div>
//       <SearchSection/>
//     </div>
//    </div>
//    </LoadScript>
//    </Destination.Provider>
//    </SourceContext.Provider>
//   );
// }


"use client"

import SearchSection from "@/components/Home/SearchSection";
import { Destination } from "@/context/Destination";
import { SourceContext } from "@/context/SourceContext";
import { UserButton } from "@clerk/nextjs";
import { LoadScript } from "@react-google-maps/api";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);
  
  return (
    <SourceContext.Provider value={{ source, setSource }}>
      <Destination.Provider value={{ destination, setDestination }}>
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          libraries={['places', 'geometry']}
        >
          <main className="min-h-screen bg-gray-50">


            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
                <SearchSection />
              </div>
            </div>

            {/* Footer (optional) */}
            
          </main>
        </LoadScript>
      </Destination.Provider>
    </SourceContext.Provider>
  );
}

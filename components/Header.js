// import { UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import React from "react";

// function Header() {
//   const HeaderMenu = [
//     {
//       id: 1,
//       name: "Ride",
//       icon: "/taxi.png",
//     },
//     {
//       id: 2,
//       name: "Package",
//       icon: "/box.png",
//     },
//     {
//       id:3,
//       name:"register",
//       icon:"/box.png"
//     }
//   ];
//   return (
//       <div className="p-4 pb-0 pl-10 border-b-[2px] border-gray-200 flex items-center justify-between">
//         <div className="flex gap-24 items-center">
//           <Image src="/logo.png" width={70} height={70} alt="logo" />
//           <div className="flex gap-6 items-center">
//             {HeaderMenu.map((item) => (
//               <div className="flex gap-2 items-center">
//                 <Image src={item.icon} width={17} height={17} />
//                 <h2 className="text-[14px] font-medium">{item.name}</h2>
//               </div>
//             ))}
//           </div>
//         </div>
//         <UserButton/>

//       </div>
//   );
// }

// export default Header;



import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";

function Header({ setActiveComponent }) {
  const HeaderMenu = [
    {
      id: 1,
      name: "Ride",
      icon: "/taxi.png",
    },
    {
      id: 2,
      name: "Package",
      icon: "/box.png",
    },
    {
      id: 3,
      name: "Register",
      icon: "/car register.png"
    }
  ];

  return (
    <div className="p-4 pb-0 pl-10 border-b-[2px] border-gray-200 flex items-center justify-between">
      <div className="flex gap-24 items-center">
        <Image src="/logoo.png" width={70} height={70} alt="logo" />
        <div className="flex gap-6 items-center">
          {HeaderMenu.map((item) => (
            <div 
              key={item.id} 
              className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
              onClick={() => setActiveComponent(item.id === 3 ? 'carManagement' : null)}
            >
              <Image src={item.icon} width={17} height={17} alt={item.name} />
              <h2 className="text-[14px] font-medium">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <UserButton/>
    </div>
  );
}

export default Header;
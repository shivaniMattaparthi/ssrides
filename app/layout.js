// import { Inter,Montserrat } from "next/font/google";
// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// import Header from "@/components/Header";

// const inter = Montserrat({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider>
//     <html lang="en">
//       <body className={inter.className}>
//         <Header/>
//         {children}</body>
//     </html>
//     </ClerkProvider>
//   );
// }

'use client'; // Add this since we're using client-side state

import { useState } from 'react';
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CarManagement from "@/components/CarManagement";
import Home from './page';

const inter = Montserrat({ subsets: ["latin"] });

// Note: We can't export metadata from client components
// So we'll either remove it or move it to a separate file

export default function RootLayout({ children }) {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
      <html lang="en">
        <body className={inter.className}>
          <Header setActiveComponent={setActiveComponent} />
          <div className="p-4">
          {/* {activeComponent === 'Home' && <Home />} */}

            {activeComponent === 'carManagement' && <CarManagement />}
            {/* Render children only when no activeComponent is selected */}
            {!activeComponent && children}
          </div>
        </body>
      </html>
  );
}
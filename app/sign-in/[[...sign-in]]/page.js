import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return(
    <>
    <div>
      <Image src = '/ssrides.jpg' width={900} height= {900} 
      className='object-contain h-full w-full'/>
      <div  className = 'absolute right-2 top-20'>
      <SignIn/>
      </div>
  </div>
  </>
  )
}
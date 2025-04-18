import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import {SignUp,ClerkLoaded,ClerkLoading } from '@clerk/nextjs'


export default function Page() {
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-[#12122b] to-[#0e0e1d]'>
      <div className='h-full lg:flex flex-col items-center justfiy-center px-4'>
        <div className='text-center space-y-4 pt-16'>
          <h1 className='font-bold text-3xl text-white'>
            Hola Mate!!
          </h1>
          <p className='text-base text-gray-100'>
            Log in or create account to get back to your <span className='font-bold text-[#97fdf5]'>BankBridge</span> dashboard.
          </p>
          </div>
          <div className='flec items-center justify-center mt-8'>
            <ClerkLoaded>
              <SignUp path='/sign-up' />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className='animate-spin text-muted-foreground' />
            </ClerkLoading>
          </div>
      </div>
      <div className='h-full hidden lg:flex flex-col space-y-2 items-center justify-center'>
        <Image src="/logo.svg" height={100} width={100} alt='logo'/>
        <span className='font-bold text-2xl text-white'>BankBridge</span>
        <span className='font-semibold text-xl text-[#67e8f9]'>Your Finances, Simplified and Streamlined!</span>
      </div>
    </div>
  );

}
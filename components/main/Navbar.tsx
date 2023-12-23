import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shaow-[#2A0E61]/50 bg-[#03001417 backdrop-blur-md z-50 px-10] '>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href='#about-me' className='w-auto h-auto flex flex-row items-center' >
                <Image 
                src="/NavLogo.png"
                alt="logo"
                width={70}
                height={70}
                className='cursor-pointer hover:animate-slowspin'
                />
                <span className='font-bold ml-[1px] hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500'>
                    Wed Dev
                </span>
            </a>
            <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                <div 
                className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-10px rounded-full text-gray-200'
                >
                    <a href='#about-me' className='cursor-pointer'>About me</a>
                    <a href='#Skills' className='cursor-pointer'>Skills</a>
                    <a href='#Projects' className='cursor-pointer'>Projects</a>
                </div>
            </div>
                <div className='flex flex-row gap-5'>
                    {Socials.map((socail) => (
                            <Image 
                            src={socail.src}
                            alt={socail.name}
                            key={socail.name}
                            width={24}
                            height={24}
                            />
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Navbar
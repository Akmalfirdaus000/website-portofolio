import Image from 'next/image'
import React from 'react'
import { FotoPribadi, Iconaja, TittleIm } from '../../../public/img/personal'
import Link from 'next/link'

const Hero = () => {
    return (<section className='lg:px-24 px-3 pt-8 flex lg:flex-row flex-col-reverse justify-between items-center  '>
        <div className='text-wrap pt-3 text-center px-3 lg:text-left'>
            <p className='font-semibold text-sm lg:text-lg '>Hallo Saya</p>
            <h2 className='font-bold text-[22px] lg:text-2xl text-[#FD6F00]'>Akmal Firdaus</h2>
            <Image src={TittleIm} alt='akmal' className='lg:w-[500px] w-[300px] pt-2 mx-auto' />
            <p className='lg:w-[500px] pt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ipsa maiores quasi, doloribus itaq</p>
            <Link href={''} className='bg-[#FD6F00] p-2 rounded-xl hover:bg-orange-500 '>
            <button className='pt-10 font-semibold text-xs'>Download CV</button>
            </Link>


        </div>
        <div className=' text-center items-center pb-5'>
            <Image src={FotoPribadi} alt='Akmal Firdaus' className='lg:w-[300px] w-[200px]' />
            <Image src={Iconaja} alt='Akmal ' className='lg:w-52 w-28 mx-auto pt-5' />
            
        </div>
    </section>
    )
}

export default Hero
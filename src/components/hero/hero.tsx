import Image from 'next/image'
import React from 'react'
import { FotoPribadi, Iconaja, TittleIm } from '../../../public/img/personal'
import Link from 'next/link'

const Hero = () => {
    return (<section className='px-24 pt-8 flex justify-between items-center '>
        <div className='text-wrap pt-3'>
            <p className='font-semibold '>Hallo Saya</p>
            <h2 className='font-bold text-2xl text-[#FD6F00]'>Akmal Firdaus</h2>
            <Image src={TittleIm} alt='akmal' className='w-[500px] pt-2' />
            <p className='w-[500px] pt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ipsa maiores quasi, doloribus itaq</p>
            <Link href={''} className='bg-[#FD6F00] p-3 rounded-xl '>
            <button className='pt-10 font-semibold'>Download CV</button>
            </Link>


        </div>
        <div className=' text-center items-center'>
            <Image src={FotoPribadi} alt='Akmal Firdaus' className='w-[300px]' />
            <Image src={Iconaja} alt='Akmal ' className='w-52 mx-auto pt-5' />
            
        </div>
    </section>
    )
}

export default Hero
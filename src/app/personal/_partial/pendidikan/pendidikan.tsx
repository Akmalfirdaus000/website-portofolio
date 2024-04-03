import Image from 'next/image'
import React from 'react'
import { LogoKampus } from '../../../../../public/img/personal'
Image

export function Pendidikan() {
  return (
    <section className='lg:m-10 m-5 bg-[#FD6F00]'>
      <div className=' rounded-xl'>

        <div className='text- text-center lg:font-extrabold font-bold text-[24px] lg:text-3xl pt-5'>
          <span>Pendidikan</span>
          <p className='texlg:t-5xl text-white'>......</p>
        </div>
        <Image
          src={LogoKampus}
          alt='Universitas Metameedia'
          className='lg:w-56 lg:h-56 w-40 lg:mt-10 mt-5 mx-auto'
        />
        <div className='text-center text- pt-8'>
          <span className=' font-extrabold lg:text-4xl text-2xl'>Universitas Metamedia</span>
          <p className='font-extralight text-white text-sm lg:text-[16px] py-3'>September 2021-2025 <br />
            Sistem Informasi</p>
        </div>
      </div>
    </section>
  )
}

import Image, { StaticImageData } from 'next/image';
import React from 'react'
import { LogoKK } from '../../../../../public/img/img-pengalaman';
import { TabItem } from 'flowbite-react';
import { Poster1, Poster2 } from '../../../../../public/img/personal';

export function Sertifikat() {

    return (<section className=' bg-orange-500 m-10 p-5 px-12'>
        <div>
                <ul className='grid grid-cols-2 gap-10'>
                    <li className='bg-slate-100 w-full'>
                        <Image src={Poster2} alt='' className='p-5 mx-auto object-cover' />
                        <h2 className='text-center'></h2>
                        <p></p>
                    </li>
                    <li className='bg-slate-100 w-full'>
                        <Image src={Poster1} alt='' className='p-5 mx-auto' />
                        <h2 className='text-center'></h2>
                        <p></p>
                    </li>
                </ul>
        </div>
    </section>
    )
}

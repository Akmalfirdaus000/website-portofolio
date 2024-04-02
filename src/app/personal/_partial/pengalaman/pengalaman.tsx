import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { LogoInfiniteLearning, LogoKK, LogoSekolahKakSeto } from '../../../../../public/img/img-pengalaman'

export function Pengalaman() {
    type experienceType = {
        title: string;
        image: StaticImageData;
        description: string
        year: string;
    }
    const experience: experienceType[] = [
        {
            title: 'Kafe Koding',
            image: LogoKK,
            description: 'Mentor',
            year: '2022 - 2025'
        },
        {
            title: 'Inifine Learning',
            image: LogoInfiniteLearning,
            description: 'Studi Independen | Kampus Mardeka',
            year: '2023 - 2024'
        },
        {
            title: 'Homeschooling Kak Seto',
            image: LogoSekolahKakSeto,
            description: 'Magang | Kampus Mardeka',
            year: '2024 - 2024'
        }
    ]
    return (
        <section className='bg-[#FD6F00] m-10 p-3'>
            <div className='flex-col text-center font-extrabold text-black text-3xl pt-5'>
                <span className=''>Pengalaman</span>
                <p className='text-white text-5xl'>......</p>
            </div>
            <div className=' pt-10 m-3'>
                <ul className=' flex gap-11 justify-center'>
                    {experience.map((item: experienceType,i) => (
                        <li key={i} className=' bg-slate-100 w-full h-auto text-center p-3 rounded-lg '>
                            <Image src={item.image} alt='' className='w-32 mx-auto p-3' />
                            <h2 className='font-bold text-lg'>{item.title}</h2>
                            <div className=' font-extralight text-sm'>
                                <p>{item.description}</p>
                                <i>{item.year}</i>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

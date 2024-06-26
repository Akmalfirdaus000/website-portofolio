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
            description: 'Web Developer',
            year: '2023 - 2024'
        },
        {
            title: 'Homeschooling Kak Seto',
            image: LogoSekolahKakSeto,
            description: 'FrontEnd Developer',
            year: '2024 - 2024'
        }
    ]
    return (
        <section className='bg-[#FD6F00] lg:m-10 m-5 p-3'>
        
            <div className='flex-col text-center lg:font-extrabold text-black lg:text-3xl font-bold text-[24px] pt-5'>
                <span className=''>Pengalaman</span>
                <p className='text-white lg:text-5xl'>......</p>
            </div>
                <p className='text-center font-light text-lg pt-10 lg:w-1/2  mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est molestias doloremque, commodi reiciendis quidem voluptatem delectus praesentium distinctio saepe consequ .</p>
            <div className=' lg:pt-10 m-3'>
                <ul className=' flex-col flex lg:flex-row lg:gap-11 justify-center m-5'>
                    {experience.map((item: experienceType,i) => (
                        <li key={i} className=' bg-slate-100 w-full h-auto text-center p-3 rounded-lg my-3 '>
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

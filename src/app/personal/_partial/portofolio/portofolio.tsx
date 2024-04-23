import Image, { StaticImageData } from 'next/image';
import React from 'react'
import { Poster1 } from '../../../../../public/img/personal';

export function Portofolio() {
    type PortofolioType = {
        title: string;
        image: StaticImageData;
        git: string;
        figma: string;
    }
    const ListPortofolio: PortofolioType[] = [
        {
            title: 'Personal Website',
            image: Poster1,
            git: 'Link Github',
            figma: 'Link Figma'
        },
        {
            title: 'amal',
            image: Poster1,
            git: 'Link Github',
            figma: 'Link Figma'
        },
        {
            title: 'amal',
            image: Poster1,
            git: 'Link Github',
            figma: 'Link Figma'
        },
        {
            title: 'amal',
            image: Poster1,
            git: 'Link Github',
            figma: 'Link Figma'
        }
    ]
    return (
        <section className=' bg-orange-500 m-10 p-5 px-12'>
            <div>
                <div className='flex-col text-center lg:font-extrabold text-black lg:text-3xl font-bold text-[24px] pt-5'>
                    <span className=''>Portofolio</span>
                    <p className='text-white lg:text-5xl'>......</p>
                </div>

                <ul className='grid grid-cols-4 gap-10 pt-10'>
                    {ListPortofolio.map((item: PortofolioType, i) => (
                        <li key={i}>
                            <Image src={item.image} alt='ok' className=' hover:animate-bounce' />

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}   

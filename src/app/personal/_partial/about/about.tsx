import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { JamAbout } from '../../../../../public/img/personal'
import { title } from 'process';
import { logo1, logo2, logo3, logo4 } from '../../../../../public/img/skill';

export function About() {
    type skillUpType = {
        title: string;
        image: StaticImageData;
        desc: string;
    }
    const SkillUp: skillUpType[] = [
        {
            title: 'Ui & Ux',
            image: logo1,
            desc: '1'
        },
        {
            title: 'Web Developer',
            image: logo2,
            desc: '1'
        },
        {
            title: 'FrontEnd Developer',
            image: logo3,
            desc: '1'
        },
        {
            title: 'Backend Developer',
            image: logo4,
            desc: '1'
        }
    ]
    return (
        <section className='mt-6 lg:px-16 text-blac  lg:m-10 m-5  bg-[#FD6F00] p-3'>
            <div className='flex-col text-center text-[24px] font-bold lg:font-extrabold text-black lg:text-3xl pt-5'>
                <span className=''>Tentang Saya</span>
                <p className='text-white lg:text-5xl'>......</p>
            </div>
            <div className=' grid lg:grid-cols-2'>
                <div>
                    <Image src={JamAbout} alt='as' className=' lg:w-[400px] w-64 mx-auto lg:pt-10' />
                </div>
                <div className='lg:pt-16 pt-3 text-center lg:text-lg text-sm lg:text-left'>
                    <p className=' font-semibold text-slate-900'><b className=' lg:text-2xl text-xl text-white font-serif'>Lorem </b>, ipsum dolor sit amet consectetur adipisicing elit. Vel rem iure veniam quas quasi quaerat, beatae amet magnam molestias possimus soluta doloribus harum sapiente eius nostrum perspiciatis unde asperiores quia,<i className=' font-bold text-white'> laborum accusantium itaque deleniti debitis! Impedit eaque perferendis optio ea numquam? </i> Repudiandae dolorum tenetur hic dolore facilis sint magnam, assumenda saepe quis vel repellendus iusto sit, consequatur ipsum eos voluptas repellat! Non reiciendis laborum cumque quod aliquid a error fa.</p>
                </div>
            </div>
            <div className=' lg:pt-10 m-16'>
                <ul className=' flex-col flex lg:flex-row lg:gap-11 justify-center'>
                    {SkillUp.map((item: skillUpType, i) => (

                        <li key={i} className=' bg-slate-100 w-full h-auto text-center  p-3 my-2 rounded-lg '>
                            <Image src={item.image} alt='' className='w-16 h-16 mx-auto p-3' />
                            <h2 className='font-bold text-lg'>{item.title}</h2>
                            <div className=' font-extralight text-sm'>
                                <p>{item.desc}</p>
                                <i></i>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

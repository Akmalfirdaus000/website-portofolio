'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Marquee from "react-fast-marquee";
import './category.css'
import { LogoProgram1, LogoProgram10, LogoProgram12, LogoProgram2, LogoProgram3, LogoProgram4, LogoProgram5, LogoProgram6, LogoProgram7, LogoProgram8, LogoProgram9 } from '../../../public/img/logo'



export function Category() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 1000 })])
  type ImageitemType ={
    image:StaticImageData;
  }
  const imageItema:ImageitemType[] = [
    {
      image: LogoProgram1,
    },
    {
      image: LogoProgram2,
    },
    {
      image: LogoProgram3,
    },
    {
      image: LogoProgram4,
    },
    {
      image: LogoProgram5,
    },
    {
      image: LogoProgram6,
    },
    {
      image: LogoProgram7,
    },
    {
      image: LogoProgram8,
    },
    {
      image: LogoProgram9,
    },
    {
      image: LogoProgram10,
    },
    {
      image: LogoProgram12,
    },
  
  ]

  return (  
    <section className='flex pt-10 gap-5'>
     <Marquee className="mt-8">
        {imageItema.map((sponsor,i) => (
          <Image
            key={i}
            src={sponsor.image}
          
            alt={`sponsor ${i}`}
            className=" object-cover w-32 h-16"
          />
        ))}
      </Marquee>
    </section>
  )
}

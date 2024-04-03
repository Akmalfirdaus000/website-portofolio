import { StaticImageData } from 'next/image';
import React from 'react'
import { LogoKK } from '../../../../../public/img/img-pengalaman';
import { TabItem } from 'flowbite-react';

export function Sertifikat() {
    type SertifikatType = {
        title: string;
        image: StaticImageData;
        desc: string;
        buttom: string
    }
    const Sertifikats: SertifikatType[] = [
        {
            title: 'Kafe Koding',
            image: LogoKK,
            desc: 'Mentor Kafe Koding',
            buttom: ' lihat'
        }
    ]
    return (<section>
        <div>
            {Sertifikats.map((item: SertifikatType, i) => (
                <ul key={i}>
                    <li></li>
                </ul>
            ))}
        </div>
    </section>
    )
}

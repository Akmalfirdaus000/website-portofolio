import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LogoBrand, LogoKontak } from '../../../public/img/personal';

const Navbar = () => {
    return (
        <header className='py-5 px-16'>
          
            <div className='flex items-center justify-between '>
                <div>
                    <Link href={'/'}>
                        <button>
                            <Image src={LogoBrand} alt="Logo" className='w-52 h-20' />
                        </button>
                    </Link>
                </div>
                <div className=''>
                    <ul className='flex font-bold text-sm items-center flex-col md:flex-row'>
                        <li className='pl-7'>
                            <Link href={''}>
                                <button>Halaman Utama</button>
                            </Link>
                        </li>
                        <li className='pl-7'>
                            <Link href={''}>
                                <button>Tentang Saya</button>
                            </Link>
                        </li>
                        <li className='pl-7'>
                            <Link href={''}>
                                <button>Pedidikan</button>
                            </Link>
                        </li>
                        <li className='pl-7'>
                            <Link href={''}>
                                <button>Pengalaman</button>
                            </Link>
                        </li>
                        <li className='pl-7'>
                            <Link href={''}>
                                <button>Sertifikasi</button>
                            </Link>
                        </li>
                        <li className='pl-7'>
                            <Link href={''}>
                                <button>Portofolio</button>
                            </Link>
                        </li>
                        <li className=''>
                            <Link href={''}>
                                <button>
                                    <Image
                                    src={LogoKontak} alt='Logo Kontak' className='w-52'/>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

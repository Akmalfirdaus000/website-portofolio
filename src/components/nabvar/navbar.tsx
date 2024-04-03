'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Navbar } from "flowbite-react";
import { LogoBrand, LogoKontak } from '../../../public/img/personal';

const Bavbar = () => {
    return (
        <section className=''>
            <Navbar
                fluid={true}
                rounded={true}
            >
                    <Navbar.Brand>
                        <Image
                            src={LogoBrand}
                            className=" lg:w-52 w-24 lg:pl-5"
                            alt=""
                        />
                        <span className="text-xl font-semibold dark:text-white ml-16 lg:hidden">
                            Akmal <b className='text-[#FD6F00]'>Firdaus</b>
                        </span>
                    </Navbar.Brand>
                <Navbar.Toggle />


                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                        className='font-bold items-center flex lg:text-lg'
                    >
                        Halaman Utama
                    </Navbar.Link>
                    <Navbar.Link href="/" className='font-bold items-center flex lg:text-lg'>
                        Tentang Saya
                    </Navbar.Link>
                    <Navbar.Link href="/" className='font-bold items-center flex lg:text-lg'>
                        Pendidikan
                    </Navbar.Link>
                    <Navbar.Link href="/" className='font-bold items-center flex lg:text-lg'>
                        Sertifikat
                    </Navbar.Link>
                    <Navbar.Link href="/" className='font-bold items-center flex lg:text-lg'>
                        Portofolio
                    </Navbar.Link>

                </Navbar.Collapse>
                    <Navbar.Collapse>
                        <Link href={'/'}>
                        <Image  src={LogoKontak} alt='kontak' className='lg:w-48 w-32'  />
                        </Link>
                    </Navbar.Collapse>

            </Navbar>
        </section>
    );
};

export default Bavbar;

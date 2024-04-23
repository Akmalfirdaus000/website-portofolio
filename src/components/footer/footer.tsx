"use client"
import React from 'react'

import { Footer } from "flowbite-react";

const Pooter = () => {
  return (
    <Footer container className=' bg-black'>
      <Footer.Copyright href="#" by="AKmal" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>

  )
}

export default Pooter
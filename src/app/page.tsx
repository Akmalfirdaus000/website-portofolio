import Hero from "@/components/hero/hero";
import Navbar from "@/components/nabvar/navbar";
import Image from "next/image";
import { About, Pendidikan, Pengalaman, Portofolio, Sertifikat } from "./personal";
import { Category } from "@/components/carousel/category";
import Bavbar from "@/components/nabvar/navbar";
import { Footer } from "flowbite-react";
import Pooter from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <Bavbar />
      <Hero />
      <Category />
      <About />
      <Pendidikan />
      <Pengalaman />
      <Sertifikat />
      <Portofolio />
      <Pooter/>
    </main>
  );
}

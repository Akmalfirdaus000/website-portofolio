import Hero from "@/components/hero/hero";
import Navbar from "@/components/nabvar/navbar";
import Image from "next/image";
import { About, Pendidikan, Pengalaman, Sertifikat } from "./personal";
import { Category } from "@/components/carousel/category";
import Bavbar from "@/components/nabvar/navbar";

export default function Home() {
  return (
    <main>
      <Bavbar/>
      <Hero/>
      <Category/>
      <About/>
      <Pendidikan/>
      <Pengalaman/>
      <Sertifikat/>
    </main>
  );
}

import Hero from "@/components/hero/hero";
import Navbar from "@/components/nabvar/navbar";
import Image from "next/image";
import { About, Pendidikan, Pengalaman } from "./personal";
import { Category } from "@/components/carousel/category";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <About/>
      <Pendidikan/>
      <Pengalaman/>
    </main>
  );
}

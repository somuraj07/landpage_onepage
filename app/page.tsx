import HeroSection from "@/components/Cover";
import DynamicSections from "@/components/EachModule";
import Navbar from "@/components/Navbar";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <HeroSection />
    <DynamicSections />
  </div>
  );
}

import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Systems } from "@/components/sections/Systems";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Approach } from "@/components/sections/Approach";
import { Proof } from "@/components/sections/Proof";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Systems />
        <HowItWorks />
        <Approach />
        <Proof />
        <WhoWeWorkWith />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

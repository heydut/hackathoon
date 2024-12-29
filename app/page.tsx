import Home_About from "@/components/Homepage/Home_About";
import Home_Blog from "@/components/Homepage/Home_Blog";
import Home_Community from "@/components/Homepage/Home_Community";
import Home_CTA from "@/components/Homepage/Home_CTA";
import Home_Events from "@/components/Homepage/Home_Events";
import Home_FAQ from "@/components/Homepage/Home_FAQ";
import Home_Hero from "@/components/Homepage/Home_Hero";
import Home_HowItWorks from "@/components/Homepage/Home_HowItWorks";
import Home_Sponsors from "@/components/Homepage/Home_Sponsors";

export default function Home() {
  return (
    <main className="">
      <Home_Hero />
      <Home_About />
      {/* <Home_Community />
      <Home_HowItWorks />
      <Home_Events />
      <Home_Sponsors />
      <Home_Blog />
      <Home_CTA />
      <Home_FAQ /> */}
    </main>
  );
}

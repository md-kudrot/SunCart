import Hero from "@/components/hero/Hero";
import PopularCart from "@/app/popularSection/page";
import Tips from "@/components/summarCareTips/Tips";
import PopularCompany from "@/components/popularCompany/PopularCompany";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularCart></PopularCart>
      <Tips></Tips>
      <PopularCompany></PopularCompany>
    </div>
  );
}

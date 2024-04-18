import Banner from "@/components/banner/Banner";
import Cards from "@/components/cards/Cards";
import Hero from "@/components/hero/Hero";
import Info from "@/components/info/Info";
import Request from "@/components/request/Request";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Info />
      <Banner />
      <div className="container mx-auto">
        <Cards />
        <Request />
      </div>
    </div>
  );
}

import ChurchIntro from "@/components/ChurchIntro/ChurchIntro";
import FaithGallery from "@/components/FaithGallery/FaithGallery";
import Hero from "@/components/Hero/Hero";
import InfoBar from "@/components/InfoBar/InfoBar";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import MassPrayer from "@/components/MassPrayer/MassPrayer";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <InfoBar/>
      <ChurchIntro/>
      <FaithGallery/>
    <MassPrayer/>
    <UpcomingEvents/>
    <LatestBlogs />
    <Footer/>
    </main>
  );
}
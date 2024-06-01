import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTemtinomials from "@/components/MusicSchoolTemtinomials";
import Instructors from "@/components/Instructors";
import UpcomingWebinars from "@/components/UpcomingWebinars";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#393E46]/[0.96] antialiased ">
   <HeroSection/>
   <FeaturedCourses/>
   <WhyChooseUs/>
   <MusicSchoolTemtinomials/>
   <UpcomingWebinars/>
   <Instructors/>
   </main>
  );
}

'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"
import courseData from '../data/musicCourses.json'
function Instructors() {
  return (
    <div className="relative h-[38rem] overflow-hidden flex items-center justify-center">
        <WavyBackground>
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center w-full">
            <AnimatedTooltip items={courseData.instructors} />
            </div>
        </WavyBackground>

    </div>

  )
}

export default Instructors
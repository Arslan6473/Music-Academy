'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import courseData from '../data/musicCourses.json'
function MusicSchoolTemtinomials() {
  return (
    <div className="h-[40rem] w-full dark:bg-[#181a1e] dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={courseData.musicSchoolTestinomials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTemtinomials
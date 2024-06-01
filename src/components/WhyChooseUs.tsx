'use client'
import { StickyScroll } from './ui/sticky-scroll-reveal'
import courseData from '../data/musicCourses.json'

function WhyChooseUs() {
  return (
    <div><StickyScroll content={courseData.musicSchoolContent}/></div>
  )
}

export default WhyChooseUs
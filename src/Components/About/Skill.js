import React from 'react'
import AboutDetails from './AboutDetails'

export default function Skill() {
  return (
    <div class="container mx-auto  ">
      <div class="w-full grid grid-cols-2 gap-2">
      <AboutDetails title="UI/UX" des="Designing web/App interface"/>
      <AboutDetails title="web Development" des="Web App development"/>
      <AboutDetails title="App Development" des="App Development"/>
      <AboutDetails title="UI/UX" des="Designing web/App interface"/>
        </div>
      </div>
  )
}

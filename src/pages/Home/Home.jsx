import React from 'react'
import Header from '../../components/Header/Header'
import HeroAboutMe from '../../components/Hero/HeroAboutMe'
import Experience from '../../components/ExperienceHero/Experience'
import ProjectsHero from '../../components/ProjectsHero/ProjectsHero'
import WorkExperience from '../../components/WorkExperience/WorkExperience'

export default function Home() {
  return (
    <div>
      <HeroAboutMe/>
      <Experience/>
      <ProjectsHero/>
      <WorkExperience/>
    </div>
  )
}

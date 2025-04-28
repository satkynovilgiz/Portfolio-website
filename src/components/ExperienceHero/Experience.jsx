import React from 'react'
import styles from "./Experience.module.scss"
import ExperienceImg from "../../assets/images/Logos.png"

export default function Experience() {
  return (
    <div className={styles.Experience}>
      <h1>EXPERIENCE WITH</h1>
      <img src={ExperienceImg} alt="img" />
    </div>
  )
}

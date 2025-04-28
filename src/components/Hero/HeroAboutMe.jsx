import React from 'react'
import styles from "./HeroAboutMe.module.scss"
import MyFaceFoto from "../../assets/images/avatar.png"
export default function HeroAboutMe() {
  return (
    <div className={styles.HeroAboutMe}>
      <div className={styles.HeroImg}>
<img src={MyFaceFoto} alt="img" />
      </div>
      <div className={styles.HeroText}>
<h4>I do code and
make content <span>about it!
    </span> </h4>
    <p>I am a seasoned full-stack software engineer with over 
8 years of professional experience, specializing in backend development. 
My expertise lies in crafting robust and scalable SaaS-based 
architectures on the Amazon AWS platform.</p>
      </div>
      <div className={styles.HeroBtn}>
<button className={styles.BtnFirst}>
Get In Touch
</button>
<button className={styles.BtnSecond}>
Download CV
</button>
        </div>
</div>
  )
}

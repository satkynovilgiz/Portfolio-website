import React from 'react'
import Styles from "./WorkExperience.module.scss"
import VectorImg from "../../assets/images/google-logo.png"
export default function WorkExperience() {
  return (
    <div className={Styles.WorkExperience}>
        <h1>EXPERIENCE</h1>
      <div className={Styles.IconAndText}>
        <div className={Styles.MagajerWork}>
      <img src={VectorImg} alt="img" />
      <h4>
      Lead Software Engineer at Google
      </h4>
      </div>

<div className={Styles.textSession}>
<p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
</div>
    </div>
    <div className={Styles.IconAndText}>
        <div className={Styles.MagajerWork}>
      <img src={VectorImg} alt="img" />
      <h4>
      Lead Software Engineer at Google
      </h4>
      </div>

<div className={Styles.textSession}>
<p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
</div>
    </div>
        </div>
  )
}
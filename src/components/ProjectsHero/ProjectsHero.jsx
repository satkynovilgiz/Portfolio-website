import React from 'react'
import styles from './ProjectsHero.module.scss'
import ProjectImgSecond from "../../assets/images/project-thumbnail-2.png"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import ProjectImgFirst from "../../assets/images/project-thumbnail-1.png"
export default function ProjectsHero() {
  return (
    <div className={styles.ProjectsHero}>
        <h1>PROJECTS</h1>
      <div className={styles.ProjectsHeroVisit}>
      <div className={styles.project}>
    <img src={ProjectImgFirst} alt="img" />
    <div className={styles.projectText}>
        <div>

    <h6>CLICK HERE TO VISIT</h6>
    <h2>HTML TUTORIAL</h2>     
        </div>
    <div>

    <ArrowOutwardIcon style={{color:
        'white'
    }}/>
    </div>
</div>
    </div>
<div className={styles.project}>
    <img src={ProjectImgSecond} alt="img" />
    <div className={styles.projectText}>
        <div>

    <h6>CLICK HERE TO VISIT</h6>
    <h2>CSS TUTORIAL</h2>     
        </div>
    <div>

    <ArrowOutwardIcon style={{color:
        'white'
    }}/>
    </div>
</div>
    </div>
      </div>
    </div>
  )
}

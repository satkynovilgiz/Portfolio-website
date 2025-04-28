import React from 'react'
import Styles from "./Footer.module.scss"
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <div className={Styles.Footer}>
        <h3>Contact</h3>
        <p>Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing
and implementing robust, scalable, and innovative web solutions. Adept at leveraging a
comprehensive skill set encompassing front-end and back-end technologies </p>
<div className={Styles.gmail}>
    <OutgoingMailIcon style={{color:"white"}}/>
    <h5>abmcodehub@gmail.com</h5>
  
</div>
<div className={Styles.FooterIcon}>
        <GitHubIcon style={{color:"white"}}/>
        <InstagramIcon style={{color:"white" , margin:"0 20px"
        }}/>
<YouTubeIcon style={{color:"white"}}/>
    </div>
    </div>
  )
}

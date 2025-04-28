import React from 'react'
import styles from "./header.module.scss"
import MyHeand from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <img src={MyHeand} alt="img" />
        </div>
        <div className={styles.HeaderNavbar}>
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Experience">Experience</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </header>
  )
}

import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.container} >
      <div className={styles.Logo} >
        <Image className={styles.Logo} src={"/assets/H.png"} width={35} height={35} alt="" />
      </div>
      <menu className={styles.menu} >
        <ul className={styles.list}>
          <li className={styles.listItem} >NFT</li>
          <li className={styles.listItem} >Whitepaper</li>
          <li className={styles.listItem} >Socials</li>
          <li className={styles.listItem} >About</li>
        </ul>
      </menu>
    </header>
  )
}

export default Navbar
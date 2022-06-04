import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';


import { GetContacts } from '../components/get-contacts'
import { LeftSidebar } from '../components/left-sidebar'

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftsidebar}>
        <LeftSidebar />
      </div>
      <div className={styles.home}>
        <GetContacts />
      </div>

    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';
import 'react-toastify/dist/ReactToastify.css';

import { GetContacts } from '../components/get-contacts'
import { LeftSidebar } from '../components/left-sidebar'
import { useSelector } from 'react-redux';
import { Messaging } from '../components/messaging';
import { ComposeMessage } from '../components/compose';
import { ToastContainer } from 'react-toastify';

const Home: NextPage = () => {
  const { menu } = useSelector((state: any) => state.menu);

  return (
    <div className={styles.wrapper}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <div className={styles.leftsidebar}>
        <LeftSidebar />
      </div>
      <div className={styles.home}>
        {
          menu.currentTab === "contacts" ? <GetContacts /> : menu.currentTab === "messaging" ? <Messaging /> : menu.currentTab === "compose" && <ComposeMessage />
        }
      </div>

    </div>
  )
}

export default Home

import { NextPage } from "next";
import { } from "react";
import styles from "../styles/left-sidebar.module.css";
import { FcContacts } from 'react-icons/fc';
import {AiFillMessage} from 'react-icons/ai';
export const LeftSidebar: NextPage = () => {

    return (
    
        <div className={styles.leftsidebar}>
            <div className={styles.sideBarItemRow}>
                <div className={styles.sideBarTitle}>
                    <h2>Menu</h2>
                </div>
                <div className={styles.sideBarItem}>
                    <FcContacts className={styles.iconSize} />
                    <span><b>Contacts</b></span>
                </div>
                <div className={styles.sideBarItem}>
                    <AiFillMessage className={styles.iconSize} />
                    <span><b>Messages</b></span>
                </div>
            </div>
        </div>
    );
};
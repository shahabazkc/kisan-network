import { NextPage } from "next";
import { } from "react";
import styles from "../styles/left-sidebar.module.css";
import { FcContacts } from 'react-icons/fc';
import { AiFillMessage } from 'react-icons/ai';
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_TAB } from "../redux/reducers/menu-types";
import { changeMenu } from "../redux/actions/menu";


export const LeftSidebar: NextPage = () => {

    const { menu } = useSelector((state: any) => state.menu);
    const dispatch = useDispatch();

    const changeTab = (tab: string) => {
       changeMenu(tab)(dispatch);	// dispatch the action
    };

    return (

        <div className={styles.leftsidebar}>
            <div className={styles.sideBarItemRow}>
                <div className={styles.sideBarTitle}>
                    <h2>Menu</h2>
                </div>
                <div onClick={() => changeTab('contacts')} style={{ border: menu.currentTab === 'contacts' ? '3px solid green' : 'none' }} className={styles.sideBarItem}>
                    <FcContacts className={styles.iconSize} />
                    <span><b>Contacts</b></span>
                </div>
                <div onClick={() => changeTab('messaging')} style={{ border: menu.currentTab === 'messaging' ? '3px solid green' : "none" }} className={styles.sideBarItem}>
                    <AiFillMessage className={styles.iconSize} />
                    <span><b>Messages</b></span>
                </div>
            </div>
        </div>
    );
};
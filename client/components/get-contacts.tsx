import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from '../styles/contact.module.css';
import Accordion from 'react-bootstrap/Accordion'
import { FaUserCircle } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import { changeComposeData, changeMenu } from "../redux/actions/menu";
import { useDispatch } from "react-redux";


export const GetContacts: NextPage = () => {
    const [contacts, setContacts] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        fetch("http://localhost:8000/get-contacts")
            .then(res => res.json())
            .then(data => setContacts(data))
            .catch(err => console.log(err));
    }, [])

    const openCompose = (firstName: string, lastName: string, number: string) => {
        changeMenu('compose')(dispatch);
        changeComposeData({
            firstName: firstName,
            lastName: lastName,
            number: number
        })(dispatch)
    }

    return (
        <div className="container m-2">
            <h1>Contacts</h1>
            <div className={styles.contactList}>
                <p><b>List of {contacts.length} contacts</b></p>
                <div className={styles.contactcard}>
                    <Accordion defaultActiveKey="">
                        {
                            contacts.map((contact: any, index: number) => {
                                return (

                                    <Accordion.Item eventKey={index + ""} key={index}>
                                        <Accordion.Header>
                                            <div className={styles.card}>
                                                <FaUserCircle className={styles.cardIcon} />
                                                <span className={styles.cardContent}>{contact?.first_name} {contact?.last_name} </span>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <b>
                                                First Name: {contact?.first_name}<br />
                                                Last Name: {contact.last_name}<br />
                                                Number: {contact.number}<br />
                                                <button onClick={() => openCompose(contact.first_name, contact.last_name, contact.number)} className='btn btn-md btn-dark'>Send Message <BiSend /></button>
                                            </b>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </div >
    );
}
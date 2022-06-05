import { NextPage } from "next";
import { useEffect, useState } from 'react';
import styles from '../styles/messaging.module.css';
import Accordion from 'react-bootstrap/Accordion'
import { AiOutlineMessage } from 'react-icons/ai';

export const Messaging: NextPage = () => {
    const [messages, setMessage] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/get-messages")
            .then(res => res.json())
            .then(data => {
                setMessage(data.data);
            })
            .catch(err => console.log(err));
    }, []);

    const dateTimeConvertor = (date: string) => {
        var date = new Date(date).toLocaleString().replace(',', '');
        return date;
    }

    return (
        <div className="container m-2">
            <h1>Messaging</h1>
            <div className={styles.messageList}>
                <p><b>List of {messages.length} Messages</b></p>
                <div className={styles.messagecard}>
                    <Accordion defaultActiveKey="">
                        {
                            messages.map((message: any, index: number) => {
                                return (
                                    <Accordion.Item eventKey={index + ""} key={index}>
                                        <Accordion.Header>
                                            <div className={styles.card}>
                                                <AiOutlineMessage className={styles.cardIcon} />
                                                <span className={styles.cardContent}> To: {message?.firstName} {message?.lastName} </span><br />
                                                {dateTimeConvertor(message?.createdAt)}
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <b>
                                                Message:<br /> {message?.message}<br />
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
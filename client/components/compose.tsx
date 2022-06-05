import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMenu } from '../redux/actions/menu';
import styles from '../styles/compose.module.css';
import { ToastContainer, toast } from 'react-toastify';


export const ComposeMessage: NextPage = () => {
    const dispatch = useDispatch();
    const { composeData } = useSelector((state: any) => state.menu.composeData);
    const [otp, setOtp] = useState('');

    const [message, setMessage] = useState(``);
    const [otpMessage, setOtpMessage] = useState('');

    const changeMessage = (e: any) => {
        setMessage(e.target.value);
    }

    useEffect(() => {
        let length = 6;
        let otp = ("0".repeat(length) + Math.floor(Math.random() * 10 ** length)).slice(-length);
        setOtpMessage(`Hi. Your OTP is: ${otp} \n`);
        setOtp(otp);
    }, []);

    const sendMessage = async () => {
        let MessageText = `${otpMessage} ${message}`;

        fetch("http://localhost:8000/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: MessageText,
                firstName: composeData.firstName,
                lastName: composeData.lastName,
                number: composeData.number
            })
        })
            .then((res) => {
                toast.success("Successfully sented !", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000
                });

                changeMenu('messaging')(dispatch);
            })
            .catch((err) => {
                toast.error("Error while senting !", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000
                });
            });

    }

    return (
        <div className='container m-3'>
            <h1>Compose</h1>
            <div className={styles.messageBox}>
                <div className="nameTab">
                    <label htmlFor="from">Name</label>
                    <input id='from' value={composeData.firstName + " " + composeData.lastName} type="text" disabled className='form-control' />
                </div>
                <div className="numberTab mt-2">
                    <label htmlFor="number">Number</label>
                    <input type="text" value={composeData.number} disabled className='form-control' />
                </div>
                <div className="otpContent mt-2">
                    <label htmlFor="otpTab">Body</label>
                    <input type='text' value={otpMessage} disabled className='form-control' />
                </div>
                <div className="messageTab mt-2">
                    <label className={styles.label} htmlFor="message">Message</label>
                    <textarea onChange={changeMessage} value={message} id='message' className='form-control' rows={5} />
                </div>
                <div className="sendButtonTab m-2">
                    <button onClick={sendMessage} className='btn btn-md btn-dark'>Send</button>
                </div>
            </div>
        </div>
    )
};
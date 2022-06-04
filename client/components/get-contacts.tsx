import { NextPage } from "next";
import { useEffect, useState } from "react";

export const GetContacts: NextPage = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/get-contacts")
            .then(res => res.json())
            .then(data => setContacts(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h1>Get Contacts</h1>
            <ul>
                {
                    contacts.map((contact: any, index: number) => {
                        return (
                            <>
                                <li key={index}>{contact?.first_name} {contact?.last_name} </li>
                                <li>{contact.number}</li>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    );
}
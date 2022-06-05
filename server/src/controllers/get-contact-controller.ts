import { Response, Request } from "express";
import contacts from '../models/contacts.json';

export const getContactsController = (req: Request, res: Response) => {
    // Getting the contacts from contacts..json from the models
    let contactList = contacts.contacts;
    // Send the response
    res.json(contactList);
}
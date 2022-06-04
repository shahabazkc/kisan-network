import { Response, Request } from "express";
import contacts from '../models/contacts.json';

export const getContactsController = (req: Request, res: Response) => {
    let contactList = contacts.contacts;
    res.json(contactList);
}
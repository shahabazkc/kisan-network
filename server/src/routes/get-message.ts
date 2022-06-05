import express from 'express';
import { Message } from '../models/message';

const router = express.Router();


router.get('/', async (req, res) => {
    // Finding all the message in the database and sorting it in descending order
    let message = await Message.find().sort({"createdAt": 1})
    // Sending the response
    res.send({ status: true, data: message });
});


export { router as getMessagesRouter };
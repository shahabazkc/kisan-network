import express from 'express';
import { Message } from '../models/message';

const router = express.Router();


router.get('/', async (req, res) => {

    let message = await Message.find().sort({"createdAt": 1})
    res.send({ status: true, data: message });
});


export { router as getMessagesRouter };
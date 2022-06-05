import express, { Request, Response } from 'express';
import { sendMessageController } from '../middlewares/send-message-controller';
import { validateRequest } from '../middlewares/validate-request';
import { Message } from '../models/message';
import { TwilioService } from '../services/twilio';

const router = express.Router();


router.post('/',
    sendMessageController, validateRequest,
    async (req: Request, res: Response) => {

        // body
        let {
            message,
            firstName,
            lastName,
            number
        } = req.body;

        const twilioService = new TwilioService();
        const { status, messageData } = await twilioService.sendSms(number, message);

        if (!status) return res.status(400).send({ status: false, data: null });

        // Build message
        const messageBuild = Message.build({
            message,
            firstName,
            lastName,
            number
        });

        // Save message
        await messageBuild.save();

        // Send response
        res.send({
            status: true,
            data: messageBuild
        });
    }
);


export { router as sendMessageRouter };
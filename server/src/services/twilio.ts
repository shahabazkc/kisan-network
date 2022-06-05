import twilio, { Twilio } from 'twilio';

export class TwilioService {
    constructor() {
        this.client = new Twilio(process.env?.TWILIO_ACCOUNT_SID!, process.env?.TWILIO_AUTH_TOKEN!);
    }
    client: Twilio;
    async sendSms(number: string, body: string) {
        try {
            const message = await this.client.messages.create({
                to: "+91" + number,
                messagingServiceSid: process.env.MESSAGE_SERVICE_SID!,
                body
            });
            return { status: true, messageData: message };
        }
        catch (err) {
            console.log(err);
            return { status: false, messageData: null };
        }
    }
}
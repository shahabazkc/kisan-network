import twilio, { Twilio } from 'twilio';

export class TwilioService {
    constructor() {
        this.client = new Twilio(process.env?.TWILIO_ACCOUNT_SID!, process.env?.TWILIO_AUTH_TOKEN!);
    }
    client: Twilio;
    async sendSms(to: string, number: string, body: string) {
        try {
            const message = await this.client.messages.create({
                body,
                from: number,
                to
            });
            return { status: true, message };
        }
        catch (err) {
            console.log(err);
            return { status: false, message: null };
        }
    }
}
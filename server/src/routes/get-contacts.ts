import express from 'express';
import { getContactsController } from '../controllers/get-contact-controller';

const router = express.Router();

router.get('/', getContactsController);

export { router as getContactsRouter };
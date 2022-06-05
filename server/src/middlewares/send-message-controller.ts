import { body } from "express-validator";

export const sendMessageController = [
    body("message")
        .isString()
        .isLength({ min: 10 })
        .withMessage("Message must be a string with at least 10 characters"),
    body('firstName')
        .isString()
        .isLength({ min: 2 })
        .withMessage('First name must be a string with at least 2 characters'),
    body('lastName')
        .isString()
        .isLength({ min: 2 })
        .withMessage('Last name must be a string with at least 2 characters'),
    body('number')
        .isString()
        .isLength({ min: 10 })
        .withMessage('Number must be a string with at least 10 characters')
];

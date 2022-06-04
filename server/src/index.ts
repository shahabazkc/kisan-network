import app from "./app";
import { connectDb } from "./config/db";
// Start app Function
const start = async () => {
    try {
        // Connect DB
        connectDb()

        // Listen to the port
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Listening on port ${process.env.PORT || 8000}`);
        });

    } catch (err) {
        console.log(err);
    }
};

start();
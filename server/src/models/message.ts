import mongoose from 'mongoose';

interface MessageAttrs {
    message: string;
    firstName: string;
    lastName: string;
    number: string;
};

interface MessageModel extends mongoose.Model<any>{
    build(attrs: MessageAttrs): MessageDoc;
};

interface MessageDoc extends mongoose.Document {
    message: string;
    firstName: string;
    lastName: string;
    number: string;
}

const messageSchema = new mongoose.Schema({
    message:{   
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}, {
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

messageSchema.statics.build = (attrs: MessageAttrs) => {
    return new Message(attrs);
}

const Message = mongoose.model<MessageDoc, MessageModel>('Message', messageSchema);

export { Message };
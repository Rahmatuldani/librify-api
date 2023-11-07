import mongoose from "mongoose";

interface IUser {
    _id: mongoose.Types.ObjectId;
    nik: string;
    name: string;
    email: string;
    avatar: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    nik: String,
    name: String,
    email: String,
    password: String,
    avatar: {
        type: String,
        default: 'blank-avatar.jpg'
    }
}, {
    versionKey: false,
    timestamps: true,
})

const UserModel = mongoose.model<IUser>('User', userSchema);

export { UserModel, IUser };
import { IUser, UserModel } from "../models/user"

async function getUsers(req: any, res: any) {
    try {
        const users: IUser[] = await UserModel.find();
        
        return res.status(200).json({
            users
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

export {
    getUsers
}
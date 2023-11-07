import { IUser, UserModel } from "../models/user";

async function register(req: any, res: any) {
    const { nik, name, email, password } = req.body;

    try {
        const user: IUser = await UserModel.create({
            nik, name, email, password
        })
        
        return res.status(200).json({
            user
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

export { 
    register 
};
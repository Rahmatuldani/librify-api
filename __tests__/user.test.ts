import mongoose from "mongoose";
import request from "supertest";
import app from '../src/';
import { UserModel } from "../src/models/user";
require('dotenv').config({ path: '.env.local' });

beforeAll(async () => {
    await mongoose.connect(`${process.env.MONGO_URL}`);
})

afterAll(async () => {
    await mongoose.disconnect();
})

describe('User API tests', () => {
    it('should return a user from MongoDB', async () => {
        const user = await UserModel.create({
            "nik": "111444",
            "name": "Testing",
            "email": "testing11@gmail.com",
            "password": "123456"
        })

        const response = await request(app).get('/api/users');

        expect(response.status).toBe(200);
    });

})
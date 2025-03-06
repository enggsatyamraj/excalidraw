import express from 'express'
import jwt from 'jsonwebtoken';
import { middleware } from './middleware';
import { JWT_SECRET } from '@repo/backend-common/config'

const app = express();

app.post("/signup", (req, res) => {
    // db call
    res.status(200).json({
        success: true,
        user: {
            userId: 1234
        }
    })
});

app.post("/signin", (req, res) => {
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET)
    res.status(200).json({
        success: true,
        message: "Logged in successfully",
        token: token
    })
});

app.post("/room", middleware, (req, res) => {
    // db call
    res.status(200).json({
        success: true,
        message: "room created successfully",
        roomId: 1234
    })
})

app.listen(4000, () => {
    console.log("server is running on port ", 4000)
})
import { Request, Response, NextFunction } from "express";
import { NewUserRequestBody } from "../types/types.js";
import { User } from "../models/user.js";

export const newUser = async (
    req: Request<{}, {}, NewUserRequestBody>, 
    res: Response, 
    next: NextFunction
) => {
    try {
        const { name, email, photo, gender, _id, dob } = req.body;

        const user = await User.create({
            name, 
            email, 
            photo, 
            gender, 
            _id, 
            dob: new Date(dob),
        });

        return res.status(200).json({
            success: true,
            message: `User ${user.name} added successfully!`,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error,
        });
    }
};
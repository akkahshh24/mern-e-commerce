import mongoose from "mongoose";
import validator from "validator";

interface IUser extends Document {
    _id: string,
    name: string,
    email: string,
    gender: "male" | "female" | "others",
    dob: Date,
    photo: string,
    role: "admin" | "user",
    createdAt: Date,
    updatedAt: Date,
    age: number,    // virtual attribute
}

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: [true, "Please enter ID"],
        },
        name: {
            type: String,
            required: [true, "Please enter your full name"],
        },
        email: {
            type: String,
            unique: [true, "Email ID already registered"],
            required: [true, "Please enter your email ID"],
            validate: validator.default.isEmail,
        },
        gender: {
            type: String,
            enum: ["male", "female", "others"],
            required: [true, "Please enter your gender"],
        },
        dob: {
            type: Date,
            required: [true, "Please enter your date of birth"],
        },
        photo: {
            type: String,
            required: [true, "Please enter photo link"],
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        }
    },
    {
        timestamps: true,
    }
);

userSchema.virtual("age").get(function() {
    const today = new Date();
    const dob: Date = this.dob;

    let age = today.getFullYear() - dob.getFullYear();

    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }

    return age;
});

export const User = mongoose.model<IUser>("User", userSchema)
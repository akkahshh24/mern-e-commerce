import mongoose from "mongoose"

export const connectDB = () => {
    mongoose
        .connect("mongodb+srv://admin:JT52L8MI2X77QIlg@cluster0.alqyusn.mongodb.net/", {
        dbName: "mern-e-commerce"
    })
        .then((c) => console.log(`DB connected to ${c.connection.host}`))
        .catch((e) => console.log(e));
};
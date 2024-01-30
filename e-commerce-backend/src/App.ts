import express from "express";

import userRoute from "./routes/user.js";

const port = 3000;
const app = express();

app.use("/api/v1/user", userRoute);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})
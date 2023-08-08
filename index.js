const express = require("express");
const app = express();

app.get("/check", async (req, res) => {
    try {
        res.status(200).json({ check: false })
    } catch { }
})

app.listen(3000, () => console.log("server is running..."));
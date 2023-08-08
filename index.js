const express = require("express");
const app = express();

app.get("/check", async (req, res) => {
    try {
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
        res.status(200).json({ check: false })
    } catch { }
})

app.listen(3000, () => console.log("server is running..."));
// const express = require("express");
// const app = express();

// app.get("/check", async (req, res) => {
//     try {
//         res.setHeader('Content-Type', 'text/html');
//         res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//         res.status(200).json({ check: false })
//     } catch { }
// })

// app.listen(3000, () => console.log("server is running..."));


// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})

app.get('/check', (req, res) => {
    res.status(200).json({ check: false })
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app
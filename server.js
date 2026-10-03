const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.static(__dirname));

app.get("/api/status", (req, res) => {
    res.json({ message: "Kingdom Wars server is online" });
});

app.listen(PORT, () => {
    console.log(`Kingdom Wars server running at http://localhost:${PORT}`);
});
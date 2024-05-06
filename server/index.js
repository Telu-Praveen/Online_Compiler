const express = require('express');
const app = express();
const cors = require('cors');
const {generateFile}=require('./generateFile')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello world");
});


app.post("/run",async (req, res) => {
    try {
       const { language = 'java', code } = req.body;
       const filePath=await generateFile(language,code)
       res.json({filePath,language,code});
    } catch (error) {
        res.status(500).json({ error: "error" });
    }
})

app.listen(8000, () => {
    console.log("Server listening on port 8000");
});

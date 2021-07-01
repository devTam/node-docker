import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("Hi there!")
});

app.listen(PORT, () => {
    console.info(`App listening on port: ${PORT}`)
});
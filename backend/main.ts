import express from 'express';
const app = express();
import config from './config.json';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(config.port, () => {
    return console.log(`Express is listening at http://localhost:${config.port}`);
});
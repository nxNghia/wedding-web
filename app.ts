import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile('nghia_my_mobile_wedding.html', {
        root: './'
    });
});

app.listen(3000);

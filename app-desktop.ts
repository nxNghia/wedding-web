import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile('web_landing_page.html', {
        root: './'
    });
});

app.listen(3030);

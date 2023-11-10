import chalk from 'chalk';
import fs from 'node:fs/promises';
import express from 'express';

const app = express();

app.get('/',async (req, res)=> {

    const fileContent = await fs.readFile('./index.html', {
        encoding:'utf8'
    })
    res.setHeader('content-type','text/html').status(200).end(fileContent)
})

app.listen(3000, ()=> {
    console.log(chalk.red("Listening at port: 3000!"));
})
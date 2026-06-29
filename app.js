const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Aplicação Node.js no Azure App Service</h1>
        <p>Deploy realizado via GitHub Actions!</p>
    `);
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
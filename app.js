const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {

    const ambiente = process.env.ENV_NAME || "local";

    res.send(`
        <h1>Aplicação Node.js no Azure App Service</h1>
        <p>Deploy realizado via GitHub Actions!</p>

        <h2 style="color: blue;">
            🚀 VERSÃO 3.0 🚀
        </h2>

        <h3 style="background-color: yellow; display: inline-block; padding:8px;">
            Ambiente Atual: ${ambiente}
        </h3>
    `);
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
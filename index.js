const express = require("express"); // Importação do módulo express
const app = express();  // instanciando o frameword express() na const app
const port = 3000 // Const para armazenar a porta do servidor

app.get("/", function (req, res) { // Rota no momento sem nome
  res.send("Hello World");
});

app.get("/teste", function (req, res) { 
  res.send("Rota de teste"); 
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`)); // Liga o servidor na porta 3000


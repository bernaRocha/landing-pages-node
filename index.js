const express = require("express"); // Importação do módulo express
const app = express();  // instanciando o frameword express() na const app
const port = 3000 // Const para armazenar a porta do servidor

const path = require('path')
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) { // Rota no momento sem nome
  res.send("Hello World");
});

app.get("/teste", function (req, res) { 
  res.send("Rota de teste"); 
});

// app.get("/index", (req, res) => { 
//   res.render("../views/index"); // Nome do arquivo, o EJS já busca dentro da pasta views.
// });



app.get("/index", (req, res) => {
  const devList = ["Backend", "Frontend", "Fullstack"]; // Envio de itenspara a LI
  const analyticsList = ["Engenharia de dados", "Ciência de dados"];
  res.render("index", { 
    titulo: "Blue",
    devList: devList, 
    analyticsList: analyticsList
  });
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`)); // Liga o servidor na porta 3000
import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

//* Define-se as rotas da api fictícia com 'routes'. O 'this.namespace' é referente a
//* chamada de API vindo a partir do endereço /api.
//* this.get: quando houver o método 'get' (requisição de busca/listagem), apara a rota
//* transactions, retorna-se uma função com um objeto. O Mirage.js interpreta o objeto que será
//* retornado por '/transations' a partir do método GET.

//* O Mirage.js serve com uma ferramenta para auxiliar na
//* visualização de dados dinâmicos de uma API, mesmo que
//* fictícia, quando o back-end de uma aplicação ainda
//* não está pronto.
createServer({
  //* O Model é um método que é proveniente do Schema, uma espécie de banco de dados "integrado" do
  //* Mirage. Esse método servirá para integrar as rotas da API, tanto as informações provenientes de GET
  //* como as enviadas por POST.
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2022-03-01 15:45:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: " Casa",
          amount: 1100,
          createdAt: new Date("2022-03-15 11:20:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      //* Retorna todas as transactions que estão dentro do banco de dados Schema
      return this.schema.all("transaction");
    });

    //* O parâmetro ' request' pega os dados que estão sendo enviandos para /transactions
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

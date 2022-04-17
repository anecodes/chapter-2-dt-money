/* O axios é uma biblioteca utilizada para fazer a
integração da aplicação com uma API sem precisar usar o
fetch(). O axios é mais vantajoso que o fetch() por
alguns motivos, como por exemplo: possui funções de
solicitação que têm o mesmo nome dos métodos HTTP (para
fazer um GET, é só usar .get()), não é necessário
transformar a solicitação em uma string json como no fetch(),
entre outras vantagens 
(https://www.freecodecamp.org/portuguese/news/como-usar-o-axios-com-o-react-o-guia-definitivo-2021/). 
Abaixo, é inserido a url da API em baseURL, que é a
propriedae que irá definir a URL base que será utilizad
para fazer requisições ao servidor. */

import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

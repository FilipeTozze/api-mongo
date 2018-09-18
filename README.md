## Guia

Esse projeto foi criando usando o React CLI para o front-end, e express, mongodb e docker no back-end.

No front-end no menu Swagger tem a documentação da API de clients. Para funcionar, basta acessar a pasta front-end rodar o comando npm install e após a instalação o comando npm start.

No back-end, basta acessa a pasta e rodar também o comando npm install e após a instalação rodar o comando do docker docker compose up. No arquivo app.js dentro da pasta back-end existem duas variáveis connectTypeLocal e connectTypeAWS onde alternando entre elas é possível acessar banco local do docker ou utilizar o mongodb da AWS.


Foi utilizado no projeto front-end:
  - React Cli
  - React Router
  - React Redux
  - Conceito SPA (Single Page Application)
  - Redux
  - Ant Desing (css lib)
  - CSS
  - HTML
  - Axios
  - ES6 Feacture (map, filter, etc)
  - Webpack (incluso no react cli)

Foi utilizado no projeto back-end: 
  - Axios
  - Mongodb
  - Express
  - Docker

O server é levantado na porta 3100 e o front na porta 3000.


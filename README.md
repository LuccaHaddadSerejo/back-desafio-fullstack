# Desafio fullstack -- BACKEND

## Siga o passo a passo para iniciar o projeto:
 1. Clone o repositório na branch "main".
 2. Instale as dependências do projeto com o comando **npm i** ou **yarn**.
 3. Crie um arquivo **.env** na raiz do projeto com base no arquivo **.env.example**. Crie o seu database com o PostgreSQL usando o mesmo nome que colocar no .env
 4. Faça a migração das tabelas do TypeORM para o seu database com o seguinte comando:  **npm run typeorm migration:run -- -d ./src/data-source.ts** ou **yarn typeorm migration:run -d ./src/data-source.ts**
 5. Inicie o projeto localmente utilize o comando: **npm run dev** ou **yarn dev**.


## Requisitos do Serviço

Esse serviço possui uma API REST para criar, listar, atualizar e deletar os dados do banco de dados.

- O banco de dados utilizado foi  o **PostgreSQL**.
- Foi desenvolvido com Typescript, Typeorm, Node.js, Express e outras bibliotecas.
- Link para o frontend: https://github.com/LuccaHaddadSerejo/front-desafio-fullstack

## Endpoints do serviço

| Método | Endpoint             | Responsabilidade                               | Permissão            |
| ------ | -------------------- | ---------------------------------------------- | -------------------- |
| POST   | /login               | Faz login do usuário                           | N/A                  |
| POST   | /users               | Cria um novo usuário                           | N/A                  |
| GET    | /users               | Lista todos os usuários                        | Usuário autenticado  |
| GET    | /users/id            | Lê um usuário com base no ID                   | Usuário autenticado  |
| PATCH  | /users/id            | Atualiza um usuário                            | Dono da conta        | 
| DELETE | /users/id            | Deleta um usuário                              | Dono da conta        |
| POST   | /contacts            | Cria um contato                                | Usuário autenticado  |
| GET    | /contacts            | Lista todos os contatos                        | Usuário autenticado  |
| GET    | /contacts/id         | Lê um contato com base no ID                   | Usuário autenticado  |
| PATCH  | /contacts/id         | Atualiza um contato                            | Dono e Manager       |
| DELETE | /contacts/id         | Deleta um contato                              | Dono e Manager       |


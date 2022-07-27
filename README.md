# Boas vindas ao projeto BlogsApi!

## Oque foi desenvolvido

Nesse projeto foi desenvolvido uma API RESTful utilizando arquitetura MSC(Model, Service, Controller),
juntamente com o uso do sequelize, para acessar um banco de dados que foi desenvolvido utilizando o MySQL.

Sendo possivel as seguintes ações:

* Necessario login com usuario e senha para poder ter acesso a qualquer funcionalidade da aplicação.
* Ao tentar fazer login, é feita a validação do usuario utilizando JWT(JSON Web Token).
* Adicionar, editar, remover e pesquisar posts.
* Organização de posts por usuario, sendo assim um usuario so pode editar ou remover posts que o pertencem.

# Habilidades

* Aplicação desenvolvida utilizando o Node.js e framework Express
* Criação e manipulação do banco de dados MySQL utilizando o ORM Sequelize
* API RESTful desenvolvida com a arquitetura MSC(Model, service, Controller)
* Utilização do JWT(JSON web token) para autenticar e gerenciar logins de usuarios e manter usuarios logados por periodos pré-determinados, sem a necessidade de fazer login toda vez que encerrar o navegador.
* Foi utilizado o Joi, para facilitar a criação dos testes/validações e manipulaçao de erros
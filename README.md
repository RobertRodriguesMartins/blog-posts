# Bem Vindo ao meu primeiro projeto pessoal Full-Stack, o Blog-posts.

Hospedados nas máquinas VPS da Digital Ocean, aplicação está correndo através de uma imagem DOCKER.

 A aplicação não possui workers, o que traz uma limitação em relação ao número de requests simultâneas
ao banco.

  Esse projeto embora simples em tese foi bem complexo, 
a API do blog posts conta com muitas rotas e todas estão testadas com MOCHA, CHAI E SINON.

O Banco de dados possui 5 tabelas, é um banco relacional, MYSQL.
O sequelize (ORM) se certifica de criar e popular o banco e gerenciar algumas queries.

A implementar:
 - Favoritar posts 
 - Likes em posts (frontend implementado, falta rota na api)
 - editar post (rota na api pronta)
 - deletar post (rota na api pronta)
 - meus posts (rota na api pronta)

Ideias:
 - gerenciar seus dados de perfil, foto e blog pessoal podendo ser privado ou público.

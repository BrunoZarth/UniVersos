API CADASTRO DE FUNCIONÁRIOS:

-> Deve cadastrar funcionário: dados talvez relacionados ao ibge (crud funcionários);
-> Bastantes opções de getBy.
-> inserir 850 colaboradores no DB.

-> O Funcionário loga, (ou seja, as rotas exigirão permissão)


Rotas post: sujestões, reclamações, questionários/pesquisas;
Rotas get: questionários/pesquisas (integração com api do administrador)

As informações vão ser armazenadas em um banco de dados, protegendo o funcionário (sempre anônimo), somente informações sociais.





funcionario json: 

{
  "employer": {
    "id": "UUID",
    "name": "String",
    "position": "String",
    "email": "String",
    "password": {
      "hash": "String",
      "salt": "String"
    },
    "adress": "String",
    "nationality": "String",
    "age": Integer,
    "education_level": "Integer",
    "gender": "String",
    "ethnicity": "String",
    "lgbtqi+": "Boolean",
    "pcd": "Boolean",
    "neurodiverse": "Boolean",
    "low-income-background": "Boolean",
    "work-model": "String",
    "hire-date": "Date"
  }
}
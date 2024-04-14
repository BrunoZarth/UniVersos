API CADASTRO DE FUNCIONÁRIOS:

-> Deve cadastrar funcionário: dados talvez relacionados ao ibge (crud funcionários);
-> Bastantes opções de getBy.
-> inserir 850 colaboradores no DB.

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
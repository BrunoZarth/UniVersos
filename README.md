# UniVersos: 


Um jogo de palavras com “universo” e “versos”, simbolizando a inclusão de todas as vozes e perspectivas.


# Sobre a aplicação:

Os funcionários cadastram-se passando informações relevantes como grupo étnico, idade, gênero, sem obrigatóriamente preencherem todos os campos (atenção para validação);
estes Terão uma área onde podem manifestar acontecimentos, sentimentos, reflexões ou escrever o que sentirem vontade. também poderão responder a questionários/pesquisas propostas. estas mensagens ficam armazenadas de maneira anônima, juntamente com as informações relevantes, que servirão para análise de dados por parte do sistema de admin. 

O sitema de admin se encarregará de gerar questionários/pesquisas, que será utilizadas pela outra aplicação, além de ser um sistema de consultas robusto que compara dados dos funcionários de dentro da empresa, entrega estatísticas e utiliza-se de API'S externas como a do IBGE para seus propósitos.

A propósta da aplicação é criar um espaço onde os funcionários possam expressar-se e sentire-se à vontade para relatar acontecimentos e perepções relativas aos grupos que pertencem. gerando sentimento de inclusão aos funcionários. desta forma também gerando dados valiosos para a administração de recursos humanos sobre diferentes tipos de grupo.

A aplicação também tem conexão com API's do IBGE e cruza dados dos habitantes do brasil com empregados da empresa.

A partir do admin tambem podemos visualisar porcentagens de diferentes grupos em relação ao total, o que auxilia na garantia de diversas leis de cotas etc. 

# Backend:

São 2 api's, uma para cadastro de funcionários e mensagens de funcionários, e um administrador.
cada qual com seu próprio banco de dados.


# Como iniciar a aplicação

Via docker. basta o comando:

docker compose up

que o docker se encarregará de subir as duas aplicações com seus respectivos bancos de dados. Também deve popular os bancos.


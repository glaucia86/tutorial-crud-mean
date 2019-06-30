# Tutorial CRUD MEAN com Angular 8 & Azure by Glaucia Lemos

[![Tutorial-MEAN.jpg](https://i.postimg.cc/d1nGG2Bg/Tutorial-MEAN.jpg)](https://postimg.cc/njjsJQN1)

Repositório responsável pelo tutorial realizado no meu canal do **[Youtube](https://www.youtube.com/user/l32759)**

## O que eu vou aprender?! 📙

Durante o tutorial, você aprenderá a desenvolver uma aplicação que consiste em realizar um cadastro de um Funcionário para uma empresa XYZ. A qual, usaremos as operações CRUD (Create, Read, Update & Delete). A aplicação estará integrada com o Back-End(Node.js) e estará hospedada na plataforma Cloud da Microsoft - Azure.

Os dados do Funcionário consiste em:

**Classe: Funcionario**

+ idFuncionario: (number - guid gerado pelo MongoDb)
+ nomeFuncionario: string
+ cargo: string
+ numeroIdentificador: number

## Recursos Utilizados no Desenvolvimento da Aplicação 💻

- Visual Studio Code **[DOWNLOAD AQUI](http://bit.ly/2IfNp9F)**
- Node.js **[DOWNLOAD AQUI](https://nodejs.org/en/)**
- Angular CLI ~ 7.2.2 **[DOWNLOAD AQUI](https://angular.io/)**
- Mongodb Community Server **[DOWNLOAD AQUI](https://www.mongodb.com/download-center/community)**
- MongodB Compass GUI **[DOWNLOAD AQUI](https://www.mongodb.com/download-center/compass)**
- Boostrap 3/4 **[DOWNLOAD AQUI](https://getbootstrap.com/docs/3.3/)**
- Cadastro no Site Azure **[AQUI](http://bit.ly/2WP5hMJ)**
- Postman **[DOWNLOAD AQUI](https://www.getpostman.com/)**

## Ementa do Workshop: :pencil2:

- Breve Introdução sobre MEAN
- O que iremos Desenvolver
- Preparação ao Ambiente de Desenvolvimento
- Desenvolvimento da Aplicação (Front-End & Back-End)
- Considerações Finais

## Vídeos do Workshop: :movie_camera:

### Módulo 1 - Desenvolvimento do Front-End
- [Aula 01 - Breve Introdução sobre MEAN](https://youtu.be/NJEZDV77bhQ)
- [Aula 02 - Preparação ao Ambiente de Desenvolvimento](https://youtu.be/A327bvf5DLw)
- [Aula 03 - Instalação do Angular 7 & Outras Dependências](https://youtu.be/HtU3Wd4hX0c)
- [Aula 04 - Criando os Componentes no Angular](https://youtu.be/NX_F-Q1fPpI)
- [Aula 05 - Criando Navegação (NavBar) com Angular](https://youtu.be/EqR8PPjXfvs)
- [Aula 06 - Inclusão do Pacote: Angular 2 Slim Loading Bar](https://youtu.be/8GvG_jc10Qg)
- [Aula 07 - Desenvolvendo os Eventos Router do Ng2 Slim na Aplicação](https://youtu.be/iHux3efFLAU)
- [Aula 08 - Desenvolvimento do Form com Bootstrap na Aplicação](https://youtu.be/HzL46NrLYBM)
- [Aula 09 - Desenvolvimento da Validação dos Forms](https://youtu.be/zgU9O0wn31E)
- [Aula 10 - Criação da Classe Modelo & Início Desenvolvimento do HttpClient](https://youtu.be/Px0AzBrOQYg)
- [Aula 11 - Correções Significativas no Front-End](https://youtu.be/yCl_GW3-aD4)
- [Aula 12 - Desenvolvimento da Lógica do Btn 'Adicionar Funcionário'](https://youtu.be/RWY4CG-7NYA)

### Módulo 2 - Desenvolvimento do Back-End
- [Aula 13 - Configuração inicial do Back-End - Parte I](https://youtu.be/5ahj4TM3GxQ)
- [Aula 14 - Configuração inicial do Back-End - Parte II](https://youtu.be/D9L6yYaQY2o)
- [Aula 15 - Desenvolvimento do arquivo 'server.js'](https://youtu.be/3a7fquaCwlQ)
- [Aula 16 - Refatorando o projeto no Back-End](https://youtu.be/ud-h8nIj9X0)
- [Aula 17 - Atualização do v.7 para v.8 do Angular CLI](https://youtu.be/seJliDMpRd0)
- [Aula 18 - Criação das Connections Strings na api: MongoDb & CosmosDb](https://youtu.be/LEXJK983WTM)
- [Aula 19 - Desenvolvimento das Rotas da api 'Funcionario'](https://youtu.be/FQP4a_lzDck)
- [Aula 20 - Desenvolvimento da Rota 'POST' da api](https://youtu.be/Sg62scoF-0U)
- [Aula 21 - Desenvolvimento da Rota 'GET' da api](https://youtu.be/x4V2Q6uGfEI)
- [Aula 22 - Desenvolvimento da Rota 'GetById' da api](https://youtu.be/8IMAVkDxGoE)
- [Aula 23 - Desenvolvimento da Rota 'Update' da api](https://youtu.be/xRQI_jDCMVU)
- [Aula 24 - Desenvolvimento da Rota 'Delete' da api](https://youtu.be/ilrLmdslfyM)
- [Aula 25 - Em Breve]()
- [Aula 26 - Em Breve]()

### Módulo 3 - Hospedagem & Deploy da Aplicação no Azure (Em Breve)

- [Aula 27 - Em Breve]()
- [Aula 28 - Em Breve]()
- [Aula 29 - Em Breve]()
- [Aula 30 - Em Breve]()
- [Aula 31 - Em Breve]()
- [Aula 32 - Em Breve]()
- [Aula 33 - Em Breve]()
- [Aula 34 - Em Breve]()
- [Aula 35 - Em Breve]()

## Executando a Aplicação Localmente ❗️

### Executando a aplicação no lado do Front-End

1) Instalar os pacotes com o comando: (dentro da pasta `front`)

``` 
> npm install
```

2) Depois executar o seguinte comando para executar a aplicação (dentro da pasta `front`):

```
> ng serve -o
```

Depois bastam abrir o browser em **localhost:4200** (porta padrão de uma aplicação Angular)

### Executando a aplicação no lado do Back-End

1) Instalar os pacotes com o comando: (dentro da pasta `api`)

``` 
> npm install
```

2) Depois executar o seguinte comando para executar a aplicação (dentro da pasta `api`):

```
> nodemon
```

Depois bastam abrir o postamn em **localhost:8000** e testar as requisições

## Atualização Limpa para a versão atual do Angular 7:

Executar os passos abaixo:

1) Executar os comandos abaixo:

```
> npm cache verify
```

```
> npm install -g @angular/cli?
``` 

2) Porém, se executou os comandos acima e não resolveu o problema, tenta executar os seguintes comandos abaixo:

```
> npm uninstall -g angular-cli (abrindo o Power Shell como Administrador)
> npm cache verify
> npm cache clean
> npm install -g @angular/cli@latest
> ng --version
```

3) Se mesmo assim depois de executar os passos acima, com o Power Shell executando como **Administrador** e você não conseguiu atualizar para o Angular 7, execute os seguintes comandos abaixo:

```
> ng update @angular/cli
> ng --version
```

4) Se tudo der certo (numa dessas 3 maneiras sempre vai dar). Sempre execute os comandos abaixo:

```
> npm cache verify
> npm cache clean (para versões antigas do npm)
```

E vòilá! :heart: :heart:

## Links e Recursos Adicionais

- ✅ **[Depurando Aplicação em Angular](http://bit.ly/2G1oBAI)**
- ✅ **[Tutorial Hospedando Aplicativo Web Azure](http://bit.ly/2uO4I9P)**
- ✅ **[Hospede & Faça Deploy de Site Estático no Azure](http://bit.ly/2CXzKR7)**
- ✅ **[Free Trial Azure](http://bit.ly/2WP5hMJ)**
- ✅ **[Azure for Students](https://aka.ms/AA5f3zk)**
- ✅ **[CosmosDb](https://aka.ms/AA5f3zj)**
- ✅ **[Tutorial Criando um aplicativo Node.js e MongoDB no Azure](https://aka.ms/AA5f3zh)**
- ✅ **[Tutorial 1: Compilando um aplicativo Web do Node.js usando Azure Cosmos DB](https://aka.ms/AA5eq4r)**
- ✅ **[Tutorial 2: Migração offline do MongoDB para o Azure Cosmos DB](https://aka.ms/AA5eq4s)**

## Dúvidas?! ❓

Se tiverem alguma dúvida referente ao código desenvolvido ou para configurar o ambiente em suas máquinas, por favor, bastam criar uma **[ISSUE AQUI](https://github.com/glaucia86/tutorial-crud-mean/issues)** no GitHub que estarei respondendo a vocês ASAP!! :heart: :heart: :heart: :blush:

**(documentação em desenvolvimento)**

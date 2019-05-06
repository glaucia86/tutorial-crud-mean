# Tutorial CRUD MEAN com Angular 7 by Glaucia Lemos

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

## Ementa do Workshop: :pencil2:

- Breve Introdução sobre MEAN
- O que iremos Desenvolver
- Preparação ao Ambiente de Desenvolvimento
- Desenvolvimento da Aplicação
- Considerações Finais

## Vídeos do Workshop: :movie_camera:

### Desenvolvimento do Front-End
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

### Desenvolvimento do Back-End
- [Aula 13 - Em Breve]()
- [Aula 14 - Em Breve]()
- [Aula 15 - Em Breve]()
- [Aula 16 - Em Breve]()
- [Aula 18 - Em Breve]()
- [Aula 19 - Em Breve]()
- [Aula 20 - Em Breve]()

### Hospedagem & Deploy da Aplicação no Azure (Em Breve)
- [Aula 21 - Em Breve]()
- [Aula 22 - Em Breve]()
- [Aula 23 - Em Breve]()
- [Aula 24 - Em Breve]()
- [Aula 25 - Em Breve]()

## Executando a Aplicação Localmente ❗️

### Executando a aplicação no lado do Front-End

1) Instalar os pacotes com o comando: (dentro da pasta `front`)

``` 
> npm install
```

2) Depois executar o seguinte comando para executar a aplicação (dentro da pasta `front`):

```
> ng serve
```

Depois bastam abrir o browser em **localhost:4200** (porta padrão de uma aplicação Angular)

### Executando a aplicação no lado do Back-End

1) Instalar os pacotes com o comando: (dentro da pasta `api`)

``` 
> npm install
```

2) Depois executar o seguinte comando para executar a aplicação (dentro da pasta `api`):

```
> npm run dev
```

## Atualização Limpa para a versão atual do Angular 7:

Executar os passos abaixo:

```
> npm cache verify
```

```
> npm install -g @angular/cli?
``` 

2) Se sim e não resolveu o problema. Tenta fazer o seguinte:

```
> npm uninstall -g angular-cli (abrindo o Power Shell como Administrador)
> npm cache verify
> npm cache clean
> npm install -g @angular/cli@latest
> ng --version
```

3) Se mesmo assim depois de executar os passos acima, com o Power Shell executando como Administrador e você não conseguir atualizar para o Angular 7, execute o seguinte comando:

```
> ng update @angular/cli
> ng --version
```

4) Se tudo der certo (numa dessas 3 maneiras sempre vai dar). Sempre execute os comandos:

```
> npm cache verify
> npm cache clean (para versões antigas do npm)
```

E vòilá!

## Links e Recursos Adicionais:

* **[Depurando Aplicação em Angular](http://bit.ly/2G1oBAI)**
* **[Tutorial Hospedar Aplicativo Web Azure](http://bit.ly/2uO4I9P)**
* **[Deploy Site Estático Azure](http://bit.ly/2CXzKR7)**
* **[Free Trial Azure](http://bit.ly/2WP5hMJ)**

## Dúvidas?! ❓

Se tiverem alguma dúvida referente ao código feito ou para configurar o ambiente bastam criar uma **[ISSUE AQUI](https://github.com/glaucia86/tutorial-crud-mean/issues)** no GitHub que estarei respondendo a vocês!! :heart: :heart: :heart: :blush:

**(documentação em desenvolvimento)**

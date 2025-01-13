# Super Task

Software para gerenciamento de tarefas

## Pré-requisitos
- Node.js (versão 16 ou superior recomendada)
- MySQL
- IDE

## Configuração do ambiente
### 1. Download do projeto
Na branch main, clonar esse repositório ou baixar a pasta zip e abrir o projeto na sua IDE.

### 2. Instale as dependências
Instale as dependências do projeto com o gerenciador de pacotes de sua escolha:

```bash
#Usando NPM
npm install

#Usando Yarn
yarn install
```
### 3. Configure o Banco de Dados
1. No seu banco MySQL local, crie um schema chamado todolist
2. Crie na raiz do projeto uma pasta chamada config, e dentro dela um arquivo chamado config.json, que deve ter a estrutura abaixo.
   Em seguida, altere o valor de "password" dentro de "development", colocando a sua senha do MySQL. 
```bash
{
  "development": {
    "username": "root",
    "password": "SUA SENHA",
    "database": "todolist",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
3. Instale a CLI do sequelize e execute as migrations
```bash
npm install sequelize-cli --save-dev

npx sequelize db:migrate
```
No seu banco de dados, é para o schema ter 4 tabelas (sequelizemeta, tasks, types, users).

4. Crie um usuário
Você pode criar um usuário direto no banco de dados (a funcionalidade de usuários foi implementada somente a estrutura, não foi possível finalizar a funcionalidade de autenticação).

5. Rode o projeto
```bash
npm run dev
```

## Observações
1. Foi iniciada a funcionalidade de autenticação, por isso existe no banco uma tabela users e as buscas são feitas filtrando pelo usuário de id 1, porém não foi possível concluir. Então quando aparecer a página de Login, basta clicar no botão entrar sem preencher o formulário que você será redirecionado para tela com as tarefas.

2. Além da tabela de tarefas (tasks) existe também um de tipos (types). Para criar uma tarefa é necessário primeiro criar um tipo. O tipo organiza as tarefas em categorias.

3. É possível mudar o status de uma tarefa clicando no checkbox na página Home (será marcada como concluída) ou alterando o status pelo select menu nas páginas dos tipos, que detalham as informações das tarefas

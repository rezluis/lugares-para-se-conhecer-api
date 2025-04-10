# 🌍 Lugares para se Conhecer - API

API desenvolvida para gerenciar e listar lugares turísticos que valem a pena conhecer. Este projeto utiliza **Nestjs**, **PostgreSQL** e é executado via **Docker**.

---

## 🚀 Como executar a aplicação

### 🐳 Usando Docker (recomendado)

#### 1. Pré-requisitos

- [Docker](https://www.docker.com/) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado

#### 2. Clone o repositório

```bash
git clone https://github.com/seu-usuario/lugares-para-se-conhecer-api.git
cd lugares-para-se-conhecer-api
```

### 3. Suba os containers

```bash
docker compose up --build
```

### 4. Acesse a API
A aplicação estará disponível em:

http://localhost:3000

### 🧪 Testando a API

Você pode utilizar ferramentas como o Postman ou Insomnia para testar as rotas da API.

Exemplo de requisição:

```bash
GET http://localhost:3000/place
```

### ⚙️ Variáveis de Ambiente

As variáveis de ambiente já estão definidas no docker-compose.yml, mas você pode criar um arquivo .env para uso local, se necessário:

DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=1234
DB_DATABASE=postgres

### 🗃️ Banco de Dados

O banco de dados utilizado é o PostgreSQL. Ao iniciar a aplicação com Docker, um container é criado automaticamente com as configurações definidas no docker-compose.yml.

lugares-para-se-conhecer-api/
├── src/
│   ├── place/
        ├──dto/
        ├──entities/
│   ├── app.module.ts
│   └── main.ts
├── Dockerfile
├── docker-compose.yml
└── README.md

### 🧑‍💻 Autor

Desenvolvido por Luis Felipe Silva Rezende.
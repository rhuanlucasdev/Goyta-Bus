# Arquitetura do Projeto – Goyta Bus

## 1. Visão Geral

O **Goyta Bus** é um projeto desenvolvido em formato **monorepo**, com separação clara entre backend e frontend, visando facilitar manutenção, escalabilidade e colaboração entre múltiplos desenvolvedores.

O projeto encontra-se em **fase inicial de desenvolvimento**, com foco em estabelecer uma base arquitetural sólida antes da implementação extensiva de funcionalidades.

---

## 2. Estrutura do Repositório

```
Goyta-Bus/
├── apps/
│   ├── api/        # Backend (PHP puro)
│   └── web/        # Frontend (React + TypeScript)
├── docs/           # Documentação do projeto
│   └── architecture.md
├── src/            # (Reservado para uso futuro / scripts compartilhados)
└── README.md
```

---

## 3. Backend (apps/api)

### 3.1 Stack

* PHP (sem frameworks)
* Composer (autoloading e dependências)
* Arquitetura inspirada em princípios de **Clean Architecture** e **DDD simplificado**

### 3.2 Princípios Arquiteturais

* Separação clara de responsabilidades
* Independência de frameworks
* Código orientado a domínio e regras de negócio
* Facilidade de testes e manutenção

### 3.3 Organização de Pastas (Proposta)

```
apps/api/
├── public/           # Entry point (index.php)
├── src/
│   ├── Domain/       # Entidades e regras de negócio
│   ├── Application/  # Casos de uso (UseCases / Services)
│   ├── Infrastructure/
│   │   ├── Http/     # Controllers, Requests, Responses
│   │   ├── Database/ # Conexões, Repositórios concretos
│   └── Shared/       # Código reutilizável
├── composer.json
└── composer.lock
```

### 3.4 Fluxo de Requisição (Backend)

1. Requisição HTTP entra via `public/index.php`
2. Router direciona para o Controller adequado
3. Controller delega a lógica para um UseCase
4. UseCase interage com Repositórios e Entidades
5. Resposta é retornada ao cliente (JSON)

---

## 4. Frontend (apps/web)

### 4.1 Stack

* React
* TypeScript
* Vite
* CSS global (inicialmente)

### 4.2 Princípios Arquiteturais

* Componentização
* Separação entre lógica, layout e estado
* Código previsível e escalável
* Preparado para integração com API REST

### 4.3 Organização de Pastas (Inicial)

```
apps/web/
├── src/
│   ├── app/          # Componentes de alto nível (App, Providers)
│   ├── pages/        # Páginas da aplicação
│   ├── components/   # Componentes reutilizáveis
│   ├── services/     # Comunicação com API
│   ├── styles/       # Estilos globais e variáveis
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

---

## 5. Comunicação Frontend ↔ Backend

* Comunicação via API REST
* Troca de dados em JSON
* Camada de `services` no frontend responsável por chamadas HTTP

---

## 6. Versionamento e Boas Práticas

* GitFlow simplificado (branch `main` + branches de feature)
* Commits semânticos (`feat`, `fix`, `chore`, etc.)
* Documentação desde o início do projeto

---

## 7. Decisões Arquiteturais Importantes

* **PHP sem framework** para total controle e aprendizado profundo
* **Monorepo** para facilitar sincronização entre frontend e backend
* **TypeScript no frontend** para maior segurança e legibilidade
* **Arquitetura definida antes da implementação** para evitar retrabalho

---

## 8. Próximos Passos

* Definir contratos de API (endpoints)
* Iniciar implementação dos primeiros casos de uso do backend
* Planejar rotas e layout inicial do frontend

---

Este documento será atualizado conforme o projeto evoluir.

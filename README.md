# 🐊 gator-ts

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15%2B-4169E1?logo=postgresql&logoColor=white)
![drizzle-orm](https://img.shields.io/badge/ORM-drizzle--orm-C5F74F)
![License](https://img.shields.io/badge/license-ISC-blue)
![CLI App](https://img.shields.io/badge/interface-CLI-black)
![Status](https://img.shields.io/badge/status-Active%20Development-success)

![Last Commit](https://img.shields.io/github/last-commit/IanHewlett/gator-ts)
![Repo Size](https://img.shields.io/github/repo-size/IanHewlett/gator-ts)
![Issues](https://img.shields.io/github/issues/IanHewlett/gator-ts)

**gator-ts** is a TypeScript-based command-line tool built on top of **drizzle-orm** and **PostgreSQL**.  
It provides a CLI interface for user and feed management commands (e.g., register, login, addfeed, follow, browse, etc.).

## 🚀 Features

- CLI entrypoint via `tsx ./src/index.ts`
- Register/login/reset user flows
- List users and feeds
- Follow/unfollow feeds
- Aggregate and browse feed content
- Structured command registration with middleware support

## 🛠️ Getting Started

### Prerequisites

You’ll need the following installed:

- Node.js (v18+ recommended)
- PostgreSQL instance for database storage
- TypeScript (dev dependency)

### Install

1. Clone the repo

```bash
git clone https://github.com/IanHewlett/gator-ts.git
cd gator-ts
````

2. Install dependencies

```bash
npm install
```

## ⚡ Usage

The CLI supports a number of commands. The entrypoint is:

```bash
npm start -- <command> [args...]
```

For example:

```bash
npm start -- register alice@example.com
npm start -- login alice@example.com
npm start -- users
```

### Available Commands

| Command     | Description                          |
| ----------- | ------------------------------------ |
| `register`  | Register a new user                  |
| `login`     | Login existing user                  |
| `reset`     | Reset user password                  |
| `users`     | List all users                       |
| `agg`       | Run aggregation                      |
| `addfeed`   | Add a new feed (requires login)      |
| `feeds`     | List all feeds                       |
| `follow`    | Follow a feed (requires login)       |
| `following` | List followed feeds (requires login) |
| `unfollow`  | Unfollow a feed (requires login)     |
| `browse`    | Browse feed content (requires login) |


## ⚙️ Scripts

In `package.json`, the following helper scripts are defined:

```bash
npm run generate    # run drizzle-kit generate
npm run migrate     # run drizzle-kit migrate
npm test           # placeholder
npm start          # start CLI (via tsx)
```

## 📦 Dependencies

* [drizzle-orm](https://npmjs.com/package/drizzle-orm) – ORM for database access
* [fast-xml-parser](https://npmjs.com/package/fast-xml-parser) – XML parsing
* [postgres](https://npmjs.com/package/postgres) – Postgres client
* DevDeps: TypeScript, tsx, @types/node, drizzle-kit

# Visualizador de Perfil do GitHub

Olá! 👋

Este projeto transforma uma busca por usuário do GitHub em uma experiência simples e agradável. Digite um nome de usuário e veja o perfil com avatar, bio, contadores e os repositórios mais recentes — tudo com um layout limpo e responsivo.

Por que este projeto existe
- Pra aprender e demonstrar como consumir a API pública do GitHub de forma clara.
- Para mostrar uma organização moderna do código usando módulos ES6 (API, UI e orquestração separados).

O que ele faz
- Busca e exibe dados do perfil (avatar, login, bio, seguidores, seguindo).
- Lista até 10 repositórios públicos mais recentes com estatísticas rápidas (⭐, forks, watchers, linguagem).
- Trata erros básicos e dá feedback ao usuário.

Como está organizado
- `index.html` — entrada da aplicação e layout básico.
- `src/js/api.js` — funções que falam com a API do GitHub (`fetchGithubUser`, `fetchGithubUserRepos`).
- `src/js/ui.js` — renderização e manipulação do DOM.
- `src/js/main.js` — conecta `ui.js` e `api.js`, registra eventos e controla o fluxo de busca.
- `src/js/index.js` — wrapper que importa `main.js` (mantido por compatibilidade).

Como rodar localmente (rápido)
1. Abra o terminal na pasta do projeto:

```powershell
cd d:\DEV\projetos_front_end\visualizador-perfil-github
```

2. Inicie um servidor estático (ex.: Python 3):

```powershell
python -m http.server 3000
```

3. Abra no navegador:

```powershell
Start-Process "http://localhost:3000"
```

4. Busque um usuário (por exemplo `octocat`) e aproveite a visualização.

Endpoints usados
- Perfil: `GET https://api.github.com/users/:username`
- Repositórios: `GET https://api.github.com/users/:username/repos?per_page=10&sort=created`

O que foi refatorado
- Separei o código em módulos ES6 para melhorar manutenção e facilitar evoluções.
- `api.js` concentra as chamadas HTTP; `ui.js` cuida do DOM; `main.js` orquestra tudo.

---

Se curtir o projeto: abra uma issue ou envie um pull request. Obrigado por olhar! 💜

# GitHub User Search App

Este projeto foi desenvolvido com o objetivo de treinar organização de código e o uso de APIs, utilizando a API do GitHub para buscar dados públicos de usuários e repositórios, e exibi-los de forma organizada na tela.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
  - [Objetivo](#objetivo)
  - [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Aprendizados](#aprendizados)
- [Como Utilizar](#como-utilizar)
  - [Instalação](#instalação)
  - [Uso](#uso)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Visão Geral

### Objetivo

O objetivo deste projeto é praticar habilidades de organização de código, consumo de APIs REST e manipulação de dados no JavaScript. O aplicativo permite buscar informações públicas de usuários do GitHub, como:

- Nome do usuário
- Biografia
- Lista de repositórios públicos

### Funcionalidades

- Buscar dados públicos de um usuário do GitHub ao digitar o nome de usuário.
- Exibir informações como nome, avatar, seguidores e biografia do usuário.
- Listar os repositórios do usuário com links diretos.
- Evitar buscas com campo vazio, exibindo uma mensagem de alerta.

## Tecnologias Utilizadas

- **HTML5** para a estrutura do aplicativo.
- **CSS3** para estilização e layout responsivo.
- **JavaScript** para a lógica de negócio e manipulação de DOM.
- **API do GitHub** para obter dados públicos de usuários e repositórios.

## Aprendizados

Durante o desenvolvimento deste projeto, pratiquei:

1. **Consumo de APIs:** Utilização do `fetch` para buscar e tratar dados de uma API REST.
2. **Tratamento de Erros:** Implementação de mensagens de erro para garantir que o aplicativo funcione mesmo em condições inesperadas.
3. **Modularização:** Organização do código em módulos reutilizáveis e separados.
4. **Interatividade:** Manipulação de eventos no DOM para interagir com o usuário.

## Como Utilizar

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/github-user-search-app.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd github-user-search-app
   ```

3. Abra o arquivo `index.html` em um navegador de sua preferência.

### Uso

1. Insira o nome de usuário do GitHub no campo de busca.
2. Clique no botão "Buscar" ou pressione Enter.
3. As informações do usuário serão exibidas, incluindo:
   - Foto de perfil
   - Nome
   - Biografia
   - Lista de repositórios com links.
   - Número de seguidores e seguindo no perfil
4. Caso o campo de busca esteja vazio, uma mensagem de alerta será exibida.

## Contribuições

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork deste repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie as alterações para o repositório remoto:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um Pull Request explicando as alterações feitas.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
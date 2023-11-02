# LibrarySystem
Sistema simples para pesquisa e empréstimos de livros em React usando TypeScript. O sistema possui uma busca simples por título, autor ou assunto. Como não existe integração com banco de dados, os dados dos livros são buscados através de um arquivo json configurado dentro do sistema. O sistema também gerencia o empréstimo e devolução de livros, seguindo as seguintes regras:
  - Um livro que já está em uso não pode ser emprestado;
  - Um livro sem exemplares disponíveis não pode ser emprestado;
  - Um usuário com livros pendentes para entregar não pode pegar nenhum outro emprestado;
  - Um usuário tem um limite de 5 renovações por livro;
  - Uma renovação adianta a data de devolução para 15 dias;

# Tecnologias
O sistema foi feito utilizando React com Typescript. Para os testes, foi utilizado o framework Jest.

# Getting Started
1. Para baixar as dependências e bibliotecas, rode o seguinte comando:
`npm install`

2. Para iniciar o servidor de desenvolvimento, rode:
`npm start`

3. Para executar os testes, rode:
`npm test`

# Membros
Samuel Henrique Miranda Alves

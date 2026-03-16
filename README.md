📦 Sistema de Controle de Estoque
Um sistema simples de controle de estoque desenvolvido em Node.js, utilizando Express, EJS e SQLite.
Permite gerenciar usuários, fornecedores e itens de estoque de forma prática e intuitiva.

🚀 Funcionalidades
- Cadastro e login de usuários
- Controle de sessão (somente usuários logados acessam o sistema)
- Cadastro de fornecedores
- Cadastro, edição e remoção de itens do estoque
- Registro de quem retirou cada item
- Interface simples usando EJS + CSS
- Banco de dados SQLite integrado

🛠️ Tecnologias utilizadas
- Node.js
- Express
- EJS
- SQLite3
- Express‑Session
- CSS

📁 Estrutura inicial do projeto
/controllers
/routes
/views
/public
/models
app.js
package.json


- Acesse no navegador:
http://localhost:3000/login
http://localhost:3000/paginainicial



🗄️ Banco de dados
O sistema utiliza SQLite.
O arquivo estoque.db é criado automaticamente ao rodar o projeto.
Obs.: O arquivo .db está no .gitignore para evitar envio ao GitHub.




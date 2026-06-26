# 🛒 Mercado Autônomo para Condomínios

Landing Page desenvolvida em **React + Vite** com foco na apresentação de um mercado autônomo para condomínios e prédios residenciais.

O projeto foi desenvolvido como atividade avaliativa da disciplina, utilizando conceitos vistos durante o semestre, incluindo React, Componentização, Hooks, Netlify Functions e envio de e-mails com Nodemailer.

---

# 🚀 Tecnologias Utilizadas

* React
* Vite
* JavaScript
* CSS3
* React Toastify
* React Google reCAPTCHA
* Lucide React
* Netlify
* Netlify Functions
* Node.js
* Nodemailer

---

# 📋 Funcionalidades

* ✅ Landing Page totalmente responsiva
* ✅ Header com navegação
* ✅ Hero Section
* ✅ Seção de Benefícios
* ✅ Como Funciona
* ✅ Carrossel automático de depoimentos
* ✅ Seção de Planos
* ✅ Formulário de contato
* ✅ Footer
* ✅ Feedback visual utilizando React Toastify
* ✅ Proteção com Google reCAPTCHA
* ✅ Envio de e-mails utilizando Netlify Functions + Nodemailer
* ✅ Deploy realizado na Netlify

---

# 📧 Funcionamento do envio de e-mail

O formulário envia os dados do usuário para uma **Netlify Function** através de uma requisição HTTP (`POST`).

Fluxo da aplicação:

Usuário preenche o formulário
↓
React realiza a validação
↓
Fetch envia os dados
↓
Netlify Function recebe a requisição
↓
Nodemailer envia o e-mail
↓
Toast informa sucesso ou erro

As credenciais SMTP são armazenadas através de **variáveis de ambiente**, garantindo maior segurança.

---

# 📁 Estrutura do Projeto

```
src
│
├── components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Benefits.jsx
│   ├── HowWorks.jsx
│   ├── Testimonials.jsx
│   ├── Pricing.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
│
├── App.jsx
└── style.css

netlify
└── functions
    └── send-email.js
```

---

# ▶️ Executando o Projeto

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

Para testar as Netlify Functions localmente:

```bash
npx netlify dev
```

---

# 🌐 Deploy

Aplicação publicada na Netlify:

https://mercado-autonomo-condominio.netlify.app

---

# 📂 Repositório

GitHub:

https://github.com/Paulinho001/mercado-autonomo-condominio

---

# 📌 Conceitos Aplicados

Durante o desenvolvimento foram utilizados diversos conceitos estudados durante a disciplina:

* Componentização
* JSX
* Hooks (`useState` e `useRef`)
* Manipulação de eventos
* Fetch API
* Requisições HTTP
* JSON (`JSON.stringify` e `JSON.parse`)
* Programação assíncrona (`async/await`)
* Netlify Functions
* Variáveis de ambiente
* Nodemailer
* Responsividade
* Deploy de aplicações React

---

# 👨‍💻 Autor

**Paulo Henrique Estopilha de Campos**

Desenvolvido como atividade avaliativa da disciplina utilizando React, Netlify e Node.js.

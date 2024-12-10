# Desafio-Music-Player-ZG-Soluções
Player de musica interativo e intuitivo

---

# 🎵 **Desafio Music Player - ZG Soluções**

Um aplicativo de **reprodução de músicas** com funcionalidades completas para exibição de letras sincronizadas, desenvolvido como parte de um desafio técnico.

---

## 🚀 **Tecnologias Utilizadas**

### **Frontend**
- **Linguagem:** JavaScript
- **Framework:** [React.js](https://reactjs.org/)
- **CSS:** [Tailwind CSS](https://tailwindcss.com/) para estilização rápida e eficiente.
- **Gerenciamento de Estado:** Hooks do React (`useState`, `useEffect`).
- **Reprodução de Áudio:** HTML `<audio>` integrado com lógica customizada de reprodução e pausa.

### **Backend**
- **Linguagem:** JavaScript
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Banco de Dados:** [MongoDB](https://www.mongodb.com/)
- **ORM:** [Prisma](https://www.prisma.io/) para gerenciar a base de dados.
- **Armazenamento de Áudio:** Arquivos MP3 armazenados em uma pasta dedicada.

### **Outras Tecnologias**
- **Controle de Versão:** [Git](https://git-scm.com/) e [GitHub](https://github.com/).
- **Pacotes Adicionais:** 
  - **React Icons** para ícones como botões.
  - **Linter:** ESLint para padronização de código.

---

## ✨ **Funcionalidades**

### **Frontend**
- Interface moderna e responsiva.
- **Reprodutor de Músicas:**
  - Controles de reprodução: **Play/Pause**, avançar e retroceder 10 segundos.
  - Exibição do nome da música e do artista.
- **Visualização das Letras:** 
  - Letras sincronizadas com a reprodução.
  - Destaque na linha atual da música.
- **Transições Suaves:** Linhas não ativas ficam opacas para melhor foco.

### **Backend**
- API para gerenciamento e entrega de dados:
  - **Rota GET** para buscar músicas e metadados (título, artista, duração, letra, etc.).
  - Arquivos de áudio armazenados localmente e acessíveis por URL.

---

## 📂 **Estrutura do Projeto**

### **Frontend**
```
music-app/
├── public/
├── src/
│   ├── components/       # Componentes React
│   │   ├── MusicPlayer.jsx
│   │   ├── LyricsViewer.jsx
│   ├── contexts/         # Gerenciamento de contexto
│   ├── styles/           # Arquivos CSS adicionais
│   ├── App.js            # Entrada principal do React
│   └── index.js          # Renderização do React
└── package.json
```

### **Backend**
```
music-backend/
├── audio/                # Arquivos de áudio MP3
├── prisma/
│   ├── schema.prisma     # Definições do banco de dados
│   ├── seed.js           # Script de seed para inserir músicas
├── routes/
│   ├── musicRoutes.js    # Rotas de API
├── app.js                # Configuração do servidor Express
└── package.json
```

---

## 🛠️ **Como Configurar o Projeto**

### **Requisitos**
- **Node.js** (v14 ou superior)
- **NPM** ou **Yarn**
- **MongoDB** (instância local ou remota)

### **Clonar o Repositório**
```bash
git clone https://github.com/Fbgg2k/Desafio-Music-Player-ZG-Solu-es.git
```

### **Configurar o Backend**
1. Navegue para o diretório `music-backend`:
   ```bash
   cd music-backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o banco de dados no arquivo `.env`:
   ```plaintext
   DATABASE_URL=mongodb://<seu-usuario>:<sua-senha>@localhost:27017/music-app
   ```
4. Rode as migrations e o script de seed:
   ```bash
   npx prisma migrate dev
   node prisma/seed.js
   ```
5. Inicie o servidor:
   ```bash
   npm start
   ```

### **Configurar o Frontend**
1. Navegue para o diretório `music-app`:
   ```bash
   cd music-app
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

---

## 🔍 **Como Usar**

1. Acesse a interface do frontend:
   - Localmente: `http://localhost:3000` (ou a porta configurada no React).
2. Navegue pela lista de músicas e selecione uma para reprodução.
3. Utilize os controles de reprodução e veja as letras sendo exibidas de forma sincronizada.

---

## 🎯 **Próximos Passos**

- **Melhorias Planejadas:**
  - Implementar autenticação de usuário.
  - Permitir upload de novas músicas.
  - Sincronização em tempo real das letras via WebSocket.

---

## 🧑‍💻 **Autores**
- **Fbgg2k** - Desenvolvedor Full Stack responsável pelo projeto.

---

Se precisar de algo mais ou ajustes específicos, me avise!

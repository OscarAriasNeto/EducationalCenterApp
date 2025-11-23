Grupo
Oscar Arias Neto	556936
Nicolas Souza dos Santos	555571
Julia Martis Rebelles	554516

# 📱 EducationalCenterApp

Aplicativo mobile desenvolvido em **React Native com Expo** para apoiar jovens aprendizes na preparação para o mercado de trabalho, oferecendo **trilhas de desenvolvimento**, **grupo de discussões** e **gestão de perfil** em um só lugar.

---

## ✨ Visão Geral

O **EducationalCenter** simula um ambiente de aprendizagem para jovens aprendizes, com:

- Telas inspiradas em apps modernos (layout limpo e foco em usabilidade);
- Navegação por **bottom tab** entre Início, Grupos e Perfil;
- Trilhas com módulos e aulas, com **controle de progresso**;
- Área de **grupo** com chat em tempo real (estado local) no estilo “WhatsApp”;
- Gestão de **perfil** com edição de dados e validações.

---

## 🎯 Funcionalidades

### 🔐 Autenticação

- Tela de **Login**
  - Login por e-mail e senha.
  - Validação básica de campos (não vazios).
  - Usuário de teste mantido em memória (sem backend).

- Tela de **Criação de Conta**
  - Campos: **nome, idade, e-mail, cargo, objetivo**.
  - Validações:
    - Nome obrigatório;
    - Idade numérica positiva;
    - E-mail no formato `@gmail.com`;
    - Cargo obrigatório;
    - Objetivo com tamanho mínimo (texto mais completo).
  - Em caso de erro, exibe **warnings** diretamente nos campos.
  - Ao passar nas validações, salva o perfil no contexto e redireciona para a **Home**.

---

### 🏠 Home (Início)

- Cabeçalho com logo **Educational Center**.
- Texto de boas-vindas: “Conecte-se com outros jovens aprendizes”.
- Botão **“Explorar Trilhas”** que navega para a tela de trilhas preparatórias.
- Barra de navegação inferior com abas:
  - ⌂ Início  
  - 👥 Grupos  
  - 👤 Perfil  

---

### 📚 Trilhas Preparatórias

- Lista de trilhas com cards mostrando:
  - Título da trilha;
  - Descrição;
  - Barra de progresso por trilha (módulos concluídos x total).
- Ao entrar em uma trilha:
  - Menu lateral com **módulos** e **aulas**;
  - Ícones mudam de cor quando a aula é concluída;
  - Progresso salvo em contexto, mantendo o estado ao voltar.

#### Tipos de aula

- **Aulas de vídeo**
  - Contêm um link para o YouTube;
  - Orientação textual: após assistir, o usuário deve ir para a próxima aula;
  - Ao avançar, a aula é marcada como concluída.

- **Aulas de perguntas (quiz)**
  - Perguntas de múltipla escolha (2 a 4 alternativas);
  - Ao enviar, o app informa:
    - Quais alternativas foram **corretas**;
    - Quais foram **erradas**;
  - A aula é marcada como concluída.

---

### 👤 Perfil

- Tela **Perfil**
  - Exibe:
    - Nome do usuário;
    - Cargo;
    - E-mail;
    - Idade;
    - Objetivo (“Sobre você”).
  - Botão **“Editar perfil”**.
  - Mesma barra de navegação inferior do Início/Grupos (Perfil ativo).

- Tela **Editar Perfil**
  - Mesmos campos da criação de conta:
    - Nome, idade, e-mail, cargo, objetivo.
  - Validações idênticas às do cadastro.
  - Botão **“Salvar alterações”**:
    - Se houver erros, exibe warnings nos campos;
    - Se tudo ok, atualiza o contexto de usuário e volta para a tela de Perfil.
  - Não exibe barra de navegação inferior, apenas a **seta de voltar** no topo.

---

### 👥 Grupos & Conversa

- Tela **Grupo**
  - Título: “Grupo para Jovem Aprendizes”;
  - Descrição sobre troca de experiências;
  - Botão **“Entrar no Grupo”**, que leva à tela de conversa;
  - Seção **Publicações** exibindo a **última mensagem** do chat
    (inicialmente: “Bem-vindo ao grupo!” enviada por uma usuária fictícia).

- Tela **Conversa do Grupo (chat)**
  - Interface inspirada em apps de mensagem (estilo WhatsApp):
    - Balão cinza para mensagens de outros participantes;
    - Balão roxo para mensagens do próprio usuário.
  - Mensagem inicial:
    - `Amanda: "Bem-vindo ao grupo!"`
  - Campo de texto + botão de envio:
    - Permite enviar mensagens que aparecem imediatamente no chat;
    - A última mensagem enviada aparece como “publicação” na tela base de Grupo.
  - Navegação:
    - Possui apenas cabeçalho com seta de voltar para a tela de Grupo.

---

## 🧱 Arquitetura & Organização

Principais conceitos usados:

- **React Navigation (Stack + navegação manual)** para controle de telas;
- **Context API** para estados globais:
  - `UserContext` – dados de perfil e usuário logado;
  - `ProgressContext` – progresso nas trilhas, módulos e aulas;
  - `GroupChatContext` – mensagens do chat de grupo.

Organização geral (simplificada):

```text
components/
  home-screen/
  login-screen/
  signup-screen/
  track-screen/
  trail-screen/
  group-screen/
  group-chat-screen/
  profile-screen/
  edit-profile-screen/
  progress-context.tsx
  user-context.tsx
  group-chat-context.tsx
App.tsx
index.ts
assets/

🛠️ Tecnologias Utilizadas

Expo (npx create-expo-app, template TypeScript)

React Native

TypeScript

React Navigation (stack e navegação entre telas)

Context API / Hooks para estado global

Styled via StyleSheet API do React Native

▶️ Como Rodar o Projeto
Pré-requisitos

Node.js (LTS recomendado)

npm ou yarn

Expo CLI (opcional – pode usar npx expo)

Passo a passo
# 1. Clonar o repositório
git clone https://github.com/OscarAriasNeto/EducationalCenterApp.git

# 2. Entrar na pasta do projeto
cd EducationalCenterApp

# 3. Instalar dependências
npm install
# ou
yarn

# 4. Iniciar o projeto com Expo
npm run start
# ou
npx expo start

Depois disso você pode:

Abrir no Expo Go (Android/iOS) escaneando o QR Code;

Abrir o emulador (Android Studio ou iOS Simulator);

Rodar no navegador com a opção “Run in web browser” do Expo.

✅ Status do Projeto

MVP funcional:

Fluxo de login/cadastro;

Trilhas com módulos e aulas, incluindo quizzes e vídeos;

Estado de progresso persistido enquanto o app está aberto;

Perfil com edição;

Grupo com chat básico e mensagem de boas-vindas.

Possíveis evoluções:

Persistência em banco/Backend (Firebase, Supabase, API própria, etc.);

Autenticação real (JWT/OAuth);

Push notifications para interações no grupo;

Upload de avatar do usuário;

Trilhas dinâmicas carregadas via API.

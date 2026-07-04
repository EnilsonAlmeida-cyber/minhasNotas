# 📋 CONFIGURAÇÃO DO MINHANOTAS
## Guia passo a passo — sem precisar saber programação

---

## O QUE VOCÊ VAI FAZER

1. Criar uma conta gratuita no GitHub (hospedagem)
2. Criar um projeto no Google Cloud (para usar o Drive)
3. Subir os arquivos do app
4. Instalar no celular

Tempo estimado: **30–40 minutos** (na primeira vez)

---

## PASSO 1 — Criar conta no GitHub

O GitHub vai hospedar seu app **gratuitamente**.

1. Acesse **github.com**
2. Clique em **Sign up** (Criar conta)
3. Escolha um nome de usuário (ex: `joaosilva`)
4. Use seu e-mail e crie uma senha
5. Escolha o plano **Free** (gratuito)
6. Confirme o e-mail que chegou na sua caixa

✅ Pronto — você tem uma conta no GitHub!

---

## PASSO 2 — Criar um repositório (pasta do seu app)

Um "repositório" é uma pasta online onde ficam os arquivos do app.

1. Faça login no GitHub
2. Clique no botão verde **New** (no canto superior esquerdo)
3. Em **Repository name**, coloque: `minhaNotas`
4. Marque a opção **Public** (obrigatório para hospedagem gratuita)
5. Clique em **Create repository**

✅ Seu repositório foi criado!

---

## PASSO 3 — Subir os arquivos do app

Você vai enviar os arquivos que foram criados.

1. No seu repositório, clique em **uploading an existing file**
2. Arraste os seguintes arquivos para a área indicada:
   - `index.html`
   - `sw.js`
   - `manifest.json`
3. Clique em **Commit changes**

✅ Arquivos enviados!

---

## PASSO 4 — Ativar a hospedagem (GitHub Pages)

1. No seu repositório, clique em **Settings** (engrenagem no topo)
2. No menu lateral esquerdo, clique em **Pages**
3. Em **Source**, selecione **main** (ou **master**)
4. Clique em **Save**
5. Aguarde 2–3 minutos
6. O GitHub vai mostrar a URL do seu app:
   `https://SEU_USUARIO.github.io/minhaNotas`

✅ Seu app está online!

---

## PASSO 5 — Criar projeto no Google Cloud

Isso permite que seu app acesse o Google Drive.

1. Acesse **console.cloud.google.com**
2. Faça login com sua conta Google (pode ser a do Gmail)
3. Clique em **Selecionar projeto** → **Novo projeto**
4. Nome do projeto: `MinhaNotas`
5. Clique em **Criar**

---

## PASSO 6 — Ativar a API do Drive

1. No menu lateral, clique em **APIs e serviços** → **Biblioteca**
2. Na busca, digite: `Google Drive API`
3. Clique no resultado e depois em **Ativar**

✅ API ativada!

---

## PASSO 7 — Criar as credenciais (Client ID)

O Client ID é como uma "chave de acesso" que seu app usa para entrar no Drive.

1. Vá em **APIs e serviços** → **Credenciais**
2. Clique em **+ Criar credenciais** → **ID do cliente OAuth**
3. Se pedir, configure a **Tela de permissão OAuth**:
   - Tipo de usuário: **Externo**
   - Nome do app: `MinhaNotas`
   - E-mail de suporte: seu e-mail
   - Salve
4. De volta em credenciais, selecione:
   - Tipo de aplicativo: **Aplicativo da Web**
   - Nome: `MinhaNotas Web`
5. Em **Origens JavaScript autorizadas**, adicione:
   ```
   https://SEU_USUARIO.github.io
   ```
6. Clique em **Criar**
7. Uma janela vai aparecer com o **Client ID** — copie esse código

---

## PASSO 8 — Colocar o Client ID no app

1. Abra o arquivo `index.html` no seu computador (com qualquer editor de texto, inclusive o Bloco de Notas)
2. Encontre esta linha (está perto da linha 350):
   ```
   CLIENT_ID: 'SEU_CLIENT_ID_AQUI.apps.googleusercontent.com',
   ```
3. Substitua `SEU_CLIENT_ID_AQUI.apps.googleusercontent.com` pelo código que você copiou
4. Salve o arquivo
5. Suba o arquivo atualizado pro GitHub (mesmo processo do Passo 3)

---

## PASSO 9 — Criar os ícones do app

Para o app aparecer certinho na tela do celular, você precisa de ícones.

**Opção fácil (recomendada):**
1. Acesse **favicon.io/favicon-generator**
2. Escreva: 📓 (ou as iniciais MN)
3. Escolha um fundo roxo (#7c6af7)
4. Clique em **Generate** e baixe o ZIP
5. Extraia o ZIP e renomeie as imagens para:
   - `icon-192.png` (192x192 pixels)
   - `icon-512.png` (512x512 pixels)
6. Crie uma pasta chamada `icons` no seu repositório
7. Suba os dois arquivos para dentro da pasta `icons`

---

## PASSO 10 — Instalar no celular (iPhone ou Android)

**No iPhone (Safari):**
1. Abra `https://SEU_USUARIO.github.io/minhaNotas` no Safari
2. Toque no botão de compartilhar (quadradinho com seta para cima)
3. Role para baixo e toque em **Adicionar à Tela de Início**
4. Confirme tocando em **Adicionar**

**No Android (Chrome):**
1. Abra a URL no Chrome
2. Toque nos três pontinhos (⋮) no canto superior direito
3. Toque em **Adicionar à tela inicial**
4. Confirme

✅ O app vai aparecer na sua tela como qualquer outro aplicativo!

---

## USANDO O APP

**Para criar uma nota:**
- Toque no botão roxo **+** no canto inferior direito

**Para organizar por caderno:**
- Na tela principal, toque em **+** na barra de cadernos
- Crie cadernos como: `Carro`, `Casa`, `Trabalho`

**Para adicionar anexos:**
- Dentro de uma nota, toque em **📎 Anexo**
- Selecione fotos, PDFs ou qualquer arquivo

**Para adicionar links:**
- Cole o link diretamente no texto da nota
- Ou toque no botão **🔗 Link** para adicionar mais rápido

---

## DÚVIDAS FREQUENTES

**Meus dados são seguros?**
Sim. As notas ficam salvas no SEU Google Drive pessoal. O app não tem servidor próprio — é literalmente só arquivos no seu Drive.

**Funciona sem internet?**
Você consegue ver as notas que já foram abertas antes. Para salvar novas notas, precisa de conexão.

**Posso acessar no Mac também?**
Sim! Abra a mesma URL no navegador do Mac. Tudo sincronizado automaticamente.

**E se eu trocar de celular?**
Basta instalar o app de novo no novo celular. Suas notas continuam no Drive.

---

## PRECISA DE AJUDA?

Qualquer dúvida sobre algum dos passos, é só perguntar no chat com o Claude. 
Descreva em qual passo você está e o que está vendo na tela.

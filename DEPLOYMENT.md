# Publicar "Entre Sessões" Online

Guia passo a passo para publicar o projeto na internet.

## 🚀 Opção 1: Vercel + GitHub (RECOMENDADO)

### Passo 1: Criar Conta no GitHub

1. Acesse https://github.com/signup
2. Preencha:
   - **Username**: (seu nome de usuário)
   - **Email**: (seu email)
   - **Password**: (senha segura)
3. Clique em **"Create account"**
4. Confirme email

### Passo 2: Criar Repositório no GitHub

1. Após login, clique em **"+"** (canto superior direito)
2. Selecione **"New repository"**
3. Configure:
   - **Repository name**: `entre-sessoes`
   - **Description**: "MVP de plataforma de apoio psicológico entre sessões"
   - **Public** (para qualquer pessoa acessar)
   - **Add a README file**: NÃO (já temos)
4. Clique em **"Create repository"**

### Passo 3: Fazer Push do Código para GitHub

Na pasta do projeto, execute:

```bash
git remote add origin https://github.com/SEU_USERNAME/entre-sessoes.git
git branch -M main
git push -u origin main
```

Substitua `SEU_USERNAME` pelo seu nome de usuário do GitHub.

### Passo 4: Deploy no Vercel

1. Acesse https://vercel.com
2. Clique em **"Sign up"** com GitHub
3. Autorize Vercel a acessar GitHub
4. Clique em **"New Project"**
5. Selecione o repositório `entre-sessoes`
6. Vercel detectará automaticamente:
   - Framework: Next.js ✓
   - Build Command: `npm run build` ✓
   - Output Directory: `.next` ✓
7. Clique em **"Deploy"**

**Pronto!** Seu projeto estará online em:
```
https://entre-sessoes.vercel.app
```

---

## 🌐 Opção 2: Netlify (Alternativa)

1. Acesse https://app.netlify.com
2. Clique em **"Connect from Git"**
3. Selecione GitHub
4. Escolha o repositório `entre-sessoes`
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy automático ✓

**URL**: `https://entre-sessoes.netlify.app`

---

## 🚢 Opção 3: Railway (Mais Controle)

1. Acesse https://railway.app
2. Crie conta com GitHub
3. Clique em **"New Project"**
4. Selecione **"Deploy from GitHub repo"**
5. Escolha `entre-sessoes`
6. Railway detecta automaticamente Next.js
7. Define PORT=3000 automaticamente
8. Deploy com 1 clique

**URL**: Gerada automaticamente

---

## ✅ Após Deploy

### Testar Aplicação Online

- Landing page: `https://seu-projeto.vercel.app/`
- Dashboard Paciente: `https://seu-projeto.vercel.app/paciente`
- Dashboard Psicóloga: `https://seu-projeto.vercel.app/psicologa`

### Compartilhar Link

Compartilhe a URL com Larissa e os pacientes!

```
Landing: https://entre-sessoes.vercel.app
Paciente: https://entre-sessoes.vercel.app/paciente
Psicóloga: https://entre-sessoes.vercel.app/psicologa
```

---

## 🔧 Atualizar Deploy

Toda vez que fizer mudanças:

```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

Vercel/Netlify/Railway fará deploy automático! ✨

---

## 📝 Variáveis de Ambiente (Se Necessário)

Se precisar adicionar variáveis (futuramente):

1. Vá para **Settings** do projeto (Vercel/Netlify)
2. Procure **Environment Variables**
3. Adicione variáveis (ex: `NEXT_PUBLIC_API_URL`)

Para este MVP não é necessário.

---

## 🎯 Checklist de Publicação

- [ ] Criou conta no GitHub
- [ ] Criou repositório no GitHub
- [ ] Fez push do código
- [ ] Criou conta no Vercel
- [ ] Conectou repositório no Vercel
- [ ] Viu mensagem "Deployment Successful"
- [ ] Testou a URL online
- [ ] Compartilhou com Larissa

---

## 🆘 Troubleshooting

### "Build failed"
- Verifique se `npm install` funciona localmente
- Verifique se não há erros TypeScript: `npm run lint`

### "Site não aparece"
- Aguarde 1-2 minutos após deploy
- Limpe cache do navegador (Ctrl+Shift+Del)
- Verifique https://vercel.com/dashboard

### "Erro ao acessar /paciente"
- Isso é esperado (sem autenticação)
- Use as rotas diretas como nos exemplos acima

---

## 💡 Depois do MVP

Quando estiver pronto para produção:

1. **Adicionar autenticação real** (Auth0, Supabase)
2. **Banco de dados** (PostgreSQL via Supabase)
3. **Variáveis de ambiente** (.env.local)
4. **HTTPS** (automático em Vercel)
5. **Domain customizado** (opcional)

Por enquanto, use a URL padrão do Vercel!

---

**Sucesso no deploy! 🚀**

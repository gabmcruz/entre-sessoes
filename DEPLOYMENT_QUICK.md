# 🚀 Publicação Rápida (3 minutos)

**Tempo total**: ~3 minutos  
**Custo**: Grátis (Vercel tem tier gratuito)

---

## ⚡ Resumo Ultra-Rápido

```
1. Crie conta GitHub    → https://github.com/signup
2. Faça push           → git push -u origin main (após configurar remote)
3. Crie conta Vercel   → https://vercel.com (com GitHub)
4. Importe projeto     → Clique "New Project" e selecione repositório
5. Pronto!             → URL gerada automaticamente
```

---

## 📋 Passo a Passo Detalhado

### 1️⃣ GitHub - Criar Repositório (2 min)

**A. Crie conta** (ou use existente)
- URL: https://github.com/signup
- Preencha nome, email, senha
- Confirme email

**B. Crie novo repositório**
```
Clique no ícone + (canto superior direito)
→ New repository
```

**Configure:**
- Nome: `entre-sessoes`
- Descrição: "MVP de apoio psicológico"
- Escolha: **Public** (para compartilhar)
- ✅ Criar repositório

**Você verá:**
```
Quick setup — if you've done this kind of thing before

Get started by creating a new file or uploading an existing file. 
We recommend every repository include a README, LICENSE, and .gitignore.

…or push an existing repository from the command line
git remote add origin https://github.com/SEU_USER/entre-sessoes.git
git branch -M main
git push -u origin main
```

---

### 2️⃣ Git - Fazer Push (1 min)

No PowerShell, na pasta do projeto:

```powershell
cd "C:\Users\PC\OneDrive - sonardd.com.br\Documentos\App Lari"

# Configure remote (substitua SEU_USER)
git remote add origin https://github.com/SEU_USER/entre-sessoes.git

# Mude para main
git branch -M main

# Envie o código
git push -u origin main
```

**Responda sim** se pedir confirmação.

**Sucesso quando ver:**
```
Enumerating objects: 35, done.
Counting objects: 100% (35/35), done.
...
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

### 3️⃣ Vercel - Deploy (auto)

**A. Crie conta no Vercel**
- URL: https://vercel.com
- Clique: **Sign Up**
- Escolha: **Continue with GitHub**
- Autorize Vercel

**B. Importe projeto**
- Clique: **Add New... → Project**
- Procure: `entre-sessoes`
- Clique: **Import**

**C. Configure Build** (Vercel detecta tudo automaticamente!)
```
Framework Preset: Next.js ✓
Build Command: npm run build ✓
Output Directory: .next ✓
```

**D. Deploy**
- Clique: **Deploy**
- Aguarde ~2-3 minutos

**Vercel mostra:**
```
✓ Deployment successful
Your site is live at: https://entre-sessoes.vercel.app
```

---

## 🎉 Pronto!

Seu projeto está online!

**Compartilhe estes links:**

```
🏠 Homepage:
   https://entre-sessoes.vercel.app

👤 Para Pacientes:
   https://entre-sessoes.vercel.app/paciente

👨‍⚕️ Para Psicóloga (Larissa):
   https://entre-sessoes.vercel.app/psicologa
```

---

## 🔄 Atualizar Depois

Toda vez que fizer mudanças locais:

```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

Vercel fará deploy automático em ~1 minuto! ✨

---

## ⚠️ Notas Importantes

1. **GitHub username**: Usado como `https://github.com/SEU_USER`
2. **Substitua em todos os comandos**: `SEU_USER` → seu nome de usuário real
3. **URL final**: `https://entre-sessoes.vercel.app` (ou similar)
4. **Sem cartão de crédito**: Vercel gratuito é realmente grátis

---

## 🆘 Problemas Comuns

### "git remote add origin": Erro "remote already exists"
```bash
git remote remove origin
git remote add origin https://github.com/SEU_USER/entre-sessoes.git
```

### "git push": "Permission denied"
- Gere token no GitHub: https://github.com/settings/tokens
- Use token no lugar de senha

### "Deployment failed"
- Verifique: `npm run build` funciona localmente?
- Verifique erros TypeScript: `npm run lint`

### "Site demora carregar"
- Primeira vez é mais lenta
- Aguarde 3-5 minutos
- Limpe cache: Ctrl+Shift+Del

---

## 📱 Testar Online

Após deploy estar pronto:

```
Desktop:
https://entre-sessoes.vercel.app/paciente

Mobile:
(mesmo link, abre responsivo)
```

---

**Suporte**: Para erros mais específicos, consulte `DEPLOYMENT.md` 📖

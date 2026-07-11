# How to push this to GitHub (do this yourself — keep your token private)

⚠️ First: REVOKE the personal access token you pasted in chat.
GitHub → Settings → Developer settings → Personal access tokens → delete it.
Then generate a fresh one when needed. A token shared in a chat is compromised.

## Steps (run in this folder)
```bash
git init
git add .
git commit -m "Initial commit: ResumeForX production site"
git branch -M main
git remote add origin https://github.com/Resumeforx/<your-repo-name>.git
git push -u origin main
```

When git asks for a password, paste your NEW personal access token (not your GitHub password).

Alternatively, use the GitHub CLI (`gh auth login`) or a Git GUI — both keep the token out of plain text.

## Then deploy
Import the repo at vercel.com → it auto-detects Next.js → Deploy.

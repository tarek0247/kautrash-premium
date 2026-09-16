\# 🤝 Contributing Guide



\## كيف تساهم



1\. Fork الـ repository

2\. أنشئ feature branch: `git checkout -b feature/amazing-feature`

3\. اعمل Commit: `git commit -m 'Add amazing feature'`

4\. اضغط على branch: `git push origin feature/amazing-feature`

5\. افتح Pull Request



\## Git Workflow



```bash

\# 1. عد للـ develop

git checkout develop



\# 2. أنشئ feature branch

git checkout -b feature/your-feature



\# 3. اعمل commits

git commit -m "feat: description"



\# 4. Push

git push origin feature/your-feature



\# 5. عمل Pull Request على GitHub

```



\## Commit Messages



استخدم هذا الـ format:



\- `feat:` - feature جديدة

\- `fix:` - إصلاح bug

\- `chore:` - تحديثات بدون كود

\- `docs:` - تحديثات documentation



مثال:
feat: add notification system

Advanced notifications
Email integration
WhatsApp support
## Code Style

- استخدم TypeScript
- اتبع ESLint
- استخدم Prettier للـ formatting

```bash
npm run lint
npm run format
```

---

شكراً لمساهمتك! 🎉

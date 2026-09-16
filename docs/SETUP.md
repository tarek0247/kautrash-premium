\# 🚀 Setup Guide - KauTrash Premium



\## المتطلبات



\- Node.js 18+

\- npm أو yarn

\- Docker (اختياري)

\- Git



\## سريع الإعداد



\### طريقة 1: Manual Setup



\#### Backend

```bash

cd backend

npm install

npm run dev

```



سيعمل على: http://localhost:5000



\#### Frontend

```bash

cd frontend

npm install

npm run dev

```



سيعمل على: http://localhost:5173



\### طريقة 2: Docker



```bash

docker-compose up -d

```



سيعمل على:

\- Backend: http://localhost:5000

\- Frontend: http://localhost:5173



\## الملفات المهمة



\- `backend/src/app.ts` - السيرفر الرئيسي

\- `frontend/src/App.tsx` - التطبيق الرئيسي

\- `.env` - متغيرات البيئة

\- `docker-compose.yml` - إعدادات Docker



\## الأوامر المهمة



```bash

\# تطوير

npm run dev



\# بناء للإنتاج

npm run build



\# اختبارات

npm run test



\# التحقق من الأخطاء

npm run lint

```



\## الخطوات التالية



1\. \[ ] إعداد Database (PostgreSQL)

2\. \[ ] إعداد Authentication

3\. \[ ] بناء API Routes

4\. \[ ] بناء Components



\---



Made with ❤️ by tarek0247


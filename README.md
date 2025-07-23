# 🧠 FullStack68 - Learning Journey

A hands-on fullstack learning path with TypeScript, Next.js, Docker, PostgreSQL, and Drizzle ORM.

---

## 📆 Learning Summary

### 🧱 Day 1: พื้นฐานการตั้งค่าโปรเจกต์ และทำความรู้จัก ESM
- สร้างโปรเจกต์ด้วย CLI และใช้งาน VS Code
- เข้าใจ **ECMAScript Modules (ESM)**: การจัดการ `import/export`
- ตั้งค่า TypeScript Project และรันด้วย `tsx`
- ใช้ **pnpm** เพื่อการติดตั้งที่เร็วกว่า `npm`

🔗 **เชื่อมโยง:** ปูพื้นฐานการเขียน TypeScript + โมดูลที่ใช้ต่อเนื่องในวันถัดไป

---

### 🧪 Day 2: เรียนรู้ TypeScript อย่างเป็นระบบ
- ฝึกใช้ TypeScript: type inference, custom types, function typing
- ใช้ **Quokka.js** สำหรับดูผลลัพธ์แบบ Live ใน VS Code
- เข้าใจ `tsc`, `tsx`, และโครงสร้าง `src/`, `outDir`
- Compile ด้วย `npx` และตั้งค่า `.tsconfig.json`

🔗 **เชื่อมโยง:** ช่วยให้โค้ดมี type-safety ทั้งใน frontend (Next.js) และ backend (ORM)

---

### 🛠️ Day 3: การ config TypeScript อย่างมืออาชีพ
- ปรับแต่ง `.tsconfig.json` ให้รองรับ Node + ESM
- ใช้ community config เช่น `@tsconfig/node-lts`
- กำหนด `include`, `outDir`, และ `module: nodenext`
- ใช้ `npx tsc --showConfig` เพื่อ debug config

🔗 **เชื่อมโยง:** เตรียม environment สำหรับใช้ใน Next.js, Docker, ORM

---

### 🌐 Day 4: เริ่มต้น Next.js + TypeScript
- สร้างโปรเจกต์ **Next.js** แบบใช้ TypeScript
- Clean up หน้าแรก และสร้าง component `.tsx`
- ใช้ alias path เช่น `@components/*` ด้วย tsconfig

🔗 **เชื่อมโยง:** เริ่มเปลี่ยนจาก backend-only → fullstack ด้วย Next.js

---

### 🐳 Day 5: เริ่มต้นใช้งาน Docker และ PostgreSQL
- รู้จัก Docker: Container, Image, Volume, Network
- เขียน `docker-compose.yml` และ `init.sh` สำหรับ Postgres
- ตั้งค่าผ่าน `.env` และทดสอบด้วย **DBeaver**

🔗 **เชื่อมโยง:** เริ่มมีระบบ database จริง ใช้ร่วมกับ Drizzle ORM ใน Day 6

---

### 🔄 Day 6: เชื่อม backend กับ database ด้วย Drizzle ORM
- ใช้ **drizzle-orm** เพื่อ map `TypeScript object ↔ database table`
- ตั้งค่า `schema.ts`, `utils.ts`, `drizzle.config.ts`
- ใช้ `drizzle-kit` สำหรับ push schema → DB
- ใช้ PowerShell + `.npmrc` บน Windows และแก้ไข permission/database

🔗 **เชื่อมโยง:**
- ใช้ Docker/Postgres จาก Day 5
- ใช้ TypeScript จาก Day 2-3
- ทำให้สามารถเขียน backend ที่ type-safe เชื่อมกับฐานข้อมูลจริงได้

---

## 🛤️ Technologies Involved

- TypeScript
- ESM Modules
- pnpm
- Next.js
- Docker & Docker Compose
- PostgreSQL
- Drizzle ORM
- DBeaver (DB Viewer)

---

## 🧩 Project Roadmap

| Phase       | Technology      | Description                         |
|-------------|------------------|-------------------------------------|
| Setup       | TypeScript, ESM  | สร้างโปรเจกต์ด้วยมาตรฐานที่ทันสมัย |
| Development | pnpm, tsx        | จัดการ dependency และ run ts files |
| Frontend    | Next.js          | พัฒนา UI ด้วย React + TypeScript   |
| Backend     | Drizzle ORM      | เชื่อมต่อฐานข้อมูลแบบ type-safe    |
| Database    | PostgreSQL + Docker | จัดการฐานข้อมูลแบบ isolated environment |

---

## 🚀 Ready for more?

ต่อยอดจากนี้:
- ✨ สร้าง REST API หรือ GraphQL
- 🧑‍🔐 เพิ่ม Authentication
- 📦 Deploy ขึ้น Vercel, Railway หรือ VPS

---

> “Code is not just syntax. It’s communication.”  
> — Your future self will thank you for clean architecture 🙌


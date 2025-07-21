# FullStack68
material : https://cmu.to/fullstack68<br>
roadmap : https://roadmap.sh/<br>
type script : https://www.typescriptlang.org/play/<br>
myMiro follow up : [miro](https://miro.com/welcomeonboard/NXF3bjFHUm4vbllQN0p3L2k4VU9kS3huckx6Y3BjQnVZbU5oWGNvSWZENmxzZ2MzSlV2bGRDRldoRncyZE0wbC9jOHhFbkFBZWwwOTNwSzdtVnN4UTlWY2tyYXJoK1VpWnhRNWlRM3ZmZm5TeE1XaXlrTkx2OXJBZndyTUJwWFJhWWluRVAxeXRuUUgwWDl3Mk1qRGVRPT0hdjE=?share_link_id=354997128269) <br> 
learning Java script : https://www.w3schools.com/js/js_versions.asp <br>
<br>
## Day 1<br>
[lecture 1 :Introduction](https://fullstack-68.github.io/lectures/src/T01_intro/T01.html#24) <br> 
[lecture 2 :ESM](https://fullstack-68.github.io/lectures/src/T02A_ts_esm/T02A.html#1) <br> 
สร้าง project vs code by cmd : <br> 
```
1. cd (drive folder)<br>
2. mkdir (name project)<br>
3. cd (name project)<br>
4. code
5. code .
```
run file js in VsCode terminal (only .js): `node (full name of file)`<br>
<br>
<mark> **ESM PROJECT** </mark><br>
step
```
npm init -y
pnpm install -D typescript @type/node nodemon
pnpm install -D @tsconfig/node-lts (<--lkสามารถเลือกได้ว่าจะใช้ ts config รุ่นอะไร (Node LTS)<-- ทำให้ชีวิตง่ายขึ้น)
pnpm install tsx (Much better than `ts-node` (ตัวที่เอาไว้ run type script files แต่ปัญหาเยอะ),trust me)
```
using pnpm เพราะมันเร็ว<br>
after in `pnpm install tsx` พิมพ์ "type":"module", ใน package.json<br>
ถ้าเกิดไม่ทำอะไร มันจะเป็น commmonJs<br>
<br>
quick note :<br>
```
.cjs -> คือกำลังใช้ common js module system <br>
Using type: "commonjs" in packege.json <br>
<br>
EcmaScript (ES) module : <br>
unify ระบบสามารถให้ใด้ทุกที่ เช่น Server , Browser , Other<br>
.mjs <br>
Using type: "module" in package.json<br>
<br>
```
terminology :<br>
```
Synchronoous : เป็นแบบ commonJs -> block execution
Asynchronoous : เป็นแบบ ESM module -> Does not block execution
Dynamic : commonJs -> กำลังทำตอน run time หรือ import ตอน run software อยู่
Static : static imports -> import ตอน compile time หรือ Build time ได้
tree checking : import บางส่วนแล้วก็ Bundle ให้มันเล็กๆ
```
#### What is ESM :
**🔧 ESM (ECMAScript Modules) ใน TypeScript คืออะไร?** <br>
ลองนึกภาพว่า เขียนโปรแกรม เหมือน ทำอาหารในครัว <br>
เวลาคุณมีหลายเมนู คุณคงไม่อยากใส่ทุกอย่างไว้ในหม้อเดียวใช่ไหม? <br>
คุณจะแยกเมนูไว้เป็น กล่อง ๆ (เหมือน "ไฟล์") และหยิบเฉพาะสิ่งที่ต้องใช้มาเท่านั้น <br>
<br>
**🧱 ESM คือ “วิธีการแบ่ง และเรียกใช้ไฟล์ในโปรแกรม”** <br>
📦 ตัวอย่าง: <br>
คุณมีไฟล์ที่เก็บสูตรทำอาหารไว้ <br>
ไฟล์ `cooking.ts` (เก็บสูตร) <br>
```export const recipe = "ต้มยำกุ้ง";``` 
<br>
คำว่า `export` = บอกว่า ไฟล์นี้มีของให้คนอื่นเอาไปใช้ได้ <br>
<br>
ไฟล์ `main.ts` (ไฟล์หลักที่ทำงาน):<br>
```
import { recipe } from "./cooking.js";
console.log(recipe); // ได้ผลลัพธ์: ต้มยำกุ้ง
``` 

คำว่า `import` = เอาสิ่งที่คนอื่น `export` มาใช้ในที่นี่
| จริงในชีวิต               | ในโปรแกรม                          |
| ------------------------- | ---------------------------------- |
| กล่องเก็บของใช้           | ไฟล์ `.ts`                         |
| หยิบของจากกล่อง           | `import`                           |
| วางของไว้ในกล่องให้คนหยิบ | `export`                           |
| รายการของที่ให้หยิบ       | ข้อมูล / ฟังก์ชันที่เขียนไว้ในไฟล์ |

**❓แล้ว TypeScript เกี่ยวอะไร?** <br>
TypeScript คือ ภาษาช่วยให้ JavaScript เขียนได้ปลอดภัยขึ้น <br>
เวลาเขียนด้วย TypeScript แล้วใช้ ESM = คุณกำลัง แบ่งไฟล์และนำเข้าไฟล์ ด้วยวิธีที่ทันสมัยและเป็นมาตรฐาน<br>
<br>

**📌 สรุปสั้น ๆ:** <br>
ESM = วิธีแบ่งโปรแกรมเป็นหลายไฟล์ แล้วสื่อสารกันด้วย import และ export<br>
มันช่วยให้โค้ดของคุณ ไม่ซับซ้อน และ ดูแลง่ายขึ้น<br>
ใช้ในภาษา TypeScript ได้เต็มที่ และกลายเป็นมาตรฐานในปัจจุบัน<br>
<br>

#### conclude : day 1 <br>
  - create project by cmd
  - ESM asd config
  - Hello world in ts and js

## Day 2 <br>
[lecture 3: typeScript](https://fullstack-68.github.io/lectures/src/T02_js_ts/T02.html#1) <br>
run js vs ts
```
const b: number = 10;
console.log(b)
#ถ้า run ด้วย node test.js runได้ เพราะ content มันเป็น Js อยู๋แล้ว
const b: number = 10;
console.log(b)
#ถ้า run ด้วย node test.ts runได้ เพราะ content มันJs สามารถ run ด้วย ts ได้
const b: number = 10;
console.log(b)
#ถ้า run ด้วย node test.ts runไม่ได้ เพราะ content มันไม่ใช้ typeScript 
```
#### What is quokka:
```
Quokka.js เครื่องมือช่วยรัน JavaScript และ TypeScript แบบทันที (live) เป็นผู้ช่วยส่วนตัวใน VS Code ที่บอกทันทีว่าโค้ดของคุณได้ผลลัพธ์อะไร ช่วยให้เรียนรู้หรือทดลองเขียนโปรแกรมง่ายขึ้นมาก
เข่น
ถ้าคุณพิมพ์ใน VS Code แบบนี้:
const x = 5 + 3;
Quokka จะแสดงให้คุณเห็นทันทีว่า:
const x = 5 + 3; // ? 8
```
run typeScript on terminal : <br>
  - เวลาเราลง node js มันจะมี npm อยู่แล้ว <br>
  - npm คือ package manager (npm มันช้า น่ารำคาญ) <br>
  - pnpm แทนตัว npm สามารถ สามารถ install อะไรเร็วๆได้ <br>
  - ข้อดี pnpm 1.download เร็วกว่า 2.มัน cast เอาไว้ <br>
**step 1 install pnpm (cmd)** 
```
npm i -g pnpm  :(npm ขอ install package manager ตัวใหม่ที่ชื่อ (pnpm) -g Install แบบ global 
เพราะอยากให้ pnpm มัน available ทุกๆ session ของ terminal )
```

**step 2 on terminal**
```
(npm init -y :(-y auto yes)
#ได้ package.json ที่บอกว่า project มีรายละเอียดยังไงบ้าง 
-> แต่สิ่งที่ไม่ชอบของ npm init -y คือ ต้อง พิมพ์ "type":"module", ตลอดเลย
เพราะว่า npm init มันได้ package json รุ่นเก่า
#รุ่นใหม่ เขาเปลี่ยน type เป็น module หมดแล้ว  (module = esm module เป็นการ import สิ่งต่างๆระหว่างไฟล์ ))
❌
1. npm init es6 (2015 js รุ่นใหม่ + การใช้ modula import แบบ ESM)
#auto "type": "module",
2. pnpm install -D typescript tsx @types/node (ถ้าไม่มี pnpm ใช้ npm ก็ได้)
#intall นี้จะ install (typescript) ที่เป็น compile type script ที่เป็น ts file ไปเป็น js file ได้
#(tsx) เป็นตัวที่เอาไว้ run type script
#(@types/node) เป็นตัว definition ของ libary ที่อยู๋ใน node js ที่เป็น default ต่างๆ
2.1 สร้าง folder src ใน project เพื่อเก็บ source code โดยเฉพาะ
2.2 ถ้าจะ run code use `npx tsc src/index.ts`
#ืnpx : ช่วยไป exucute binary ที่อยู๋ใน folder ที่ชื่อ node module.bin -> tsc ถ้าอยากใช้
binary ตัวนี้ในการ run program สามารถ ใช้คำสั่ง npx ได้ เพราะไม่งั้น terminal มันจะหา binary ตัวนี้ไม่เจอ
เพราะมันไม่ได้ add เข้าไปใน part 
#tsc : typeScript compile
#src/index.ts : สิ่งที่เราจะcompile
2.3 พอ run `npx tsc src/index.ts` เสร็จมันจะมี file index.js
2.4 ให้เรา run index.js ด้วย `node .\src\index.js`
#ถ้า run ts ตรงๆ `node tsc src/index.ts` มันจะ run ไม่ออก
2.5 npx tsc src/index.ts --outDir dist
#เอาไฟล์ js ที่ compile ไปอยู่ใน folder dist
2.6 เวลาจะ run ก็ `node dist/index.js` แทน
2.7 ถ้ารู้สึกว่ามันช้าไปก็ `npx tsx src/index.ts`
#tsx : ใช้ run type script บน node ตรงๆเราจะใช้ tsx (compile + runner)
✅
```

**quick note**
```
- behind the sence ของ VScode มันมี Typescript Language server protocol run ให้อยู๋แล้ว
- บางที intelligence ของ VScode มันก็เอ๋อได้เหมือนกัน 
วิธีแก้คือ Ctrl + P -> typeScript -> Restart TS server
- การตั้งชื่อ interface ต้องขึ้นต้นด้วยตัวใหญ่ เป็น convantion ที่ใช้กันแบบทั่วโลก
- primitive type : field ทำเป็นเอกพจน์
- type array ทำเป็น พหูพจน์ จะได้รู้ว่ามันคือ Array เช่น food เติม s --> foods
- ถ้าเรา run node index.ts ตรงๆ VScode มันจะอ่านภาษา typeScript ไม่ออก
- function มี argument ที่มันเปลี่ยนได้ แล้วมันก็เปลี่ยน behavior ใน function body ของเรา
- แนะนำ power shell 7 power shell ที่มากับ windows คือ power shell 5
```

<br>

terminology >
- revision : การแก้ไข <br>
- LSP : Language server protocal --> typeScript <br>
- activate : เปิดใช้งาน <br>
- type by inference : มันจะรู้ type ของมันอยู่แล้ว <br>
- type by specificition : กำหนด type ให้มันเอง (keyword : type , interface) <br>
- interface : คล้ายกำหนด class definition แต่ไม่ใช้ class definition โดยตรง <br>
- literal string : ต้องชื่อนี้เท่านั้น <br>
- enforce : บังคับใช้ <br>
- primitive type : field  <br>
- composite type : object <br>
- Library author : ผู้เขียนห้องสมุด <br>
- falsey : undefine , null , 0 <br>
- future proof : หลักฐานในอนาคต <br>
- stylistic : โวหาร  <br>
- alternative : ทางเลือก

#### conclude : day 2 <br>
  - create project typescript 
  - writing typescript
    
## Day 3
[lecture_same_day_2](https://fullstack-68.github.io/lectures/src/T02_js_ts/T02.html#31)<br>

terminel commandline : <br>
  `npx tsc --showConfig` //จะบอกว่าไอ้ที่เรา edit tsconfig.js โดยรวมเราทำอะไรไปบ้าง หรือ สามารถ check <br>
  ว่าเรากำลัง config และจะ compile file อะไรบ้าง จะได้ debug ได้ <br>

### modify : tsconfig.js <br>
  #เนื่องจากเราอยากให้ ts มัน flexibility มากขึ้น <br>
  `npx tsc --init`
  แล้วไปแก้ไข file tsconfig.js เช่น <br>

change outdir
```
เราอยากให้ outdir หรือ folder ที่ compile ts ย้ายไปใน folder ที่เราต้องการ
เราแค่ ctrl + F --> search "outdir" : เปลี่ยนไปใน folder ที่เราต้องการ "outDir": "./dist",
---เพื่อเวลาที่เรา จะ compile ts -> js มันไม่ต้อง พิมพ์เยอะ แค่พิมพ์ `npx tsc` จบ มันจะ compile js ให้ทันที
```

change target 
```
เราสามารถ เปลี่ยน version typeScript ได้ 
ctrl + F --> search "target" --> es2022
```

change module 
```
เราสามารถ เปลี่ยน version typeScript ได้ 
ctrl + F --> search "module" --> nodenext (node next คืออยู๋กึ่งๆกลางๅ คืออะไร ที่เป็น commonJs มันก็
อาจจะคงอยู๋ อะไรที่มันเป็น esm มันก็เปลี่ยนให้)
```

change include
```
เราไม่อยากให้ compiler ไปยุ่งกับอะไรที่ไม่ใช่ src code เราอยากเก็บอย่างอื่นไว้แต่ src code เปลี่ยนได้
เวลาจะ compile ให้เอาเฉพาะ src อย่างเดียว

เพิ่มเองด้านล่างสุดของ tsconfig.js 
-> "include": ["./src/**/*"] 
```

quick note : 
```
- import { name } from "./lib.js"; // มันเป็น esm import ทั้งที่ file มันคือ .ts แต่มันคือ compile behind the scence

- ถ้าอยากรู้ว่า community เขาใช้อะไรกันอยู่ https://github.com/tsconfig/bases
use : `pnpm install @types/node @tsconfig/node-lts @tsconfig/node-ts`

{
  "extends": [
    "@tsconfig/node-lts/tsconfig.json",
    "@tsconfig/node-ts/tsconfig.json"
  ],
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["./src/**/*"]
}

เอา code ด้านบนไปวางแทน tsconfig.js ลบอันเก่าออกให้หมด

จะเห็นว่าสิ่งที่เขาแนะนำในปัจจุบัน จะอยู่ใน path : node_module / tsconfig / node-lts / tsconfig.json -> นั้นคือสิ่งที่เขาแนะนำในปัจจุบัน

{
  "extends": [
    "@tsconfig/node-lts/tsconfig.json", //ตัวนี้คือตัวที่เขา extand เพิ่มขึ้นมา -> คุณกำลังใช้ recommended ts ในปัจจุบัน 
    "@tsconfig/node-ts/tsconfig.json" //ตัวนี้คือ base -> layer แรกที่ทุกๆอันควรใช้ก่อน
  ],
  "compilerOptions": {
    "outDir": "./dist" -> เปลี่ยนได้
  },
  "include": ["./src/**/*"] -> เปลี่ยนได้
}

```
terminology :<br>
  - overwam : ล้น <br>
  
#### conclude : day 3 <br>
 ```
 - ทำ config file esm old to new version
    - หลังจากที่ 1.`npm init es6` 2.`pnpm install -D typescript tsx @types/node` แล้วให้
    - old `npx tsc --init` --> new version `pnpm install @types/node @tsconfig/node-lts @tsconfig/node-ts`
    - `npx tsc --showConfig` เอาไว้ดู config file ด้านบน
```

## Day 4

**Next js**
<img width="697" height="294" alt="image" src="https://github.com/user-attachments/assets/d0747d34-5456-4131-85b4-f04689e0cafc" />

basic cmd : <br>
  - cd \D: <br>
  - code . <br>

next step after create nextJs :
 ``` 1. npm run dev (มันจะ run script ที่อยู่ใน package.json )
  จะได้ localhost:3000 มาเรียบร้อย

  step dev : next js
  clean app -> src/app/globals.css ให้เหลือ แค่ @import "tailwindcss";
  and clean up file page ลบตัว div ที่ return ออก

  create component / Card.tsx (.tsx คือ file ที่เขียน JSX เป็น syntex พิเศษของ Reate ที่ทำให้เราสามารถ    เขียน javaScript และ html รวมกันได้ )
  สรุป : type script ที่ใช้ Jsx ก็เลยเรียก tsx 
  
 ```
<br>

tsconfig.js
```
หา line นี้
{
  // ...
  "paths": {
    "@app/*": ["./src/app/*"], เวลา port อะไรที่อยู่ใน app มันจะมี @app อยู่ข้างหน้า เรียกว่า alias
    "@components/*": ["./src/components/*"] เวลา port อะไรที่อยู่ใน app มันจะมี @app อยู่ข้างหน้า
  }
}
```

#### conclude : day 4 <br>
  - create project nextJs 
  - set up tsconfig in project nextjs

## Day_5

[Lecture_4](https://fullstack-68.github.io/lectures/src/T03_pf_db/T03.html) <br>

สิ่งแรกของการทำโปรเจคคือ เลือก database <br>
relational database : table (in lecture) <br>
  - Protgest : คนใช้เยอะ ลูกเล่นเยอะ <br>
  - MySql : ใช้ง่าย <br>
NoSQL : ที่ไม่ใช่ table <br>
  - MongoDB <br>
<br>

#### learn docker  

##### Docker :
```
ก่อนที่จะเข้าใจ docker ให้เข้าใจคำว่า containers ก่อน 
containers คือ - virtualization tachnology : วิธีที่ทำให้เราสามารถสร้างสภาพแวดล้อมที่แตกแยกออกมา
จากสภาพแวดล้อมอื่น เพราะเวลา run app มันต้องการ สภาพแวดล้อม เช่น app เป็น node ts มันก็ต้องดาร os , js runtime ts compile
เพราะงั้น ถ้าเกิดเอาทุก app มา run ในเครื่องพร้อมกันเจ้งแน่นอน เพราะงั้นเวลา run app in server เราควรมี
isolated eviroment 

isolated eviroment : virtual machine , containers

ถ้าเราไม่ได้มี req ที่สูง มากเราใช้ containers ดีกว่า เพราะมัน portable(save enniroment in USB stick)
แต่จริงเขามักจะ upload ขึ้นไปบน cloud หรือ registry

Consistency : เพื่อนเรา load blueprint ของ containers เรามาใช้มันก็ work -> work everywhere

easy deploy : run บน server ง่าย 

More efficient :  virtual machine -> ลง os ใหม่ทุกอย่างใหม่หมด แต่ถ้าเป็น container มันแชร์ operating
system kernel มัน share resource ได้ดีกว่า

docker : คือ 1 ใน provider ที่ทำระบบ containers ให้คุณมันเป็น reading player
podman : ก็สามารถทำ container ได้เหมือนกัน 
```
##### concept : <br>
<img width="1468" height="840" alt="image" src="https://github.com/user-attachments/assets/50896608-3e00-4bfd-99bf-65aaa2989f8c" /><br>
```
conputer : เวลา run web มันก็ run อยู่บน container บน server อันนึง container นี้เป็น separate enviroment isolated enviroment ข้างในมี Node js อะไรเค็มไปหมด

container : มาจาก plueprint ที่เรีนกว่า image : คำสั่ง

image : 1 image สามารถ generate container ได้มากกว่า 1 อัน สามารถ spon แอป กากๆ ขึ้นมากี่อันก็ได้ 
แล้วมันก็มี isolate eviroment ของมันหมดเลย

Registry : ที่เก็บ image เราจะให้ docker hub เป็นที่เเก็บ docker image 

เราจะ run database ใน docker container
```

##### step create project docker : 
```
1. create file .env (ห้ามเอา file นี้ขึ้น github เด็ดขาด อาจจะถูกไล่ออกได้!!! )
2. .gitignore : file ที่บอกว่าอะไรจะไม่ขึ้นไปบน github
3. docker-compose.yml : ห้ามเคาะมั่ว มันมี format ชัดเจน
4. create folder _entrypoint :
  create file : init.sh

## bash มันจะ run มัน linux ซึ่ง line base มันคนล่ะ character กัน 
<img width="152" height="118" alt="image" src="https://github.com/user-attachments/assets/14956c13-2fad-46a1-aa13-d5eefd6ce274" />
เราต้อง make sure ว่ามันอยู่บน LF จริงๆ มันถึงจะ worl ใน linux เพราะเดี่ยวไฟล์ นี้จะถูก inject เข้าไปใน linux
(carryage return) 

5. ไปตั้ง pass word ใน .env POSTGRES_PASSWORD=1234 (password ที่จะเป็น root password ของคุณ)
POSTGRES_APP_PASSWORD=5678 (application password ที่เราจะได้แยก user กัน)

6. docker volume prune -a (เมื่อกี้ ภาษามัน skip initialization ไปเฉพาะฉนั้นคุณจะไม่มี user ใช้)
check in docker : /usr/local/bin/docker-entrypoint.sh: running /docker-entrypoint-initdb.d/init.sh (ถ้าเกิดไม่ขึ้นอันนี้จะไม่มี user ใช้)

7. docker compose up -d (pull image ของ postgress มาจาก registry ที่ชื่อว่า docker hub )
```
##### step test docker is work : DBeaverCE
1.  add <br>
<img width="52" height="32" alt="image" src="https://github.com/user-attachments/assets/81b37790-8003-433e-8aa0-c98631d7fc73" />

2. select Postgret <br>
<img width="725" height="373" alt="image" src="https://github.com/user-attachments/assets/c2ff891b-c42f-47b7-966c-e648ecd4cc58" />

3. set up follow me : <br>
<img width="372" height="277" alt="image" src="https://github.com/user-attachments/assets/94274397-f3f4-4621-bc19-2b3852f2ff23" /> <br>
<img width="723" height="281" alt="image" src="https://github.com/user-attachments/assets/399a9c2c-c371-4a96-aabd-3b902a03c5e0" /> <br>
<img width="910" height="764" alt="image" src="https://github.com/user-attachments/assets/0a3f5181-39e8-47be-b542-07311ea80c40" /> <br>
<br>

##### other : <br>

  <img width="258" height="125" alt="image" src="https://github.com/user-attachments/assets/7712cba1-deab-4d7b-b11b-1360f1a84b4f" /> <br>
container : application อะไร run อยู่ (เช่นตอนนี้คุณมีแอป database run อยู่เป็น postgret postgret เป็น <br>  container ถูกสร้างมาจาก image) <br>
image : postgret image  <br>
volumes : data <br>
<br>
ถ้าอยากจะ clean ทุกอย่างออกจากเครื่องต้อง clean สามอย่างนี้ <br>
  HOW : <br>
    - docker compose down : เอา container ลง / ออกไป <br>
    - docker image prune -a : เอา image ออกไป <br>
    - docker volume prune -a : เอา volume ออกไป <br>
  ...ลบ completely <br>
<br>
<br>
ouick note : <br>
github action : เปลี่ยน code บน github แล้วมันเปลี่ยน data บนเว็บจริงได้เลย <br>
<br>
terminology :<br>

if error authentication fail you can change your port to be : 5433 from 5432 🫠 <br>
given port in dbeaver and .env the same port <br>
port folow up me <br> <img width="172" height="152" alt="image" src="https://github.com/user-attachments/assets/a52adf7c-ecda-463c-a57a-ce0f43164aa7" /> <br>

ถ้า run ผ่านมันจะขึ้นแบบนี้ <br><img width="807" height="452" alt="image" src="https://github.com/user-attachments/assets/07205e18-5249-417d-9363-b6e3b5ab9a34" /><br>

#### conclude : day 5 <br>
  - basic docker --> check work docker by dbeaver
  - set up file before use docker
  - cmd for docker

## Day 6
#### quick note 
```
docker run fail : wsl in windows มันงอแงงให้ restart 
start clean : 
  -  docker compose down
  -  docker volume prune -a
  -  docker image prune -a
    
ใส่ root , app password ด้วยไม่งั้น initialization scrip มันจะเอ๋อ

docker compose : เป็นตัวหลัก instruction ที่เราจะบอกตอนเอา application ขึ้นต้องทำอะไรบ้าง

image : ไม่ต้องลบก็ได้ ถ้าเกิดคุณอยากจะ spon container เราก็ลบทิ้งแล้วก็ spon คุณไม่ต้องลบ เพราะมันเปลือง
เวลา Load ใหม่

เวลาเราจะ spin application มันต้องเริ่มจาก image ก่อน

เวลามี error อะไร ที่ database ลองลบ volume แล้วลงใหม่
```

#### explan docker-compose.yml
```
image: postgres:17-alpine (มันจะไปหาชื่อนี้ในเว็บ doker hub --postgres:17-alpine (search in google) หรือว่าใน registy 
ที่ชื่อ docker hub -> (click first link)เพราะงั้นคุณกำลังไปดึง image จาก docker hub registry ที่ หน่วยงาน postgres 
เขา up ขึ้นไปให้คุณ -> ใน registry ก็จะมี tag ที่จะบอกว่า คุณ download version อะไร (postgres:17-alpine -- อันนี้ ver17) 
-> ส่วนขีดด้านหลังมันจะบอก version ของ linux เช่น bookworm มันจะเป็น deban , postgres:17-alpine (alpine ก็จะเป็นอีก 
version นึง เน้นเรื่องของขนาดที่มันเล็ก))

container_name: pf-db ชื่อ application ของเรา ที่มัน run อยู่ใน enviroment ที่เป็น linux : alpine linux
```

##### Network
<img width="1590" height="823" alt="image" src="https://github.com/user-attachments/assets/12320770-35e5-4fb9-b268-519bff427d7a" /> <br>
```
สีส้ม : เวลาเรา run application ของเราขึ้นมา เรา run อยู่ใน windows 

สีม่วง : network เวลาเรา run container เราควรให้มันอยู่วง network ที่มันแยกกัน มันจะได้ไม่ไปชนอะไรกับตัวภาพนอก
    networks:
      - pf-net (container ของเรามันจะใช้ network ที่ชื่อ pf-net ด้วย) --> เอา container ไปอยู่ใน network ให้หน่อย
      
    networks:
      pf-net: (เวลาเราจะ spin container ของเรา เราอยากให้มันไปอยู่ network วง pf-net) --> สร้าง network 1 วง ให้ container เราอยู่

สีขาว : run container ถูกครอบโดยสีม่วง หลังจากสร้าง network แล้ว container ก็จะวิ่งเข้ามาอยู่ในวงสีม่วง
container เข้ามาอยู่ใน network ไม่มีอะไรเข้ามาหามันได้ เพราะปกติ by default ขาเข้าจะถูกกันเอาไว้ เขาเรียกว่า ingress จะถูกกันเอาไว้
แต่ขาออกมันจะออกได้

ถ้าจะให้ application ที่อยู่ภายนอกต่อเข้า container ได้ เช่น dbeaver แล้วอยู่คนละวง network ด้วย ซึ่งการที่มันจะเข้าไป access database ของเรา
มันจะต้องเปิด port ออกมา จากตัว network ก็คือบรรทัดนี้ ports: - 5432:${POSTGRES_PORT} ถ้าจะปล่อยให้ nertwork ของเรามี port 5432 ออกมาสู่ดลกภายนอก
ก็คือตัว os ของเราได้ มันก็จะมีการ access เข้าไปหามันได้ {POSTGRES_PORT} (ตรงนี้บอกว่า Postgres port ของเราคือเท่าไหร่)

ports: - 5432(ภายใน):${POSTGRES_PORT}(ภายนอก) --> (ปล่อยภายในสู่ภายนอก) ถ้าเกิดว่าเปลี่ยน port จาก .env เปลี่ยน port อื่น ก็ต้องเปลี่ยน {POSTGRES_PORT} 
เป็น port นั้น เพราะเดี๋ยวเราจะแย่ง port database กันในserver
เพราะฉนั้นต้องเปลี่ยน port ให้ไม่ทับกันเี่ยวมันจะ run ไม่ได้

สรุป 5432(ภายใน):${POSTGRES_PORT}(ภายนอก) มีการ map port 5432 เป็น port default ของตัว image (postgres) ออกไปสู่ {POSTGRES_PORT} ที่ application อื่นเช่น dbeaver access เข้าไปได้

```

##### Volume 
```
volume ถูกกำหนดอยู่ใน docker-compose.yml
volumes:
  pf-data: ไม่สร้าง volume ก็ได้ แต่เมื่อไหร่ ที่เราลบ container data จะหาย
ถ้าเกิดส่วนใหญ่ ไม่ได้เก็บ permanent data เช่น log temp file ก็ไม่เป็นกังวล
แต่ถ้าทำ database data ห้ามหาย มันควรไปอยู่ในที่ที่ ปลอดภัย persistance data
โดยรวมสำคัญเวลา spin database

volume : เหมือนเป็น drive แยกออกมา แล้วบอกว่า ใน container ของเราเวลา container มันเขียน data ลง database มันจะเขียน ลงใน var/.../data ซึ่ง direct นี้จะ map ไปหา drive volume (docker volume)
ถ้าเรามี data เขียนเข้ามาใน database มันจะไปเขียนใส่ persistance volume สีส้ม
แล้วเวลาลบ สีขาวทิ้ง volume สีส้มจะไม่หายไป

note : ถ้าไม่ compose down แต่ไม่ลบ volume database จะยังคงอยู่
และ echo "---------------------------------------------"
echo "Setting up PostgreSQL database: $POSTGRES_DB"
echo "Creating application user: $POSTGRES_APP_USER"
echo "---------------------------------------------"
จะไม่ขึ้นเวลา compose up รอบสอง
trick : ถ้า database มี error ควรลบ volume แล้ว compose up ใหม่ด้วยไม่งั้นมันจะไม่สร้าง user และอื่นๆให้คุณ


```

##### Database user management 
<img width="1441" height="531" alt="image" src="https://github.com/user-attachments/assets/834264fb-c532-4b50-9d75-ad35354f87d5" /> <br>
```
สีส้ม : ประกาศชื่อ database (.env --> mydb)

อย่าลืม set root 
appUser : สิทธิพิเศษ ไม่เท่ากับ root 
schema : group ของ table

version 1 role public can
  connect and usage schema
```

<img width="1440" height="675" alt="image" src="https://github.com/user-attachments/assets/e421409b-e04e-43ee-9c5c-8ba82f81136d" /><br>
```
version 2 
  - role public can not connect and usage schema
  - only appUser can connect and usage schema
```

<img width="1474" height="596" alt="image" src="https://github.com/user-attachments/assets/6b410a86-7917-42e1-bdc9-004ef90caf96" /><br>
```
version 3
  - appuser additional privilage another schema
```

<img width="1411" height="475" alt="image" src="https://github.com/user-attachments/assets/916e57f4-3445-425c-9151-43eb3f825941" /><br>
```
sql for table (sequel) on postgres 

สิ่งนี้ต้อง run หลังจากที่ database มัน spin ขึ้นมาแล้ว ไม่งั้นมันก็ exucute อะไรไม่ได้
manual --> คำสั่งเหล่านี้ทุกครั้งที่คุณ spin มันขึ้นมา
แต่เราอยากให้ docker มัน exucute ทุกครั้งที่ spin database ขึ้นมา (fresh)

ถ้าเกิดคุณจะ exucute อะไรก็ตามตอน start แบบ auto --> ให้สร้าง volume หรือคุณไป map volume /docker-entrypoint เข้าไปหาอะไรก็ตามที่อยู่ใน
host os ของคุณ แล้วอะไรก็ตามที่อยู่นั้นมันจะ exucute โดยอัตโนมัติตอนมัน create container ก็คือ _entrypoint/init.sh

แล้วก็ ./_entrypoint:/docker-entrypoint-initdb.d (map ตัวนี้ที่อยู่ใน image)--> ออกไป(./_entrypoint)
```
#### ORM (object relational mapper)
application : read write update database delete 
ถ้ามี node js คุณก็ต้องลง postgres database driver ในนั้นคุณก็จะเขียน 
sql เข้าไปเป็น text string แล้วมันก็จะไป exucute string ตรงนั้นใน database 
ซึ่งเวลา application มันใหญ่ขึ้นเรื่อยๆ มันมี need อื่นๆเข้ามา ควรจะมี software บางอย่างเข้ามาจัดการกับ
database ก็คือ ORM เราจะได้ data ที่มี type annotation มาให้เราด้วยทำให้เราเขียน app ได้ดีมากๆ 

##### Why ORM 
```
- data จะมี type information ที่เวลากดจุด จะมี list ของ field ขึ้นมาให้
- ORM จะมี Documentation ที่ดีทำให้เราสื่อสารกับคนอื่นได้รู้เรื่อง
- Nice Tooling
    - Database synchronization
    - Schema generation from existing database 
    - Database viewer
    - Migration tool (เวลาเพิ่มลบ colume ควรทำผ่านระบบ Migration ) 1.transparent 2.tag ได้ว่ากำลังทำอะไร (เป็นสิ่งที่ดีมากๆ ในทำ maintenance ของ app ของคุณ)

```
##### [rangking ORM](https://ossinsight.io/collections/javascript-orm/)
 <br>
--------------------------------------------------------------------------------------------------------- <br>

### set up project : 

./.env Copy from [here](https://github.com/fullstack-68/pf-db/blob/main/.env.example).<br>
💾 ./.gitignore [link](https://github.com/fullstack-68/pf-db/blob/main/.gitignore)<br>
💾 ./docker-compose.yml [link](https://github.com/fullstack-68/pf-db/blob/main/docker-<br>compose.yml) <br>
💾 ./_entrypoint/init.sh [link](https://github.com/fullstack-68/pf-db/blob/main/_entrypoint/init.sh)<br>
<br>
**แล้วก็พิมพ์ command Setting up Drizzle**<br>
``npm init es6`` <br>
``pnpm install dotenv drizzle-orm postgres`` <br>
``pnpm install -D drizzle-kit typescript tsx @types/node @tsconfig/node-lts @tsconfig/node-ts cross-env`` <br>
<br>
ต่อไปสร้าง file [tsconfig.json](https://fullstack-68.github.io/lectures/src/T03_pf_db/T03.html#25)<br>

ต่อไป....
Database initialization <br>
Files <br>
💾 ./db/utils.ts [Link](https://github.com/fullstack-68/pf-db/blob/main/db/utils.ts) <br>
💾 ./db/schema.ts [Link](https://github.com/fullstack-68/pf-db/blob/main/db/schema.ts) <br>
💾 ./drizzle.config.ts [Link](https://github.com/fullstack-68/pf-db/blob/main/drizzle.config.ts) <br>
💾 ./.npmrc from ./npmrc.example [Link](https://github.com/fullstack-68/pf-db/blob/main/.npmrc.example) (What?) <br>
Windows: you must choose a terminal. <br>
Mac: optional <br>


explan : command
```
pnpm install dotenv(อ่าน .env) drizzle-orm(orm ที่จะใช้ ตัวเชื่อม) postgres(driver ตัวอ่าน)

pnpm install -D drizzle-kit(tooling ) typescript(complier) tsx @types/node @tsconfig/node-lts @tsconfig/node-ts (ใช้ ts config จาก community) cross-env
```
--------------------------------------------------------------------------------------------------------- <br>

#### terminology :
```
what ever : อะไรก็ตาม 
manual : ทำมือ
privilage : สิทธิพิเศษ
invoke : วิงวอน
interact : มีปฏิสัมพันธ์
transparent : โปร่งใส
adopt : รับเลี้ยง
```

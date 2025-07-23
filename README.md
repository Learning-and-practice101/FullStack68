readme-update
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
<br>
cmd : clear <br>
<br>
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
<br>
เนื้อหาโดยรวม: เรียนรู้การตั้งค่าโปรเจกต์ ESM, การ compile TypeScript, และการใช้งาน nodemon + tsconfig<br>

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
<br>
เนื้อหาโดยรวม: ฝึกใช้ TypeScript เบื้องต้น ทั้ง primitive types, custom types, และการเขียน function แบบ type-safe <br>

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

เนื้อหาโดยรวม: อาจเป็นการฝึกซ้ำจาก Day_1 หรือทดลองเพิ่ม concept ใหม่ใน environment เดิม เช่น ESM หรือ dynamic import
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
<br>
สรุปเนื้อหา:<br>
✅ เรียนรู้การตั้งค่า Next.js แบบใช้ TypeScript<br>
✅ อาจมีการใช้ CSS Framework (ผ่าน PostCSS เช่น Tailwind)<br>
✅ เรียนรู้การสร้างหน้าเว็บด้วย src/pages และจัดโครงสร้างโปรเจกต์<br>

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
<br>
สรุปเนื้อหา: <br>
✅ เรียนรู้การใช้ Docker Compose เพื่อจัดการ environment <br>
✅ ใช้ init.sh สำหรับเตรียมระบบก่อน container ทำงาน <br>
✅ มี .env สำหรับตั้งค่าระบบอย่างยืดหยุ่นและปลอดภัย <br>

## Day 6
[lecture](https://fullstack-68.github.io/lectures/src/T03_pf_db/T03.html#26)<br>
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

- เวลาทำ production ห้าม db push ให้ migation
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

จากนั้นเราจะ cmd : `npx drizzle-kit push ` มันจะไปอ่าน db/schema ของเราแล้วมันก็จะซิงค์กับ database ที่เรากำลัง run อยู่ตอนนี้ แต่มันจะ error <br>
ให้เอา [script](https://fullstack-68.github.io/lectures/src/T03_pf_db/T03.html#27) ไปแปะใน packet.json <br>

ต่อไปถ้าอ่าน explan file .npmrc --> ถ้า uncomment แล้วให้ `npm run db:push` == มันจะไป activate script packet.json <br>
แต่เวลาจะ run script ใน Powershell ตอนแรกมันจะปิดอยู่ให้ไป <br>
google --> powershell allow execution policy --> ``Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine`` <br>
<img width="791" height="363" alt="image" src="https://github.com/user-attachments/assets/d2462294-a33a-4a53-898a-9b581cc6aef5" /><br>
<img width="887" height="267" alt="image" src="https://github.com/user-attachments/assets/f88ac485-bfeb-4fce-98f8-c529e339e435" /><br>

explan : command <br>
```
pnpm install dotenv(อ่าน .env) drizzle-orm(orm ที่จะใช้ ตัวเชื่อม) postgres(driver ตัวอ่าน)

pnpm install -D drizzle-kit(tooling ) typescript(complier) tsx @types/node @tsconfig/node-lts @tsconfig/node-ts (ใช้ ts config จาก community) cross-env
```
explan : [file](https://docs.google.com/document/d/1x440TQJxKc5rNJWtkjLYBoid8gnIASB6ZApYx9_0kF8/edit?usp=sharing) <br>
```
Files
💾 ./db/utils.ts : อ่าน eviroment ต่างๆ
💾 ./db/schema.ts : เก็บขึ้น repo คนอื่นจะรู้โครงสร้าง project ของเรา (ถ้า npm run db:push เวลาเราเพิ่มอะไรใหม่ๆเข้าไปมันจะเรียกว่า database synchonization)
💾 ./drizzle.config.ts (Link) 
💾 ./.npmrc from ./npmrc : ถ้าเกิดคุณจะ run packet.json คุณควรใช้ shell อะไร ใช้ powershell อะไรให้ uncomment อันนั้น (check version powershell in terminal by : pwsh.exe / powershell.exe) ต้อง
uncommment เพราะไม่งั้นมันจะ default เป็น cmd ซึ่งมันไม่ work 
```

explan : packet.json (script)
```
"db:generate": "cross-env NODE_OPTIONS='--import tsx' drizzle-kit generate",
    "db:push": "cross-env(ใช้ได้ทั้ง mac และ windows) NODE_OPTIONS='--import(ใช้ยัด tsx เข้าไปใน Environment variable ของ shell ) tsx'(push เฉยๆไม่ได้ต้องใช้ type script runner มาช่วย มัน support ESM import) drizzle-kit push(exucute command drizzle-kit push)",
    "db:migrate": "cross-env NODE_OPTIONS='--import tsx' drizzle-kit migrate",
    "db:prototype": "tsx ./db/prototype.ts",
    "eol": "eolConverter _entrypoint/*.sh"
 
```
explan : drizzle-config.ts
```
schema: "./db/schema.ts", : ##ถ้าจะติดต่อกับ database มันต้องใช้ ข้อมูลอะไรบ้าง
  dialect: "postgresql", : คุณจะใช้ postgresql 
 url: connectionString, : ติดต่อ database password อะไรต่างๆ
import { connectionString } from "@db/utils.js";
connectionString : login เข้าไปใน database ได้โดยใช้ string ตัวเดียว
```
--------------------------------------------------------------------------------------------------------- <br>

update power shell :<br>
<img width="554" height="194" alt="image" src="https://github.com/user-attachments/assets/067c70f2-376e-4e2b-95b4-a5ae24b7aa49" /><br>
<img width="686" height="209" alt="image" src="https://github.com/user-attachments/assets/92f72e20-e0e0-4f92-b619-f83971199a50" /><br>

#### Authenticatio faild : 
```
psql -U postgres -h localhost -p 5433 -d mydb (ถ้า เข้าได้ → แปลว่า database ทำงานปกติ )

1.psql -U appuser -h localhost -p 5433 -d mydb (ถ้า เข้าได้ → แปลว่า database ทำงานปกติ )
ตอนอยู่ใน mydb=# \du เพื่อดูว่ามี role ไหนทำง่านอยู่บ้าง

2. จากนั้นให้รันคำสั่งเหล่านี้เพื่อให้ appuser มีสิทธิ์เต็ม:
sql
Copy code
มีรหัสผ่านถูกต้อง...
ALTER USER appuser WITH PASSWORD '5678';
GRANT CONNECT ON DATABASE mydb TO appuser;
GRANT USAGE ON SCHEMA public TO appuser;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO appuser;

ถ้าไม่มี appuser ให้สร้างใหม่ 
CREATE USER appuser WITH PASSWORD '5678';
GRANT CONNECT ON DATABASE mydb TO appuser;
GRANT USAGE ON SCHEMA public TO appuser;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO appuser;

ให้ appuser สิทธิ์ใน schema public
GRANT USAGE ON SCHEMA public TO appuser;
GRANT CREATE ON SCHEMA public TO appuser;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO appuser;

3. ออก \q

4. npm run db:push

reset password :
1.psql -U postgres
2.ALTER USER appuser WITH PASSWORD 'newpassword';

check post ว่าทำงานอยู่ : netstat -aon | findstr :5433

```

### debug
1. <br>
<img width="1016" height="471" alt="image" src="https://github.com/user-attachments/assets/20b16af5-350d-4a4f-8202-3e7d52ad42dc" /> <br>
<img width="983" height="645" alt="image" src="https://github.com/user-attachments/assets/9cd1eba6-890e-4e9f-85be-f6ed28614b60" /> <br>
<img width="986" height="324" alt="image" src="https://github.com/user-attachments/assets/ce4f79ea-d481-4c10-a143-34fed98bd403" /> <br>
<img width="951" height="189" alt="image" src="https://github.com/user-attachments/assets/e1cc2063-2563-4bd7-84d3-d4b3a1a5742c" /> <br>
<img width="1014" height="357" alt="image" src="https://github.com/user-attachments/assets/3485b773-49cf-4d8f-b42a-bc5a46c50fd0" /> <br>
 <br>
2. 
<img width="985" height="305" alt="image" src="https://github.com/user-attachments/assets/aac52ff9-4578-4cdd-ae55-9cc081dfa90c" /> <br>
<img width="1033" height="502" alt="image" src="https://github.com/user-attachments/assets/b1cfc1c9-8bab-481a-88ae-427469f042ba" /> <br>
✅ วิธีแก้ที่ใช้ได้แน่นอน: ให้ superuser เปลี่ยน owner ของ schema <br>
🔧 1. เข้าด้วย superuser (postgres): <br>
bash <br>
`psql -U postgres -h localhost -p 5433 -d mydb` <br>
🔧 2. เปลี่ยน owner ของ schema public ให้เป็น appuser: <br>
sql <br>
`ALTER SCHEMA public OWNER TO appuser;` <br>
🔧 3. ให้สิทธิ์ appuser สร้าง object (เช่น table) ได้: <br>
sql <br>
`GRANT ALL ON SCHEMA public TO appuser;` <br>
🔧 (ทางเลือก): ให้สิทธิ์ใช้งาน future objects (เช่น table ที่ยังไม่ถูกสร้าง): <br>
sql <br>
`ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO appuser;` <br>
 <br>
<img width="732" height="175" alt="image" src="https://github.com/user-attachments/assets/1cf7120e-fa5b-4bd9-a49d-dfe24f22bebe" /> <br>
  <br>

conclude : cmd <br>
node -r dotenv/config -e "console.log(process.env.POSTGRES_PORT)" <br>
psql -U postgres -h localhost -p 5433 -d mydb <br>
psql -U appuser -h localhost -p 5433 -d mydb <br>
type .env <br>
npm run db:push <br>
<br>
sql : <br>
\du <br>
\q <br>
\dn+ <br>
<br>

conclude : debug 
  - เปลี่ยน port 5433:5432 --> set up permission for appuser --> npm run db:push
#### terminology :
```
what ever : อะไรก็ตาม 
manual : ทำมือ
privilage : สิทธิพิเศษ
invoke : วิงวอน
interact : มีปฏิสัมพันธ์
transparent : โปร่งใส
adopt : รับเลี้ยง
extract
```
#### conclude : day 5 <br>
  - Database user management ORM
  - อธิบาย Docker container
  - Setup 
  - Debug database authen faild 
<br>
🔍 สรุปว่าโปรเจกต์นี้ day 6 <br>
เป็นโปรเจกต์ backend (หรือ full-stack) ที่เขียนด้วย TypeScript และใช้ Drizzle ORM สำหรับจัดการฐานข้อมูล โดยใช้ Docker และ pnpm ในการจัดการ environment และ dependency <br>
✅ การจัดการ Database ด้วย TypeScript (ผ่าน drizzle-orm) <br>
✅ การใช้งาน Docker Compose + Shell Script เพื่อจัดการ Environment <br>
✅ การแยก concerns ของระบบให้เป็นระเบียบ เช่น database logic, entrypoint <br>

## day 7 continue day 6
[lecture](https://fullstack-68.github.io/lectures/src/T03_pf_db/T03.html#26)<br>
migration : เหมือน version contol ซึ่งเราสามารถรู้ได้ว่าใครทำอะไรบ้างใน database <br>
ซึ่งสามารถ record ได้ว่าทำอะไรกับ database ไปบ้าง <br>
generate : npm run db:generate <br>
มันจะไป run คำสั่ง `"db:generate": "cross-env NODE_OPTIONS='--import tsx' drizzle-kit generate",`ใน packet.json <br>
cross-env NODE_OPTIONS='--import tsx' ท่ายากทำให้เป็น esm module  <br>
<img width="904" height="348" alt="image" src="https://github.com/user-attachments/assets/cc0c7249-1e89-4c10-a20d-53362304d69f" /><br>
เราจะสนใจ file นี้ <br>
<br>
ซึ่งถ้าเรา  run `npm run db:migrate` มันจะไป run script ใน packet.json ที่ชื่อว่า <br>
`"db:migrate": "cross-env NODE_OPTIONS='--import tsx' drizzle-kit migrate",` <br>
 <br>
ถ้าเราเปลี่ยนแปลง scheme หลังจากเปลี่ยนแล้วให้เรา `npm run db:generate` <br> 
แล้วมันจะสร้าง file migration ใหม่ มันจะเปรียบแทบ migration กับ schema ที่มีอยู่ ถ้าไม่มีมันจะสร้าง migration ใหม่<br> 
<br> 
ถ้าเราจะให้มันขึ้น production หรือให้มัน show on database dbeaver ให้เรา run `npm run db:migrate`<br> 
<br> 

### TypeScript with database 
จากนั้นเราจะ เปลี่ยนไปใช้ TypeScript ในการ interact กับ database  <br>
แทนที่เราจะมานั่ง interact กับ dbeaver <br>
CRUD<br>
💾 ./db/client.ts [Link](https://github.com/fullstack-68/pf-db/blob/main/db/client.ts) <br>
(file นี้ บอกว่าถ้าเราจะเริ่ม interact กับ database เราจะเริ่มด้วย dbClient) ข้อดีง่าย และ type save<br>
💾 ./db/prototype.ts [Link](https://github.com/fullstack-68/pf-db/blob/main/db/prototype.ts) <br>

ถ้าจะ test ใช้ คำสั่ง `npx tsx db/prototype.ts` <br>
แต่ว่าผมขี้เกียจพิมพ์ `npx tsx db/prototype.ts` ผมก็เลยสร้าง script ของผมเองเป็น `npm run db:prototype`

### important note : ถ้าจะเปลี่ยนให้ vscode ใช้ LF ตลอด <br>
ให้เพิ่ม `eolConverter _entrypoint/*.sh` แล้วก็ใช้คำสั่ง `npm run eol` <br>

### เก็บตก run migration แล้วไม่ได้ 
ถ้า npm run db:migrate แล้วเกิด warning คือมันมาจาก driver ไม่ได้มาจาก Dizzle ORM <br>
#### เผลอลบ file migration : 
`echo "-- intentionally left blank" > db/migration/0001_broken_aqueduct.sql` badly solve <br> 

#### 1. delete table on DBeaver
```
DROP TABLE IF EXISTS __drizzle_migrations;
DROP TABLE IF EXISTS "todo";
```
#### 2. Delate file migration and meta 
```
rm db/migration/*.sql
✅ วิธีลบโฟลเดอร์ db/migration/meta บน PowerShell
ให้ใช้คำสั่งนี้แทน:

powershell
Copy
Edit
Remove-Item -Recurse -Force db/migration/meta
ความหมาย:
-Recurse = ลบทั้งโฟลเดอร์และสิ่งที่อยู่ข้างใน

-Force = ลบแม้จะมี hidden/system file
```
#### 3. Generate ใหม่:
`npm run db:generate`
#### 4. แล้ว migrate:
`npm run db:migrate`

### Day 8
### Set up backend <br>
----------------------------------------------------------------------------------
[leature](https://fullstack-68.github.io/lectures/src/T04_pf_backend/T04.html)<br>

the best backend : Nestjs (Big project : Opiniated ),express (Minimal project :Unopiniated )<br>
note : ปกติถ้าทำ backend ก็จะผูกกับ database ไปเลย<br>
<br>
setup project (follow lecture):<br>
```
Packages
npm init es6

Express JS
pnpm i express cors helmet morgan debug

Typescript
pnpm i typescript @tsconfig/node-lts @tsconfig/node-ts tsx tsc-alias
pnpm i -D @types/cors @types/express @types/debug @types/morgan @types/node cross-env nodemon

ORM
pnpm i drizzle-orm postgres dotenv
pnpm i -D drizzle-kit
```
note : @types/express (type definition)<br>
<img width="781" height="351" alt="image" src="https://github.com/user-attachments/assets/011d567a-c38b-435a-9875-bb59f5b460cf" /><br>
<img width="1495" height="367" alt="image" src="https://github.com/user-attachments/assets/c86cdc95-0365-4ec4-ba6d-9ace68d2f70d" /><br>
<img width="84" height="54" alt="image" src="https://github.com/user-attachments/assets/33b19b64-8028-4d59-a272-0f7e4b9d1934" /><br>
<img width="1476" height="346" alt="image" src="https://github.com/user-attachments/assets/a5ff6734-664b-49ba-bf59-237c0bc32cd1" /><br>
<br>
note : -D <br>
ลงแบบ dependency : in packet.json จะมี devDependency , dependency <br>
<br>
จากนั้น...ลงfile db: <br>
<img width="514" height="233" alt="image" src="https://github.com/user-attachments/assets/59e1e35a-559c-4140-bb18-14467882b6a3" /><br>
<br>
<img width="907" height="522" alt="image" src="https://github.com/user-attachments/assets/d0896d17-8716-4f8d-9aa6-68ffdabafe43" /><br>
<br>
<img width="411" height="344" alt="image" src="https://github.com/user-attachments/assets/a75eb9fd-00ac-4035-9af4-b0defbab46c2" /><br>
<br>
note : .npmrc <br>
file พิเศษสำหรับ windows ถ้า จะ run node script npm run ต่างๆ มันจะใช้ cmd ซึ่งเก่ามากเลยต้อง <br>
เปลี่ยนมาใช้ powershell แทน  mac and linux ไม่เป็นอะไร <br>
<img width="336" height="123" alt="image" src="https://github.com/user-attachments/assets/143166c2-c081-4356-9f9a-85e031430835" /> <br>
check version powershell <br>
<br>
#### terminology : 
```
Boilerplate : แม่แบบ
Opiniated : ถ้าคุณจะใช้มันคุณต้องทำตามแบบแผนมัน
```
----------------------------------------------------------------------------------<br>
### Imprement backend <br>

=======
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

main

## cmd : for github 

**check root folder for repo github**<br>
```
git rev-parse --show-toplevel 
```

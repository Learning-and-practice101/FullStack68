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

#### conclude : day 1 ><br>
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



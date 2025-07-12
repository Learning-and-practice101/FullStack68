/* 
function sayHello(name: string) {
  console.log("Hello " + name);
}

sayHello("World");

import { name } from "./lib.js";

sayHello(name); 
*/

import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dir = fs.readdirSync(__dirname);
console.log(dir);

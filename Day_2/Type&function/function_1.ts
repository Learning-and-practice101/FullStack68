//type any เป็น type อะไรก็ได้ (trick in function ควรกำหนด type)
/* 
function sumNumber(a,b){
    return a + b;
}
*/

/*--------------------------------------*/
//create function
function sumNumber(a: number, b: number) {
  return a + b;
}

//call function
sumNumber(1, 3);
/*--------------------------------------*/

//function อาจจะรับ null label ได้
function greet(text: string | null | undefined) {
  //check input
  if (!text) {
    //สร้าง type guard เพื่อกรองแค่ string
    console.log("...");
    return;
  }
  console.log(text); // มี guard แล้ว ts จะรู้ว่าที่เหลือ ต้องเป็น string
}
greet("yes");

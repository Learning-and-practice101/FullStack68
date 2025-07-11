//problem
/* 
interface Backpack {
   item: string; //<- ไม่ได้อยากจะกำหนด string ในนี้
   //item อยากให้มันเป็นอย่างอื่นได้
  //แต่ไอ้สิ่งนั้นให้ user define
} 
*/

//solution
interface Backpack<Type> {
  //ยังไม่บอก type ของ item <Type> -> รับ argument
  item: Type;
}

//กำหนดให้ item คืออะไรทีหลัง
const backpack: Backpack<string> = {
  //<string> -> เป็นargument
  item: "bottle",
};

//สร้าง item หลายๆ type ได้
const backpack2: Backpack<number> = {
  //<string> -> เป็นargument
  item: 1234,
};

//----------------------------------
//array of type
interface Backhole<Type> {
  //ยังไม่บอก type ของ item <Type> -> รับ argument
  item: Type[];
}

//กำหนดให้ item คืออะไรทีหลัง
const backhole1: Backhole<string> = {
  //<string> -> เป็นargument
  item: ["a1", "a2"],
};

//----------------------------------
//function signature
interface F1<Type> {
  //ยังไม่บอก type ของ item <Type> -> รับ argument
  add: (obj: Type) => void;
}

//กำหนดให้ item คืออะไรทีหลัง
const f1: F1<string> = {
  //<string> -> เป็นargument
  add: (a) => {},
};

interface Address {
  city: string;
}

interface Post {
  //user แต่ล่ะคนสามารถ post ได้
  title: string;
  text?: string;
}

interface User {
  id: number;
  name: string;
  isActive: boolean;
  phone: string | number | null | undefined; // | = หรือ :  type composition,phone บางที user ไม่อยากกรอกเบอร์มือถือเราก็ให้ เป็น Null เพื่อบอกว่าไม่มีก็ได้ : null label
  //null : จงใจให้ไม่มีเบอร์ vs undefined : หาไม่เจอ ,error
  website?: string; // ? เพื่อบอกว่า field นี้ไม่มีก็ได้ : optional field
  //จะเห็นว่า user ไม่บ่นว่าต้องมี field website
  role: "ADMIN" | "USER"; //role บางทีมัน admin or ADMIN เรา stick ไปเลยว่า "ADMIN"
  //สามารถคั้นด้วย | ได้
  address: Address; // address ไม่ใช่ premitive type ธรรมดา มันเป็น type
  foods: string[]; //user สามารถชอบอาหารได้มากกว่า 1 อาหารมันควรจะเป็น string array
  post: Post[]; //type array สามารถ post ได้ หลาย post
  greet: () => void;
  //field ของ user object มี function ที่ชื่อ greet
  //ไม่ได้รับ argument อะไร ไม่ได้ ปล่อยอะไรเลย
  //บางที user อยากมี function
  //greet:( argument) => return อะไร;
  //ส่วนใหญ่ เก็บแค่ data ไม่ เก็บ function ไม่ค่อยทำใน appication deverloper
  // แต่ Libary author อาจจะทำ

  //greet ไม่ใช้ ตัวแปร ไม่ใช้ primitive type ไม่ใช้ object ไม่ใช้ data มันคือ function
  fluke: (a: string) => void; //function รับ argument
}

const user: User = {
  id: 1, // ให้ VScode suggest list field มาให้โดยใช้ ctrl + shift
  name: "Haynes",
  isActive: true,
  phone: "12345",
  website: "google.com",
  role: "ADMIN", //
  address: {
    city: "Bangkok",
  },
  foods: ["Pizza", "Rice"],
  post: [
    { title: "post_1", text: "Hello" },
    { title: "post_2", text: "what ever" },
  ],
  greet: () => {
    console.log("Hello");
  },
  fluke: (a) => {
    console.log(a);
  },
};

user.fluke("love you");
user.greet();
console.log(user);

/*
const a = [1, 2, 3, 4, 5];
console.log(a[6]);

const b = [1, 2, 3, 4, 5] as const; //as const เพื่อบอกว่า array ต้องมีเลขแบบนี้เท่านั้น
console.log(b[6]);
*/

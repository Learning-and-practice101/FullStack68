//type by interance 
/* 
const user ={
    name: "Haynes",
    id: 0,
}
*/

/*------------------------------*/

//type by specification สร้าง format สวยๆด้วย interface
/* 
interface User {
    name: string; // interface ลงท้ายด้วย ;
    id: number;
}

//บอก user ให้มี specification ที่เราต้องการ
const user:User={ // : ตามด้วย User 
    name: "fluke",
    id: 1234,
}
*/

/*------------------------------*/

//type by specification อีกอันนึง ไม่ต่างจาก interface แต่ interface มีลูกเล่นเยอะกว่า
/*
type User = {
    name: string;
    id: number;
}

const user:User={ // : ตามด้วย User 
    name: "fluke",
    id: 1234,
}
    
*/
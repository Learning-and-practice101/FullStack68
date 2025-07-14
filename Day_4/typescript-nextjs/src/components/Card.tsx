import { FC } from "react"; //FC คือ type definition ของ function

//component มันควรจะมี propety เพราะ card มันควรเปลี่ยน title กับ text ได้
interface Props {
  title: string;
  text?: string;
}

/* //function ปกติ 
const Card = () => {};//function 
export default Card;//export ออกไปใช้งานหน้าอื่นๆ
 */

//function typeScript
//<Props> คือ generic สามารถเปลี่ยน type ได้
//{title, text} คือการ destructure มันออกมา จากปกติ ต้อง props แล้ว . เอา
const Card: FC<Props> = ({ title, text }) => {
  return (
    <div className="border border-gray-300 p-2 rounded shadow-sm flex flex-col items-center">
      <div className="font-bold text-lg text-gray-800">{title}</div>
      <div className="text-gray-600">{text ?? "...."}</div>
    </div>
  ); //<-- ว่างเปล่า แต่คือ react node JSX เบื้องหลังมันคือ Object ของ react ทำให้เราเขียน syntex แบบนี้ได้
}; //function
export default Card; //export ออกไปใช้งานหน้าอื่นๆ

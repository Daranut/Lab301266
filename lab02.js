/**LAB-2 : Accumulator
- ให้สร้าง Constructor Function: Accumulator(startingValue) มี property ชื่อ currentValue ไว้เก็บค่าสะสม 
(มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง) และมี method
- read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
- show() ให้ alert ค่า currentValue */
function Accumulator(startingValue) {
    this.currentValue = startingValue;
    this.read = function () {
        const inputValue = +prompt("ป้อนค่า");
        this.currentValue += inputValue;
    };

    this.show = function () {
        alert(`ข้อมูลตอนนี้คือ: ${this.currentValue}`);
    };
}
// กำหนดค่าเริ่มต้นเป็น 10
const accumulator = new Accumulator(10); 
accumulator.read();
accumulator.show();

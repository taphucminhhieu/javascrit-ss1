//console.log("hello world")
//khai báo biến : var let const
var usserName ="Nguyễn Văn A";

console.log("username trước khi khai báo = " ,usserName);

//khai báo lại giá trị
var userName ="Lê Văn B";

console.log("username sau khi khai báo lại = " ,userName);

//gán lại giá trị
userName = "Nguyễn Văn C";

console.log("userName sau khi gắn lại giá trị: ",userName);

//Phạm vi(toàn bộ bên trong file js)

//Hoisting (sử dụng biến trước khi khai báo, tuy nhiên giá trị là underfined)
age=10;
console.log("age: ",age);
var age =30;

//nhược điểm: code khó bảo trì, khó kiểm soát phạm vi, khó phát hiện code lỗi.

//từ phiên bản 2015, js phát hành phiên bản ES6 (them 2 từ khoá let và const).
let student_name= "Nguyễn Minh Nam";

//khai báo lại(lỗi)
//let student_name="Lê Văn A";

// Gắn lại giá trị
student_name="Lê Văn b";
console.log("student_name sau khi gắn lại: ",student_name);

//phạm vi (block) {}

//Hoisting (có) TDZ
//console.log(studentCode);
//let studentCode = "SV001";




//từ khoá const
const PI = 3.14;

//khai báo lại(không)

//gán lại giá trị (không)

//Phạm vi (block)

// Hoisting (có và tương tự như let) 

// Các kiểu dữ liệu cơ bản
//1.kiểu số
const firstNumber=10;
const seconNumber=20;

console.log("firstNumber = ",firstNumber);
console.log("seconNumber = ",seconNumber);
console.log("Kiểu dữ liệu của biến firstNumber: ", typeof firstNumber);

console.log(firstNumber + " + " + seconNumber + "=" ,firstNumber + seconNumber );
console.log(firstNumber + " - " + seconNumber + "=" ,firstNumber - seconNumber );
console.log(firstNumber + " * " + seconNumber + "=" ,firstNumber * seconNumber );
console.log(firstNumber + " / " + seconNumber + "=" ,firstNumber / seconNumber );
console.log(firstNumber + " % " + seconNumber + "=" ,firstNumber % seconNumber );

//2. kiểu chuỗi
const email="hta85055@gmail.com";
const address = "Thanh Xuân, Hà Nội";

 //  1-Thao tác nối chuỗi
console.log("Email = " + email + " - " + " Địa chỉ = " + address);

 // Template string (``)
console.log(`Email = ${email}, Address = ${address}`);

//3.Kiểu boolean (true/false)
console.log(false);

//4. Kiểu underfined
let gender;
console.log("gender: ", gender);

//5. Kiểu null: khi khai báo 1 biến, nếu chúng ta "chưa muốn hoặc không xác địng trước được giá trị của biến đó" thì mặc định có thể gán là null
const user = null;

//6. kiểu NaN
console.log(`Kiểu dữ liệu của NaN: `, typeof NaN);
console.log("Result: " ,10 / "abc");

//chuyển đổi dữ liệu

const mathScore = 10 ;
const historyScore = "8";

//chuyển đổi từ 1 chuỗi thành số
//console.log(number(hiStorycore));
//console.log(parseInt(historyScore));
//console.log(+historyScore);

//2.Chuyển đổi từ 1 số sang  1 chuỗi
//console.log(string(mathScore));
console.log(mathScore.toString());

//3. chuyển đổi Boolean
console.log(Boolean(1));  //True
console.log(Boolean (0)); // False
console.log(Boolean ("")); // False
console.log(Boolean (false)); // False
console.log(Boolean (null)); // False
console.log(Boolean (undefined)); // False
console.log(Boolean (NaN)); // False

//cơ chế nhập xuất
const myName= prompt("Nhập tên của bạn"); // kiểu dữ liệu string hoặc null
const myAge= prompt("Nhập tuổi của bạn");

//cơ chế xuất trong (c1)
console.log("myName = ",myName);
console.log("myAge = ",myAge);

//cơ chế xuất trong (c2)
//alert(myName);
//alert(myAge);

//cơ chế lựa chọn
const isConfim = confirm("Bạn có muốn đăng xuất không.")



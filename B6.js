//nhập
const name_of_book = prompt("Tên sách ");
const number_of_book = prompt("Số thứ tự");

//xử lý dữ liệu

name_of_book.toUpperCase();
const aftel = "LIB"+ " - " + name_of_book + " - " + number_of_book;

//xuất trong
console.log("Tên sách gốc: ",name_of_book.trim());
console.log("Mã sách sau khi chuẩn hoá: ",aftel);
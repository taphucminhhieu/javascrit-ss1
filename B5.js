//nhập
const name_of_book = prompt("Tên sách");


//xử lí dữ liệu
const year_of_book =Number(prompt("Năm sách xuất bản :"))  ;
const year_of_book_update = Number( prompt("Năm sách mới: "));
const old_book = year_of_book_update - year_of_book;

//xuất trong
console.log("Sách: ", name_of_book);
console.log("năm xuất bản:  ", year_of_book);
console.log("Tuổi của sách: ",old_book);
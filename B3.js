//nhập xuất
const number_of_old_book= Number(prompt("số sách cũ: ")) ;
const update_book = Number(prompt("số sách cật nhập thêm: "));

//gọi
let total= number_of_old_book + update_book;

//xuất trong
console.log("Số sách cũ: ",number_of_old_book);
console.log("Số sách mới được cật nhập: ", update_book);
console.log("Tổng số sách trong thư viện: ", total);
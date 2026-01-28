//các biến cần thiết 
let bookName = "Lập trình với JavaScript";
let authorName = "Nguyễn Văn A";
let pulish = 2022; // Năm sản xuất
let price = 100000;// Giá
let quanlity = 100; // Số lượng trong kho

//chuẩn hoá dữ liệu 
//Tên sách: loại bỏ khoảng trắng thừa ở 2 đầu (trim) và chuyển tất cả thành chữ in hoa .
bookName.trim(); //loại bỏ khoảng trắng ở đầu và cuối
bookName.toUpperCase(); //Chuyển tất cả thành chữ in hoa
console.log(
    "chuỗi sau khi loại bỏ khoảng trắng và chuyển thành in hoa: ",
    bookName.trim().toUpperCase(),
);

//Tên tác giả:chuyển thành chữ in hoa.
console.log(
    "Tên tác giả sau khi chuyển thành chữ in hoa: ",
    authorName.toUpperCase(),
);

//Tạo mã định danh (Book ID):
// - Mã sách được tạo tự động theo công thức: 3 ký tự đầu của Tên tác giả+
// Năm xuát bản + một số ngẫu nhiên từ 1 đến 1000.
//lấy ra 3 ký tự đầu tiên của tác giả 
console.log("3 ký tự đầu của tên tác giả: ", authorName.slice(0 , 3));
console.log("Năm xuất bản: ",pulish);
console.log("Số ngẫu nhiên từ 1 đến 1000 : ", Math.ceil(Math.random() *1000));

let bookCode = `${authorName.slice(0, 3) }${pulish}-${Math.ceil(Math.random() *1000)}`;

console.log("Mã sách: ",bookCode);



//tinh toan so lieu
console.log("thoi gian hien tai", new Date());
//lấy ra năm
let year= new Date().getFullYear();
let month= new Date().getMonth()+1;
let day= new Date().getDate();
let hour= new Date().getHours();
let minute= new Date().getMinutes();
console.log("nam hien tai:", year);

//tính toán số liệu
// - Tuổi của sách: Tính xem sách đã xuâts bản được bao nhiêu bản
// (lấy năm hiện toạ là 2026 trừ đi Năm xuất bản).
// - Tổng giá trị nhập kho : Giá tiền X Số lượng .


//Tính tuổi của sách 
let bookAge = year - pulish;
console.log("Tuổi của sách: ", bookAge);

//tính tổng giấ trị
let totalPrice = price * quanlity;
console.log("Tổng giá trị: ", totalPrice);

//in ra phiếu nhập kho
// in ra phieu nhap kho
console.log(`
    --- PHIẾU NHẬP KHO ---

    Mã sách: ${bookCode}

    Tên sách: ${bookName.trim().toUpperCase()}

    Tác giả: ${authorName.toUpperCase()}

    Năm xuất bản: ${pulish}

    Tuổi sách:${bookAge} nam

    Tổng giá trị: ${totalPrice}d

    Ngăn kệ gợi ý: Kệ số ${Math.ceil(Math.random()*10)}    
`);

const work=prompt("tên tác phẩm: ");
const year_worlk= prompt("năm tác phẩm: ");
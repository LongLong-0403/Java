let nameLibarary = prompt("Nhập tên thư viện :");
console.log("Chào mừng bạn đến với thư viện: " + nameLibarary);

let quantityBook = prompt("Nhập số lượng sách:");
quantityBook = Number(quantityBook);
console.log("Số lượng sách là :" + quantityBook)

let oldBook = prompt("Nhập số lượng sách cũ :");
let newBook = prompt("Nhập số lượng sách mới :");
let sumBook = Number(oldBook) + Number(newBook);
console.log("Tổng số lượng sách là:" + sumBook);

let nameBook = prompt("Nhập tên sách:");
let originBook = nameBook;
let nameUpper = nameBook.toUpperCase();
let nameLower = nameBook.toLowerCase();

console.log("Tên gốc :" + originBook);
console.log("Tên viết hoa :" + nameUpper);
console.log("Tên viết thường :" + nameLower); 

let yearBook = prompt("Nhập năm phát hành sách:"); 
yearBook = Number(yearBook); 
let ageBook = 2025 - yearBook ; 
console.log("Tên sách :"+nameBook); 
console.log("Năm xuất bản:"+yearBook); 
console.log("Tuổi của sách là:" + ageBook); 

let oderBook = prompt("Nhập thứ tự sách:"); 
nameBook = nameBook.trim() ; 
nameBook = nameBook.toUpperCase() ; 

let codeBook = "LIB-" + nameBook + " - " + oderBook ;
console.log(codeBook); 
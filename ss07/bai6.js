let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-nê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];
function getShortestPlayerName() {

    let shortestName = "";

    for (let i = 0; i < players.length; i++) {

        let parts = players[i].split("-");
        let name = parts[1];

        if (i === 0) {
            shortestName = name;
        }

        if (name.length < shortestName.length) {
            shortestName = name;
        }
    }

    return shortestName;
}
console.log(getShortestPlayerName());


function countPlayersWithPositionLengthGreaterThan(length) {

    let count = 0;

    for (let i = 0; i < players.length; i++) {

        let parts = players[i].split("-");
        let position = parts[2];

        if (position.length > length) {
            count++;
        }
    }

    return count;
}
let lenght = +prompt("Nhập độ dài"); 
let result = countPlayersWithPositionLengthGreaterThan(lenght); 

console.log("Số lượng tên có độ dài hơn "+lenght+" là:"+result);



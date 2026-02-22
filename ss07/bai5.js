let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-nê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];

function getAllPositions() {

    let positions = [];

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let pos = parts[2];

        if (!positions.includes(pos)) {
            positions.push(pos);
        }
    }

    return positions;
}

console.log(getAllPositions());

function findPlayersWithLongestName() {
    let longestName = "";
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1];
        if (name.length > longestName.length) {
            longestName = name;
        }

    }
    return longestName;
}
console.log(findPlayersWithLongestName());


function countPlayersStartingWithLetter(letter) {

    let count = 0;

    for (let i = 0; i < players.length; i++) {

        let parts = players[i].split("-");
        let name = parts[1];

        let firstChar = name.charAt(0).toLowerCase();
        let inputLetter = letter.toLowerCase();

        if (firstChar === inputLetter) {
            count++;
        }
    }

    return count;
}
let letter = prompt("Nhap tu");
let result = countPlayersStartingWithLetter(letter);
console.log("Số tên bắt đầu bằng " + letter + " là:" + result);




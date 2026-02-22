let players = [];

let n = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));
while (isNaN(n) || n <= 0) {
    n = parseInt(prompt("Nhập lại số nguyên dương:"));
}

for (let i = 0; i < n; i++) {

    let id;
    let duplicate;

    do {
        duplicate = false;
        id = prompt("Nhập mã cầu thủ:");

        for (let j = 0; j < players.length; j++) {
            let parts = players[j].split("-");
            if (parts[0] === id) {
                alert("Mã bị trùng, nhập lại!");
                duplicate = true;
                break;
            }
        }
    } while (!id || duplicate);

    let name = prompt("Nhập tên cầu thủ:");
    while (!name || name.trim() === "") {
        name = prompt("Tên không được để trống, nhập lại:");
    }

    let choice = prompt("1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo");
    while (choice < 1 || choice > 4) {
        choice = prompt("Chọn lại (1-4):");
    }

    let position = "";
    if (choice == 1) position = "Thủ môn";
    else if (choice == 2) position = "Hậu vệ";
    else if (choice == 3) position = "Tiền vệ";
    else position = "Tiền đạo";

    players.push(id + "-" + name + "-" + position);
}

function printTeamRoster() {
    console.log("===== DANH SÁCH ĐỘI BÓNG =====");
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        console.log(
            (i + 1) + ". Mã: " + parts[0] +
            " | Tên: " + parts[1] +
            " | Vị trí: " + parts[2]
        );
    }
}

function pushPlayer(id, name, choice) {

    if (!id || !name) {
        console.log("Thông tin không hợp lệ!");
        return;
    }

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        if (parts[0] === id) {
            console.log("Mã đã tồn tại!");
            return;
        }
    }

    let position = "";
    if (choice == 1) position = "Thủ môn";
    else if (choice == 2) position = "Hậu vệ";
    else if (choice == 3) position = "Tiền vệ";
    else if (choice == 4) position = "Tiền đạo";
    else {
        console.log("Vị trí không hợp lệ!");
        return;
    }

    players.push(id + "-" + name + "-" + position);
    console.log("Đã thêm cầu thủ thành công!");
}

printTeamRoster();

let newId = prompt("Nhập mã cầu thủ muốn thêm:");
let newName = prompt("Nhập tên cầu thủ muốn thêm:");
let newChoice = prompt("1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo");

pushPlayer(newId, newName, newChoice);
printTeamRoster();

let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];
let countTM = 0 , countTĐ = 0 , countTV = 0, countHV = 0 ; 
function printListPlayer(){
    for(let i = 0 ; i<players.length ; i++){
        console.log(players[i]);
        
    }
}
function countPositionPlayers(){
    
    for (let i = 0; i < players.length; i++) {

        let parts = players[i].split("-");
        let position = parts[2];

        if (position === "Thủ môn") {
            countTM++;
        } else if (position === "Hậu vệ") {
            countHV++;
        } else if (position === "Tiền vệ") {
            countTV++;
        } else if (position === "Tiền đạo") {
            countTĐ++;
        }
    }

    console.log(
        "Tiền đạo: " + countTĐ + "\n" +
        "Hậu vệ: " + countHV + "\n" +
        "Tiền vệ: " + countTV + "\n" +
        "Thủ môn: " + countTM
    );
    
}
function hasGoalkeeper() {
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let position = parts[2];

        if (position === "Thủ môn") {
            return true;
        }
    }
    return false;
}
let result = hasGoalkeeper(); 
if(result == true){
    console.log("Có tồn tại thủ môn");
    
}else{
    console.log("Không tồn tại thủ môn");
}

printListPlayer(); 

countPositionPlayers(); 
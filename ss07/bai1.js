let playerIds = [];
let playerPositions = [];

let n = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");

let countThuMon = 0 , countHauVe = 0 , countTienVe = 0 , countTienDao = 0 ; 
for (let i = 0; i < n; i++) {
    let id;
    do {
        id = prompt(`Nhập mã cầu thủ thứ ${i + 1}`);

        if (!id) {
            alert("Không được để trống");
        } else if (playerIds.includes(id)) {
            alert("Mã cầu thủ đã tồn tại");
        }

    } while (!id || playerIds.includes(id));

    playerIds.push(id);
    let namePlayer =+prompt("1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo"); 
    if(namePlayer ==1){
        playerPositions.push("Thủ Môn");
        countThuMon++ ;  
        
    }else if(namePlayer==2){
        playerPositions.push("Hậu Vệ"); 
        countHauVe ++ ; 
         
    }else if(namePlayer==3){
        playerPositions.push("Tiền Vệ"); 
        countTienVe++ ; 
    }else if(namePlayer==4){
        playerPositions.push("Tiền đạo"); 
        countTienDao++ ; 
    }
}
    
let choose  ; 
do{
    choose = +prompt(
            "Nhập vị trí (1: Thủ môn  2: Hậu vệ  3: Tiền vệ  4: Tiền đạo) muốn đếm"
        );

    if(choose<1 || choose>4 ||isNaN(choose)){
        alert("Vị trí không hợp lệ"); 
    }
}while(choose<1 || choose>4 ||isNaN(choose)); 
printListPlayer(); 
if(choose==1){
    console.log("Số lượng thủ môn là:"+countThuMon);
    
}else if(choose ==2){
    console.log("Số lượng hậu vệ là:"+countHauVe); 
}else if(choose ==3){
    console.log("Số lượng tiền vệ là:"+countTienVe); 
}else if(choose==4){
    console.log("Số lượng tiền đạo là:"+countTienDao);
}


function printListPlayer(){
    for(let i = 0 ; i<n ; i++){
        console.log(playerIds[i]+"."+playerPositions[i]);
    }

}

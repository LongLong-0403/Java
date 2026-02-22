let playerIds = ["P001","P002","P003","P004","P005"];
let playerNames = ["Nguyen Van A","Tran Thi B","Le Van C","Pham Van D","Hoang Thi E"];
let playerJerseyNumbers = [10,7,8,9,11]; 

function printPlayer(){
    for(let i = 0 ; i<playerNames.length ; i++){
        console.log(playerIds[i]+"."+playerNames[i]+"-so ao:"+playerJerseyNumbers[i]);
    }
}

printPlayer(); 

function updatePlayer(){
    let codePlayers  = prompt("Enter code player want to update");
    let checkCode = playerIds.indexOf(codePlayers); 
    if(checkCode==-1){
        alert("Khong tim thay cau thu voi ma nay");
    }else{
        playerNames[checkCode] =prompt("Enter New name player"); 
        playerJerseyNumbers[checkCode]=prompt("Enter New jerseyPlayer"); 
        alert("Upate success") ; 
        console.log("New List PLayer");
        printPlayer(); 
    }
}

updatePlayer(); 


//  @_MR_PRANAV____
//  A SIMPLE TODO APP USING JAVA-SCRIPT WOTHOUT USING DOM CONCEPT 


// window.onload = function() {
//     debugger; // This will automatically open the DevTools console
//     console.log("Console opened automatically!");
// };
alert("⚠️ NOTIC: Before Use Please Open The Console Window");
let arr = [];
let req =  prompt("PLEASE ENTER A REQUEST")

while(true){
   
    if(req == "4"){
        console.log("QUITING FROM APP");
        arr = [];
        break;
    }
    
    if (req == "2") {
        console.log("-----------");
        console.log("YOUR TASK :");
        for(let i=0 ; i<=arr.length-1 ;i++){
            console.log(`Task No ${i} : ${arr[i]}`);
        }
        console.log("-----------");
    }
    else if(req == "1"){
        let t = prompt("ENTER A TASK");
        arr.push(t);
        console.log("TASK ADDED");
    }
    else if(req == "3"){
        let del = prompt("ENTER A NUMBER OF TASK YOU WANT TO DELETE");
        arr.splice(del ,1 );
        console.log(`TASK DELETED`)
    }else{
        alert("WRONG INPUT PLEASE TRY AGAIN")
    }
    req =  prompt("PLEASE ENTER A NEXT REQUEST")
}



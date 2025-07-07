let todo = [];
let req = prompt("Enter your requirement");
console.log(req);

while(true)
{ 
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    
    if(req == "list"){
        console.log("--------------------")
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
    }        
        else if(req == "add"){
            console.log("--------------------")
             let task = prompt(" add the task");
            todo.push(task);
            console.log("task added");
        }
         else if (req == "delete"){
         console.log("---------------------------")
         let idx = prompt("Enter the index value to delete the task.")
         todo.splice(idx,1);
         console.log("task deleted")
         }
         req = prompt("Enter your requirement");
    }

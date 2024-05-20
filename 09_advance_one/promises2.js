// function savaToDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){

//         success(data);
//     }
//     else{ 
//        failure();
//     }
// }
// savaToDb("apna college",(data)=>{
//     console.log("your data was saved: ",data)
//     savaToDb("Hello world",(data)=>{
//         console.log("sucess2: your data was saved: ",data)
    
//     },()=>{
//         console.log("failure2: weak connection. data not saved")
    
//     });

// },()=>{
//     console.log("weak connection. data not saved")

// });


function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
    
           setTimeout(()=>{
            resolve(data);
           },5000) 
        }
        else{
           reject("error");
        }

    })

}

let  request = saveToDb("hello")
request.then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})


let allUsers = "https://api.github.com/users/mr-dipak";

async function getAllUser(){
   try {
    const response = await fetch(allUsers);
    const data =await response.json();
    console.log(data);
   } catch (error) {
    console.log(error);
    
   }
    
}

getAllUser();
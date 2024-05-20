const promiseOne = new Promise(function (resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete!');
        resolve();

    },1000)
});

promiseOne.then(function(){
    console.log('Promise consumed')
})


new Promise((resolve,reject)=>{
    setTimeout((e)=>{
        console.log("second task")
        resolve();
    },1000)
}).then(()=>{
    console.log('task is done!');
})

console.log("async is going on!");


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{

    resolve({username: 'dipak', email: 'mr.dipaknrathod@gmail.com'})
    },1000)
});
promiseThree.then((user)=>{
    console.log(user);
});

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username: 'dipak', email: 'mr.dipaknrathod@gmail.com'});
        }
        else{
            reject("ERROR: something went wrong!" )
        }

    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;

}).then((username)=>{
    console.log(username);

})
.catch((error)=>{
    console.log(error)
})
.finally(()=>console.log("The poromise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: 'JavaScript', password:"123"});
        }
        else{
            reject("ERROR:JS something went wrong!" )
        }

    },1000)

    
})

async function consumePromiseFive(){
    try {
    const response = await promiseFive;
    console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();

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

fetch(allUsers)
.then((response)=>{
return response.json();
})
.then((data)=>{
console.log(data);
})
.catch((error)=>{
    console.log(error); 

})


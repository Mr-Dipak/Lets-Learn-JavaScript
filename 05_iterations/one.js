// // for
// const arr = [1,2,3,4,5,6,7,8,9,10];
// const element = [];// reverse array
// for (let i = 0; i < arr.length; i++) {
//     element[i] = arr[arr.length -1 -i];
    
// }

// console.log(element);


// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop value${i}`)
//     for(let j=0; j<10; j++){
//         console.log(`Ineeer loop value ${j} and Outer loop ${i}`)
//     }
    
// }

// // table assignment

// for (let i = 2; i <= 10; i++) {
//     console.log(`\nTable of ${i}\n`)
//     for(let j=1; j<=10; j++){
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
// }


//Break and Continue

// for (let i = 1; i <=20; i++) {
//     if(i ==5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of 'i' is ${i}`);
// }




for (let i = 1; i <=20; i++) {
    if(i ==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of 'i' is ${i}`);
}


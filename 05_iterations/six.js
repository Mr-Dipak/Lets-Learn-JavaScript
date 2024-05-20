// const coding = ['js','ruby','java','python','cpp'];

// const values = coding.forEach( item =>{
//     console.log(item)
// });

// console.log(values)

const myNums=[1,2,3,4,5,6,7,8,9,10];

// ***************Filter***************************

// let newNums = myNums.filter(num=> num > 4);
// console.log(newNums)// Implicit return

let newNums = myNums.filter(num=> {
    return num > 4
});// explicit retrun
console.log(newNums)

// ***************using forEach********************

// const newNumsForEach = [];
// myNums.forEach(element =>{
//     if(element>4)newNumsForEach.push(element);
// });

// console.log(newNumsForEach);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userBooks = books.filter((book)=> book.genre === 'History');

userBooks = books.filter((book)=> {return book.publish >= 1995 && book.genre === 'History'} );

  console.log(userBooks)

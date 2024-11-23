// const arr = [1,2,3,4,5,6];

// // arr.forEach(element=>console.log(element));

// const myNewArr = arr.map(elemnt=>elemnt*2);
// console.log(myNewArr);

// const filteredArr = arr.filter(element=>element%2==0);
// console.log(filteredArr);


// const superHerrosAndTheirNames = {
//     superman: 'Clark Kent',
//     batman: 'Bruce Wayne',
//     spiderman: 'Peter Parker',
//     ironman: 'Tony Stark'   
// };

// const myDcHerros = ['superman', 'batman'];
// for (const herro of myDcHerros) {
//     console.log(herro);
    
// }
// for (const herro in myDcHerros) {
    
//     console.log(herro);
    
// }

// const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby', 'PHP', 'C++', 'Swift', 'Go', 'Kotlin'];

// programmingLanguages.forEach((element,index,arr)=>console.log(element,index,arr));


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
let userBooks = books.filter(book=>book.genre === 'History' && book.publish > 1990);
console.log(userBooks);



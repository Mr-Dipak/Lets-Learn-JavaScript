function practicePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');   
  }, 1000);
  });
}

practicePromise().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});


(function sayHello(){
    setTimeout(() => {
        console.log("1 hello this is promise practice")
    }, 1000);
})();

(function againSayHello(){
    console.log("2 hello this is promise practice")
})();   
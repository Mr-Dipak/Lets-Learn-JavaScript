// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log("Db Connected")
})();// used for avaid the gloabal scope polution


(()=>{
    console.log("db connected two");
})()
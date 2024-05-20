const coding = ['js','ruby','java','python'];

// coding.forEach(function (element){
//     console.log(element)

// })

// coding.forEach(element => {
//     console.log(element)
    
// });

function printMe(element){
    console.log(element)
}

coding.forEach(printMe);//reference passing

coding.forEach((element,index,arr)=>{
    console.log(element,index,arr);
});

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"

    },
    {
        languageName: "java",
        languageFileName: "java"

    },
    {
        languageName: "Python",
        languageFileName: "py"

    },
    {
        languageName: "Python",
        languageFileName: "py"

    },
    {
        languageName: "C++",
        languageFileName: "cpp"

    }
    
]

myCoding.forEach((element)=>{
    const {languageName: firstValue,languageFileName:lastValue} = element;
    const [firstKey,lastKey] = Object.keys(element);
    console.log(`${firstKey} => ${firstValue}\n ${lastKey}=>${lastValue}\n\n`)
})
const myObj = {
    js: "javaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    console.log(`${key} => ${myObj[key]}`);
}


for (const [key, value] of Object.entries(myObj)) {
    console.log(`${key} => ${value}`);
}

const programming = ['js','rb','py',"java","cpp"]

for(const key in programming){
    console.log(programming[key]);
}


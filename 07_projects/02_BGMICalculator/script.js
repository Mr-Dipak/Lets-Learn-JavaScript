const form = document.querySelector('form');

// This usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = (document.querySelector('#results'));
    console.log(height);
    console.log(weight);


    if(height === '' || isNaN(height)  || height === undefined || height <0){
        results.innerHTML = "Please give a valid height";
    }
    else if(weight === '' || isNaN(weight) ||  weight < 0  ){
        results.innerHTML = 'please give a valid weight';


    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)

        if(bmi <18.6){
            
            results.innerHTML = `<span>"${bmi}"sorry your under weight!</span>`
        }
        else if(bmi >=18.6 && bmi <= 24.9){

            results.innerHTML = `<span>"${bmi}" your normal!</span>`
        }
        else{
            results.innerHTML = `<span>"${bmi}" sorry your Overweight!</span>`
        }
    }
});

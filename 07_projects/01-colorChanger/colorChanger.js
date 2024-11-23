const buttons = document.getElementsByClassName('button');
const buttonsArr = Array.from(buttons);

const body = document.querySelector('body');
let color;
buttonsArr.forEach(button=>{
  button.addEventListener('click',(e)=>{

    switch(e.target.id){
    case "grey":
        color = e.target.id;
        break;
    case 'white':
        color = e.target.id;
        break;
    case 'blue':
       color = e.target.id;
       break;
    case 'yellow':
        color = e.target.id;
        break;
    default:
            break;
        
    }
    body.style.backgroundColor = `${color}`;

  })
})


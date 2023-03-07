let input = document.getElementById("inputbox");
let button = document.querySelectorAll("button");
let string = "";
for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', (event) =>{
        if(event.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(event.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(event.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else{
            string += event.target.innerHTML;
            input.value = string;
        }
    });
}
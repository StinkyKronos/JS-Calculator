let display = document.getElementById("display");

function cal(element_id){
    let button = element_id;
    switch (button){
        case "0":
            display.value += "0";
            break;
        case "1":
            display.value += "1";
            break;
        case "2":
            display.value += "2";
            break;
        case "3":
            display.value += "3";
            break;
        case "4":
            display.value += "4";
            break;
        case "5":
            display.value += "5";
            break;
        case "6":
            display.value += "6";
            break;
        case "7":
            display.value += "7";
            break;
        case "8":
            display.value += "8";
            break;
        case "9":
            display.value += "9";
            break;
        case "dot":
            display.value += ".";
            break;
        case "AC":
           display.value = "";
           break;
        case "plus":
           display.value += "+";
           break;
        case "minus":
            display.value += "-";
            break;
        case "multiply":
            display.value += "*";
            break;
        case "divide":
            display.value += "/";
            break;
        case "DEL":
            display.value = display.value.slice(0, -2);

    }
}

function answer(){
    result = eval(display.value);
    if (result == undefined){
        return
    }
    else{
        display.value = result;
    }
}
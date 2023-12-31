function populate_array_random(capacity = 10, max_random = 100) {
    const list = [];
    for (let i = 0; i < capacity; i++) {
        list.push(Math.floor(Math.random() * max_random) +1);
    }
    return list;
}

function get_min(list){
    let min = 100;
    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
    }
    return min;
}

function get_max(list){
    let max = 0;
    for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
            max = list[i];                
        }
    }
    return max;
}

function valid_num(input){
    let val = document.getElementById(input);
    if (val.value === ""){
        document.getElementById(input).style.backgroundColor = "white";
    }
    else{
        if (isNaN(val.value)){
            document.getElementById(input).style.backgroundColor = "red";
        }
        else{
            document.getElementById(input).style.backgroundColor = "lightgreen";
            }
    }
    }

function get_bigger(num1, num2){
    num1 = parseInt(document.getElementById(num1).value);
    num2 = parseInt(document.getElementById(num2).value);
    alert(num1 === "" || num2 === "" ? "ERROR: missing value" : num1 == num2 ? "numbers are equal" : num1 > num2 ? `${num1} is bigger` : `${num2} is bigger`)
}

function are_equal(num1, num2){
    num1 = parseInt(document.getElementById(num1).value);
    num2 = parseInt(document.getElementById(num2).value);
    alert(num1 === num2 ? `Numbers are equal. The output is ${num1 + 1}` : `Numbers ${num1} and ${num2} are not equal`)
}

function pop_inpt(capacity = 4, ex = 3){
    const list = [];
    for (let index = 0; index < capacity; index++) {
        element = `param${ex}.${index+1}`
        list[index] = parseInt(document.getElementById(element).value);
    }
    return list;
}

function get_lowest(){
    const list = pop_inpt(4, 3);
    let flag = 0;
    let smallest = list[0];
    console.log(list)
    for (let i = 0; i < list.length; i ++){
        if (list[i] >= 1 && list[i] <= 5) {flag = 1};
        if (list[i] < smallest) {smallest = list[i]};
        console.log(i, list[i], smallest, flag)
    }
    alert(flag === 0 ? `The smallest number is ${smallest}` : `There's a number between 1-5, therefore the output is -1`);
}

function reset (ex){
    for (let index = 0; index < 4; index++) {
        element = `param${ex}.${index + 1}`
        document.getElementById(element).value = "";
        document.getElementById(element).style.backgroundColor = "white";
    }
}

function is_even(){
    let x = parseInt(document.getElementById("param4").value);
    alert(x % 2 === 0 ? `${x} is even` : `${x} is odd`)
}

function are_equal2(){
    const list = pop_inpt(4, 5);
    let flag = 0;
    if ( list[0] === list[1] && list[1] === list[2] && list[2] === list[3]) {
        alert ("All numbers are equal");
    }
    else{
        for (let index = 0; index < list.length; index ++) {
            if (flag ===1) {break;}
            for (i = index + 1; i < list.length; i ++){
                if (list[i] === list[index]){
                    flag = 1;
                    break;
                }
            }
        }
        alert(flag === 1 ? "There is a pair of equal numbers" : "Every number is unique");
    }
}

function is_weekday(input,) {
    let day = document.getElementById(input);
    let result;
    console.log(typeof(day.value))
    if (day.value === ""){
        document.getElementById(input).style.backgroundColor = "white";
    }
    else{
        if (day.value > 0 && day.value < 8){
            document.getElementById(input).style.backgroundColor = "lightgreen";
            switch (parseInt(day.value)){
                case 1: result = "Sunday";
                break;
                case 2: result = "Monday";
                break;
                case 3: result = "Tuesday";
                break;
                case 4: result = "Wednday";
                break;
                case 5: result = "Thursday";
                break;
                case 6: result = "Friday";
                break;
                case 7: result = "Saturday";
                break;
                default: result = "ERROR";
            }
            document.getElementById("ex6").innerHTML += `<td>${result}</td>`
        }
        else{
            document.getElementById(input).style.backgroundColor = "red";
            }
    }
}
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function which_month(num){
    let input = document.getElementById(num).value;
    alert(`Your month has ${months[(input-1)]}`);
}

//same as above with local variables:

/*function which_month(num){
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let input = document.getElementById(num).value;
    alert(`Your month has ${months[(input-1)]}`);
}*/


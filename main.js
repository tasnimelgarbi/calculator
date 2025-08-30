let one=document.getElementById("one");
let two=document.getElementById("two"); 
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
let zero=document.getElementById("zero");
let clear=document.getElementById("clear");
let deletebtn=document.getElementById("delete");
let add=document.getElementById("add");
let equal=document.getElementById("equal");
let divison=document.getElementById("divison");
let multiply=document.getElementById("multiply");
let sub=document.getElementById("sub");
let dotte=document.getElementById("dotte");
let money=document.getElementById("money");
let inputt=document.getElementById("inputt");
let convert=document.getElementById("convertnum");
let precent=document.getElementById("precent");

one.addEventListener("click",function(){
            if (inputt.value.includes("$")) {
        return; 
    }
    inputt.value+=1;
    AC();
    
});
two.addEventListener("click",function(){
            if (inputt.value.includes("$")) {
        return; 
    }
    inputt.value+=2;
    AC();
    
});
three.addEventListener("click",function(){
            if (inputt.value.includes("$")) {
        return; 
    }
    inputt.value+=3;
    AC();
    
});
four.addEventListener("click",function(){
            if (inputt.value.includes("$")) {
        return; 
    }
    inputt.value+=4;
    AC();
});
five.addEventListener("click",function(){
            if (inputt.value.includes("$")) {
        return; 
    }
    inputt.value+=5;
    AC();
});
six.addEventListener("click",function(){
            if (inputt.value.includes("$")) {
        return; 
    }
    inputt.value+=6;
    AC();
});
seven.addEventListener("click",function(){
            if (inputt.value.includes("$")) {
        return; 
    }
    inputt.value+=7;
    AC();
});
eight.addEventListener("click",function(){
            if (inputt.value.includes("$")) {
        return; 
    }
    inputt.value+=8;
    AC();
});
nine.addEventListener("click",function(){
            if (inputt.value.includes("$")) {
        return; 
    }
    inputt.value+=9;
    AC();
});

zero.addEventListener("click", function () {
            if (inputt.value.includes("$")) {
        return; 
    }
    if (inputt.value === "" || inputt.value === "0") {
        inputt.value = "0"; 
    } else {
        inputt.value += "0";
    }
    AC();
});

clear.addEventListener("mousedown",function(){
    inputt.value="";
    AC();
});

let deleteTimer;

deletebtn.addEventListener("mousedown", function () {
    
    deleteTimer = setTimeout(function () {
        inputt.value = "";
        AC();
    }, 500);
});

deletebtn.addEventListener("click", function () {
    
    clearTimeout(deleteTimer);
    if (inputt.value !== "") {
        inputt.value = inputt.value.slice(0, -1);
        AC();
    }
});



add.addEventListener("click",function(){
    operator("+")
    AC();
});

sub.addEventListener("click",function(){
    
    operator("-")
    AC();
});

multiply.addEventListener("click",function(){
    operator("*")
    AC();
});

divison.addEventListener("click",function(){
    operator("/")
    AC();
});

dotte.addEventListener("click",function(){
          if (inputt.value.includes("$")) {
        return; 
    }
    if (
    inputt.value === "" ||             
    inputt.value.endsWith("+") ||       
    inputt.value.endsWith("-") ||      
    inputt.value.endsWith("*") ||
    inputt.value.endsWith("/")
) {
    inputt.value += "0."; 
} 
else {
    let parts = inputt.value.split(/[\+\-\*\/]/);
    let lastNumber = parts[parts.length - 1];
    if (!lastNumber.includes(".")) {
        inputt.value += ".";
    }
}   AC();
});

equal.addEventListener("click",function(){
    if(inputt.value === ""){
        inputt.value = "";
    }else{
    inputt.value=eval(inputt.value);
    AC();
}});

precent.addEventListener("click", function () {
    if (inputt.value.includes("$")) {
        return; 
    }

    let val = parseFloat(inputt.value);

    if (isNaN(val)) {
        return;
    }

    inputt.value = val / 100;
    AC();
});


convert.addEventListener("click",function(){
            if (inputt.value.includes("$")) {
        return; 
    }
    if(inputt.value != "" && inputt.value != "0" ){
        if(inputt.value.charAt(0) === "-"){
        inputt.value = inputt.value.slice(1);
    } else {
        inputt.value = "-" + inputt.value;
    }

    }
    
    AC();
});

money.addEventListener("click",function(){;
    if(inputt.value === "" || isNaN(inputt.value)){
        inputt.value = "";
        AC();
        return;
    }else{
        inputt.value=eval(inputt.value / 50)+"$";
        AC();
    }
    
});

inputt.addEventListener("input", function () {
    if (inputt.value.includes("$")) {
        inputt.value = ""; 
    }
});

function AC() {
    if (inputt.value != "") {
        clear.style.display = "none";   
        deletebtn.style.display = "inline-block"; 
    } else {
        deletebtn.style.display = "none"; 
        clear.style.display = "inline-block";
    }
}


function operator(op) {
    if (inputt.value === "") {
        if (op === "-") {
            inputt.value = "-"; 
        }
        return; 
    }
    if(inputt.value === "-"){
        return
    }         

    let lastChar = inputt.value.slice(-1);
    
        if (inputt.value.includes("$")) {
        return; 
    }


    if (!["+", "-", "*", "/"].includes(lastChar)) {
        inputt.value += op;
    } else {
        if ((lastChar === "*" || lastChar === "/") && op === "-") {
            inputt.value += op; 
        } else {
            inputt.value = inputt.value.slice(0, -1) + op;
        }
    }
}




let fname = "";

function greet(){
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;

greetParagraph.innerHTML = "Greetings, " + fname + "!";
}

function question1(){
    let triviaAnswer = document.getElementById("trivia1-answer");

    let oneSelected = document.getElementById("3076").checked;

    let twoSelected = document.getElementById("5391").checked;

    let threeSelected = document.getElementById("2201").checked;

    
    if(oneSelected) {
        triviaAnswer.innerHTML =fname + ", you are wrong."
    }
    else if (twoSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong."

    }
    else if (threeSelected){
        triviaAnswer.innerHTML = fname + ", you are correct!"
    }

}

function hours(){
    let triviaAnswer = document.getElementById("hours");

    
    let nineSelected = document.getElementById("nine").checked;
    let tenSelected = document.getElementById("ten").checked;
    let eightSelected = document.getElementById("eight").checked;

    if(nineSelected) {
        triviaAnswer.innerHTML =fname + ", you are wrong."
    }
    else if (eightSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong."

    }
    else if (tenSelected){
        triviaAnswer.innerHTML = fname + ", you are correct!"
    }

}

function home(){
    let triviaAnswer = document.getElementById("home");

    let yesSelected = document.getElementById("yes").checked;
    let noSelected = document.getElementById("no").checked;


  
    if(yesSelected) {
        triviaAnswer.innerHTML =fname + ", you are correct. We do have home items, look on the home item page to see what we have."
    }
    else if (noSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. We do have home items, look on the home item page to see what we have."

    }
    
    

}


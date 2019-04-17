
function greetings(name) {
    return "Welcome " + name
}
console.log(greetings("Matt"));
function oddEven(num) {
    if(num % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}
console.log(oddEven(9));
console.log(oddEven(5));
function tripple(num) {
    return num*3
}
console.log(tripple(5));
console.log(tripple(3));
function divBy(a,b) {
    if (a%b===0) {
        return a + " is evenly divisable by "+ b
    } else {
        return a + " is not evenly divisible by " + b
    }
}
console.log(divBy(10,5));
console.log(divBy(10,7));
function that takes 2 number arguments
function greaterNum(num1,num2) {
    if(num1>num2) {
        return num1
    } else if (num2>num1) {
        return num2
    } else {
        return "Both are same"
    }
}
    console.log(greaterNum(2,2));
    console.log(greaterNum(5,8));
create a function named helloWorld that takes one arguments
function helloWorld(language){
    // Translate that to appropriate language
    if (language==="en") {
        return "Hello World"
    }else if(language==="es") {
        return "Hola Mundo"
    }else if (language==="de") {
        return "Hallo Wereld";
    }else {
        return "I dont understand"
    }
}
console.log(helloWorld("en"));
console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("hh"));


function assignGrade(score) {
    if(score <= 100 && score > 89) {
        return 'A'
    } else if (score < 90 && score > 79) {
        return 'B'
    } else if (score < 80 && score > 69) {
        return 'C'
    } else if (score < 70 && score > 59) {
        return 'D'
    } else if (score < 60) {
        return 'You Fail!'
    } else {
        return 'You Cheated!'
    }
}

console.log(assignGrade(92));
console.log(assignGrade(82));
console.log(assignGrade(72));
console.log(assignGrade(62));
console.log(assignGrade(52));
console.log(assignGrade(102));
function pluralize(num,noun) {
    if(noun==="sheep") {
        return num+ " " + noun
    } else if (noun==="goose" && num>1) {
        return num+ " " + "geese"
    } else if (noun==="child"&& num>1) {
        return num+ " children"

    } else if (num>1 && noun==='person') {
        return num+ ' people'

    } else if (num>1) {
        return num +" " + noun +"s"
    } else if (num===1) {
        return num+ " " + noun

    }


}
console.log(pluralize(2,"child"));
console.log(pluralize(2,"goose"));
console.log(pluralize(2,"person"));

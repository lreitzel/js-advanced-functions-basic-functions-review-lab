// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork()

const wrapAdjective = function(flair="*") {
    return function(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}
wrapAdjective()

const Calculator = {
    add: function (a, b){
        return a + b
    },
    subtract: function (a, b){
        return a - b
    },
    multiply: function (a, b){
        return a * b
    },
    divide: function (a, b){
        return a / b
    }
}

const actionApplyer = function(start, arr) {
    for (let i = 0; i < arr.length; i++ ){
        start = arr[i](start)
    }
    return start
}

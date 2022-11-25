// code your solution here
function saturdayFun(action = "roller-skate"){
    return `This Saturday, I want to ${action}!`
}
console.log(saturdayFun());

function mondayWork(action ="go to the office"){
    return `This Monday, I will ${action}.`
}
console.log(mondayWork());

function wrapAdjective(symbol){
    return function wrapper(adj)
    {
    return `You are ${symbol}${adj}${symbol}!`
    }
}
console.log (wrapAdjective('||'));
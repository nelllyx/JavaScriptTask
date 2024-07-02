let examGrades = [85,92,78,88,95]

let result = examGrades.map(increaseScore)

function increaseScore(data){
    return data + 5
}

console.log(result)

let numbers = [2,4,6,8,10]

let jackResult = numbers.map(squareNumbers)


function squareNumbers(data) {
    return data * data
}
console.log(jackResult)

let members = ["Emily", "Jack", "Sophia", "Daniel"]

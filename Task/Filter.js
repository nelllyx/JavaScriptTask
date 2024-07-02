let studentScores = [20,45,56,73,90,49,69,100,108,80]

let numbers = studentScores.filter(testScores)

function testScores(data){
    return data >= 70
}

console.log(numbers)

// Task 1
let userMass = []
for (let a = 10; a <= 20; a++) {
    userMass.push(a)
    
}
let i = userMass.join(', ')
console.log('Task 1: ==> ', i)

// Task 2
let userMass2 = []
for (let a2 = 10; a2 <= 20; a2++) {
    b2 = a2**2
    userMass2.push(b2)
    
}
let i2 = userMass2.join(', ')
console.log('Task 2: ==> ', i2)

// Task 3
console.log('Task 3:')
const numberSeven = 7
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${numberSeven} =`, i * numberSeven)
}

// Task 4
let sumNumber = 0
for (let integerNumber = 1; integerNumber <= 15; integerNumber++){
    sumNumber += integerNumber
}
console.log('Task 4: ==> ', sumNumber)

// Task 5
let multiplicationNumber = 1
for (let intNumber = 15; intNumber <= 35; intNumber++){
    multiplicationNumber *= intNumber
}
console.log('Task 5: ==> ', multiplicationNumber)

// Task 6
let summNumber = 0
let indexNumber = 0
let arithmeticMean = 0
for (let startingNumber = 1; startingNumber <= 500; startingNumber++){
    indexNumber++
    arithmeticMean = (summNumber += startingNumber) / indexNumber
}
console.log('Task 6: ==> ', arithmeticMean)

// Task 7
let userIntNumber = 0
let evenNumber = 30
while (evenNumber <=80){
    if (evenNumber % 2 === 0) {
        userIntNumber += evenNumber
        evenNumber++
    }
    else {
        evenNumber++
    }
}
console.log('Task 7: ==> ', userIntNumber)

// Task 8
let numberMultipleOf3 = []
for (let initialNumber = 100; initialNumber <= 200; initialNumber++){
    if (initialNumber % 3 === 0){
        numberMultipleOf3.push(initialNumber)
    }
    else {
        initialNumber++
    }
}
console.log('Task 8: ==> ', numberMultipleOf3.join(', '))

// Task 9
let massNaturalNumber = []
let naturalNumber = prompt('Введіть натуральне число: ')
for (let initialNaturalNumber = 1; initialNaturalNumber <= naturalNumber; initialNaturalNumber++){
    if (naturalNumber % initialNaturalNumber === 0){
        massNaturalNumber.push(initialNaturalNumber)
    }
}
console.log(`Task 9 ==>  Ви ввели натуральне число ${naturalNumber}, його дільники:`, massNaturalNumber.join(', '))

// Task 10
let numberOfDivisors = 0  // let naturalNumber беремо з попередньої задачі
for (let initialNaturalNumber = 1; initialNaturalNumber <= naturalNumber; initialNaturalNumber++){
    if (naturalNumber % initialNaturalNumber === 0 && initialNaturalNumber % 2 === 0){
        numberOfDivisors++
    }
}
if (numberOfDivisors > 0) {
    console.log(`Task 10 ==>  Ви ввели натуральне число ${naturalNumber}, воно має: ${numberOfDivisors} парних дільників`)
}
else{
    console.log(`Task 10 ==> Ви ввели натуральне число ${naturalNumber}. Парних дільників немає`)
}

// Task 11
 let sumOfEvenDivisors = 0 // let naturalNumber беремо з Task 9
for (let initNumber = 1; initNumber <= naturalNumber; initNumber++){
    if (naturalNumber % initNumber === 0 && initNumber % 2 === 0){
        sumOfEvenDivisors += initNumber
    }
}
if (sumOfEvenDivisors > 0){
    console.log(`Task 11 ==>  Ви ввели натуральне число ${naturalNumber}, сума його парних дільників: ${sumOfEvenDivisors}`)
}
else {
    console.log(`Task 11 ==> Ви ввели натуральне число ${naturalNumber}. Парних дільників немає`)
}

// Task 12
console.log('Task 12:')
for (let x = 1; x <= 10; x++){
    for (y = 1; y <= 10; y++){
        console.log(`${x} * ${y} = ${x * y}`)
    }
}
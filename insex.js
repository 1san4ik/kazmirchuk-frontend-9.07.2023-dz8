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

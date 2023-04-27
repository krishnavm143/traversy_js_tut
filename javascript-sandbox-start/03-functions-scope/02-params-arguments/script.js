// default parama
function registeredUser(user = 'kitty') {
    return user + ' is registered'
}

console.log(registeredUser())


// rest params

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num
    }

    return total
}

console.log(sum(1, 2, 34, 55, 66))


// Objects as params

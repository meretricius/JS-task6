const arr = [
    {
        name: "sarah",
        age: 21,
        isMarried: true
    },

    {
        name: "adam",
        age: 16,
        isMarried: false
    },

    {
        name: "sam",
        age: 34,
        isMarried: true
    },

    {
        name: "aaron",
        age: 19,
        isMarried: false
    },

    {
        name: "shawn",
        age: 41,
        isMarried: true
    },

]

let married = arr.filter(person => person.isMarried === true);
let single = arr.filter(person => person.isMarried !== true);

console.log('married',married);
console.log('single',single);

let averageAge = 0
arr.forEach(person => {
    averageAge += person.age
})
averageAge = averageAge / arr.length
console.log(averageAge);

// if(arr.isMarried === true) {
// married.push(arr)
// } else {
//     single.push(arr)
// }
// console.log(married);
// console.log(single);
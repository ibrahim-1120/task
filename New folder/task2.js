let arr = [1, 2, 3, 6, 7, 9, 3, 56, 8]

let dividenumber = arr.filter(divide)


function divide(value) {
    return value % 2 == 0
}
console.log("🚀 ~ dividenumber:", dividenumber)

// give all value above 3 by use of filter

const number3 = arr.filter(function (number) {
    return number > 3;
})
console.log("🚀 ~ number3 ~ number3:", number3)

// give index of 56

// let index = arr.indexOf(56)
// console.log("🚀 ~ arr:", arr)

// task 3
// ['i','am', 'urvish'] ==> want ['urvish','am','i']
//  by use of map and loop

let a = ["I", "am", "Ibrahim"]

let ans = a.reverse()
console.log("🚀 ~ ans:", ans)

let re = a.reverse()
for (let i = 0; i < re.length; i++) {
    console.log("🚀 ~ re:", re)
}

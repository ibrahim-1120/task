
let arr1 = [1, 2, 100, 4, 5, 6, 7, 8, 9, 10, 11]
console.log("  arr:", arr1)
// console.log(" ~ arr:", arr.length)


//  print 9th and 10th index of array
console.log("The 9Th array is = ", arr1[9])
console.log("The 10 Th array is =", arr1[10])



// change a value of 6th index with 100
arr1[6] = 100
console.log("change a value of 6th index with 100:", arr1)


// print a array till element value not grater then 100



// add 1 in every element of an array and give new array

let number = [1, 2, 3, 4, 5,]

let newnumber = number.map(number => number + 1);
console.log(" newnumber:", newnumber)


// add 0 in start of array

arr1.unshift(0);
console.log(" add 0 in start of array:", arr1)

// add 99 in end of array

arr1.push(99)
console.log("add 99 in end of array:", arr1)

// remove 1 element from start of array

arr1.shift()
console.log(" aremove 1 element from start of arrayrr1:", arr1)

//  remove 1 element from end of array

arr1.pop()
console.log(" remove 1 element from end of array:", arr1)

// do sum of all value of an array with use of map, reduce and for-loop

// for loop

let arr3 = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
    console.log("sum of number using for loop", sum)
}

// reduce

let result = arr3.reduce((prev, number) => {
    return prev + number;
}, 0);
console.log(" sum of number using reduce", result)

// map

// sort a array in acending decending

// acending
let sort = [5, 6, 4, 9, 0, 1,]
sort.sort()
console.log("acending", sort)

// decending 

let arrdecing = sort.sort(function (a, b) {
    return b - a
});
console.log("decending", arrdecing)

// reverse an array with use of method [1,2,3] => [3,2,1]

let rev = [1, 2, 3, 4, 5]
rev.reverse()
console.log("reverse of an array", rev)

//  reverse an array with use of for-loop

for (let i = rev.length - 1;
    i >= 0; i--) {
}
console.log("reverse using for loop:", rev)












// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)// it will add 6 at the end of this array

// myArr.push(7)
// myArr.pop() it will remove last value of the array

//myArr.unshift(9);// add the number 9 at starting of the array
//myArr.shift()//it will remove the first element of the array



// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()// it will change the array into string

// console.log(myArr);
// console.log( newArr);

// slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//will return the element from 1 to 3 but not change the original elelment
//it will not include 3
//console.log(myn1);
//console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)//remove the the element from 1 to 3 return the removed array
//it will change the array
//console.log("C ", myArr);
//console.log(myn2);

const marval_heros=["thor","Ironman","Siderman"]
const dc=["superman","flash","batman"]

//marval_heros.push(dc)//this will add dc into marval 

const alheros =marval_heros.concat(dc)// this makes new array which has both the array
//console.log(marval_heros);
// console.log(alheros);

const allnewhero=[...marval_heros,...dc]

console.log(allnewhero);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherarray=anotherarray.flat(Infinity)

console.log(realanotherarray);

console.log(Array.isArray("Avinash"));
console.log(Array.from("Avinash"));
console.log(Array.from({name:"hitesh"}));//interesting

score1=100
score2=200
score3=300

console.log(Array.of(score1,score2,score3));















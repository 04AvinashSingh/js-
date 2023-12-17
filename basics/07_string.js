const name="avinash"

const repocount=50

console.log(name+repocount+"value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename=new String('harsh-dot-com')

// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('o'));
const newString=gamename.substring(0,4)
console.log(newString);
const anotherString = gamename.slice(1,-1)
console.log(anotherString);

const newStringOne = "  harsh    "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('sunder'));//it will check for sunder in the url
console.log(gamename.split('-'));



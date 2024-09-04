const name = "lalit hire"
const repoCount= 20

console.log(`hello guys my name is ${name} and my repo count is ${repoCount}`)

let newName = new String('MR-LALIT-HIRE')
//console.log(newName);
//console.log(newName.__proto__);
//console.log(newName.toLowerCase());
//console.log(newName.split('-'));
console.log(newName.slice(0,7));
console.log(newName.trim())
console.log(newName.charAt(3));
console.log(newName.indexOf('T'))



const name1 = "lalit"
const repoCount1 = 20

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('lalit-lh-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   lalithire    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://lalit.com/lalit%20hire"

console.log(url.replace('%20', '-'))

console.log(url.includes('lalit'))

console.log(gameName.split('-'));
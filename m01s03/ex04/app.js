var myArray = [1, 2, 3, 4, 5, 6];

console.warn(`
Afiseaza numarul de pe pozitia 5 a arrayului.
`);
console.log(myArray[5].toString());

console.warn(`
Afiseaza numarul 3 din array.
`);
console.log(myArray[2].toString());

console.warn(`
Afiseaza lungimea arrayului.
`);
console.log(myArray.length);

console.warn(`Afiseaza suma numerelor de pe pozitia 0 si 4.`);
console.log(myArray[0] + myArray[4].toString());

console.warn(`
afiseaza pozitia 1.
`);
console.log(myArray[1].toString());

console.warn(`
  Afiseaza numarul de pe pozitia 2 a arrayului.
`);
console.log(myArray[1].toString());

console.log(myArray[3].toString());

console.log((myArray.length - myArray[5]).toString());

console.log((myArray[1] + myArray[3]).toString());

console.log((myArray[0] * myArray[5]).toString());

console.log(myArray[3] - myArray[4]);

console.log(Math.pow(myArray[5], myArray[3]));

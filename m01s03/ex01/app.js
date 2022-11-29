var object = {
  name: 'Andrei',
  surname: 'Moraru',
  age: 26,
  petOwner: false,
};

console.warn(`
Folosind codul din index.html, introdu datele tale si afiseaza in consola numele mic si varsta
`);

console.log(object.name);
console.log(object.age.toString());

console.warn(`
Afiseaza fraza “Ma numesc xxx yyy si am xx ani.” in consola folosind operatorul de concatenare
`);

console.log(
  'Ma numesc ' +
    object.name +
    '' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.warn(`
Afiseaza anul in care te-ai nascut
scazand varsta pe care ai trecut-o in obicet din anul
curent (un proces numit hardcodare)
`);

console.log((2022 - object.age).toString());

console.warn(`
Afiseaza fraza “xxx yyy are xx ani.”
in consola folosind operatorul de concatenare
`);
console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.warn(`
Afiseaza fraza “xxx s-a nascut in aaaa.”
Foloseste tot anul curent pentru a scadea varsta.
`);
console.log(
  object.name +
    ' s-a nascut in ' +
    (year.getFullYear() - object.age).toString() +
    '.',
);

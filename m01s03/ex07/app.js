var person = {
  firstName: 'Tyke',
  lastName: 'Mikeson',
  email: 'tykemikeson@yahoo.com',
  birthYear: 1966,
  pets: [
    {
      name: 'Thing',
      species: 'bee',
      age: 30,
    },
    {
      name: 'Rex',
      species: 'dog',
      age: 2,
    },
    {
      name: 'Thief',
      species: 'racoon',
      age: 13,
    },
  ],
  zipCode: '000000',
};

console.warn(`
  Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”
`);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`
“Am acelasi email din copilarie: xxx.”
`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(`
  “Unul din cele x animale ale mele este species si are age ani.”
`);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.log((2023 - person.pets[0].age).toString());

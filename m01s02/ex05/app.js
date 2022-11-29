console.log('Imi fac tema la JavaScript.');

var body = document.querySelector('body');
var h1 = document.querySelector('h1');
var btn = document.querySelector('.click');
var btn2 = document.querySelector('.click2');
var btn3 = document.querySelector('.click3');

body.onload = (e) => {
  alert('Bine ai venit!');

  console.log(prompt('Bine ai venit, cum te cheama?'));
};

h1.addEventListener('click', (e) => {
  e.preventDefault();

  alert('Mircea');
});

btn.addEventListener('click', (e) => {
  e.preventDefault();

  console.log('Am fost apasat!');
});

btn2.addEventListener('click', (e) => {
  e.preventDefault();

  alert('Butonul a fost apasat!');
});

btn3.addEventListener('mouseover', (e) => {
  e.preventDefault();

  console.log('Ai vrea sa apesi acest buton?');
});

btn3.addEventListener('click', (e) => {
  e.preventDefault();

  console.log(prompt('Introdu-ti numele, te rog!'));
});

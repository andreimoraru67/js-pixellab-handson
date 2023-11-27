const image = document.querySelector('.image');

console.log(image.complete);

const log = (message = '', cssClass = 'log') => {
  let p = document.querySelector(`.${cssClass}`);

  if (p === null) {
    p = document.createElement('p');
    p.classList.add(cssClass);
    document.body.prepend(p);
  }

  p.innerText = message;
};

log('Imaginea se incarca...');

image.onload = () => {
  log('Imaginea s-a incarcat');

  const button = document.createElement('button');
  button.innerText = 'Click';
  document.body.prepend(button);

  const imageURL = document.querySelector('.image').src;

  button.addEventListener('click', () => {
    alert(`Imaginea cu URLul: ${imageURL} s-a incarcat.`);
  });
};

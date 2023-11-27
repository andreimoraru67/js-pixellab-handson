const controls = document.querySelector('.controls');
const box = document.querySelector('.box');
const colorInput = document.querySelector('.controls .color');

controls.addEventListener('click', (event) => {
  const target = event.target;
  const color = target.dataset.color;

  if (target.nodeName !== 'BUTTON' || color === undefined) {
    return;
  }

  const checkedInput = document.querySelector('.box-container input:checked');

  const box = checkedInput.parentElement;

  box.style.backgroundColor = color;
});

colorInput.addEventListener('change', (event) => {
  const colorInput = event.currentTarget;
  const color = colorInput.value;

  if (color.trim().length < 3) {
    return;
  }

  const rainbowButton = colorInput.nextElementSibling;
  rainbowButton.setAttribute('style', `background-color: ${color}`);
  rainbowButton.dataset.color = color;
});

colorInput.addEventListener('keydown', (event) => {
  const colorInput = event.currentTarget;
  const color = colorInput.value;

  if (color.trim().length < 3 || event.code !== 'Enter') {
    return;
  }

  const rainbowButton = colorInput.nextElementSibling;
  rainbowButton.setAttribute('style', `background-color: ${color}`);
  rainbowButton.dataset.color = color;
});

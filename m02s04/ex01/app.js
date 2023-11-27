const box = document.querySelector('.box');
const controlButton = document.querySelector('.control');
const darkThemeButton = document.querySelector('.dark');
const animationClass = 'animate-class';

controlButton.addEventListener('click', (event) => {
  const controlButton = event.currentTarget;
  const cssClass = box.classList;
  const colorClass = cssClass.contains(animationClass);

  cssClass.toggle(animationClass);

  const buttonText = colorClass ? 'Aplica' : 'Elimina';
  controlButton.innerText = buttonText;
});

darkThemeButton.addEventListener('click', () => {
  box.setAttribute('style', 'background-color: #000');
});

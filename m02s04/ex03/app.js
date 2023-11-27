const heroElement = document.querySelector('.hero');
const controls = document.querySelector('.controls');
const stage = document.querySelector('.stage');
const step = 30;
const heroData = {
  x: 0,
  y: 0,
  width: heroElement.clientWidth,
  height: heroElement.clientHeight,
};

const axisMap = {
  N: { y: -1 },
  NE: { x: 1, y: -1 },
  E: { x: 1 },
  SE: { x: 1, y: 1 },
  S: { y: 1 },
  SW: { x: -1, y: 1 },
  W: { x: -1 },
  NW: { x: -1, y: -1 },
};

const keysMap = {
  ArrowUp: axisMap.N,
  ArrowRight: axisMap.E,
  ArrowDown: axisMap.S,
  ArrowLeft: axisMap.W,
};

controls.addEventListener('click', (event) => {
  const target = event.target;
  const direction = target.dataset.direction;

  if (target.nodeName !== 'BUTTON' || direction.length <= 0) {
    return;
  }

  const axisDirection = axisMap[direction];

  updateHeroData(axisDirection);
  renderHero();
});

document.addEventListener('keydown', (event) => {
  const keyCode = event.code;
  const axisDirection = keysMap[keyCode];

  if (!axisDirection) {
    return;
  }

  updateHeroData(axisDirection);
  renderHero();
});

function updateHeroData(axisDirection) {
  const axes = Object.keys(axisDirection);

  axes.forEach((axis) => {
    heroData[axis] = heroData[axis] + step * axisDirection[axis];
  });

  if (heroData.x <= 0) {
    heroData.x = 0;
  }

  if (heroData.y <= 0) {
    heroData.y = 0;
  }

  if (heroData.x >= stage.clientWidth - heroData.width) {
    heroData.x = stage.clientWidth - heroData.width;
  }

  if (heroData.y >= stage.clientHeight - heroData.height) {
    heroData.y = stage.clientHeight - heroData.height;
  }
}

function renderHero() {
  const cssText = `transform: translate(${heroData.x}px, ${heroData.y}px)`;
  heroElement.setAttribute('style', cssText);
}

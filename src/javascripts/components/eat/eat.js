import './eat.scss';

import util from '../../helpers/utilities';

const eatTomQuad = () => {
  let eatString = '<h1>Eat</h1>';
  let full = 100;
  eatString += `<button id="vegetable" type="button">Vegetable</button> <button id="doughnut" type="button">Doughnut</button> <p><progress value="${full}" max="100" id="eatAmt"></progress></p>`;
  util.printToDom('eat', eatString);
  const vegetableBtn = document.getElementById('vegetable');
  const doughnutBtn = document.getElementById('doughnut');

  vegetableBtn.addEventListener('click', () => {
    if (full + 10 <= 110) {
      full += 10;
      document.getElementById('eatAmt').value = full;
    }
  });
  doughnutBtn.addEventListener('click', () => {
    if (full - 3 >= 0) {
      full -= 3;
      document.getElementById('eatAmt').value = full;
    }
  });
};

export default { eatTomQuad };

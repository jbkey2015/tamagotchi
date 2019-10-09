import './sleep.scss';

import util from '../../helpers/utilities';

const sleepTomQuad = () => {
  let sleepString = '<h1>Sleep</h1>';
  let energy = 50;
  sleepString += `<button id="nap" type="button">Nap</button> <button id="slumber" type="button">Slumber</button> <p><progress value="${energy}" max="100" id="sleepAmt"></progress></p>`;
  util.printToDom('sleep', sleepString);
  const napBtn = document.getElementById('nap');
  const slumberBtn = document.getElementById('slumber');

  napBtn.addEventListener('click', () => {
    if (energy + 50 < 130) {
      energy += 50;
      document.getElementById('sleepAmt').value = energy;
    }
  });
  slumberBtn.addEventListener('click', () => {
    if (energy + 60 < 130) {
      energy += 60;
      document.getElementById('sleepAmt').value = energy;
    }
  });
};

export default { sleepTomQuad };

import './fight.scss';

import util from '../../helpers/utilities';

const fightTomQuad = () => {
  let fightString = '<h1>Fight</h1>';
  let strength = 100;
  fightString += `
  <button id="runbrave" type="button">Run Brave</button> <button id="violence" type="button">Violence</button> <p><progress value="${strength}" max="100" id="fightAmt"></progress></p>
  `;
  util.printToDom('fight', fightString);
  const runBraveBtn = document.getElementById('runbrave');
  const violenceBtn = document.getElementById('violence');

  runBraveBtn.addEventListener('click', () => {
    if (strength + 1 <= 110) {
      strength += 1;
      document.getElementById('fightAmt').value = strength;
    }
  });
  violenceBtn.addEventListener('click', () => {
    if (strength - 10 >= 0) {
      strength -= 10;
      document.getElementById('fightAmt').value = strength;
    }
  });
};

export default { fightTomQuad };

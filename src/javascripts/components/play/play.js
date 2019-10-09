import './play.scss';

import util from '../../helpers/utilities';

const playTomQuad = () => {
  let playString = '<h1>Play</h1>';
  let fun = 50;
  playString += `<button id="coding" type="button">Coding</button> <button id="naps" type="button">Naps</button> <p><progress value="${fun}" max="100" id="playAmt"></progress></p>`;
  util.printToDom('play', playString);
  const codingBtn = document.getElementById('coding');
  const napsBtn = document.getElementById('naps');

  codingBtn.addEventListener('click', () => {
    if (fun + 50 < 110) {
      fun += 50;
      document.getElementById('playAmt').value = fun;
    }
  });
  napsBtn.addEventListener('click', () => {
    if (fun + 2 < 110) {
      fun += 2;
      document.getElementById('playAmt').value = fun;
    }
  });
};

export default { playTomQuad };

//Data Essential functions

let wordsArr =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit Eos reiciendis illoquidem repellendus maiores sit';
string_to_array = function (str) {
  return str.trim().split(' ');
};
console.log(string_to_array(wordsArr));

//Dom Manipulations
let loremBody = document.getElementById('lorem-body'),
  loremBodyText = document.getElementById('lorem-text-body'),
  criteria = document.getElementById('lorem-criteria'),
  genBtn = document.getElementById('generate-btn'),
  outputNum = document.getElementById('output-num'),
  copyBtn = document.getElementById('copy-btn');

//Secondary Functions
function clickBoard() {
  loremBodyText.select();
  loremBodyText.setAttribute('readonly', '');
  loremBodyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand('copy');
}

let wordsFunc = () => {
  console.log('hello');
  //wordsArr.join('');
};

console.log(wordsFunc(4));

let displayUI = () => {
  console.log('');
};

//Event Listeners
copyBtn.addEventListener('click', clickBoard);

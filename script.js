//Data Essential functions
let wordsArr =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nisi voluptas iure maiores ea incidunt amet aut rerum temporibus, cupiditate sed cum totam provident repellendus corrupti possimus sunt ullam. Consectetur ut nam facere, libero provident aut doloremque. Nostrum a nobis in magnam eligendi sed cum eos ab quae, commodi cupiditate aliquam tempore nam ipsam. Similique nihil ducimus culpa nostrum ab maxime necessitatibus velit vero distinctio delectus animi suscipit perspiciatis harum sunt dignissimos eius inventore possimus cupiditate rem minima aliquid, ad ullam a quaerat. Excepturi neque numquam sequi, dicta fuga voluptatum consectetur vel similique minus recusandae sunt, consequuntur cum corporis placeat temporibus debitis. Alias repellendus molestias aliquam quasi minima, ipsum neque consequuntur quas porro deserunt? A amet labore, alias porro distinctio tempora laudantium quam fugit deleniti. Dolorum temporibus modi odit reiciendis praesentium mollitia at a commodi voluptate, similique consequatur perferendis sit culpa repudiandae iste ex voluptates, non quae porro fugiat. Soluta tempora enim totam officiis? Id, debitis facere esse unde deserunt nulla repellat eum, officia sed consequuntur provident dignissimos voluptatem ullam odit a impedit laboriosam iusto ex, repudiandae possimus animi eos maxime illum doloremque! Sit amet ex eius ea dignissimos ipsa tenetur mollitia? Accusantium architecto qui fugiat facilis laborum optio consequatur maiores culpa, necessitatibus illo dignissimos asperiores vitae at suscipit incidunt dolorem porro praesentium corrupti nulla nemo. Sequi, ea? Sint incidunt, id debitis provident sunt harum architecto maiores illum consequatur, voluptates beatae cumque modi ut explicabo? Minima ipsam fugit architecto porro, quam, sed magnam, provident qui voluptatem corrupti id! Veritatis nostrum eligendi ullam, quos corporis molestiae iure recusandae cum pariatur voluptatum debitis earum, tenetur veniam corrupti quidem aliquid adipisci perferendis, nisi excepturi vel enim. Quae, nobis facilis. Earum voluptatem corrupti rerum vitae, voluptatibus nesciunt distinctio illum at eius animi sapiente quo aperiam dolore nulla? Ipsam ea tempore veritatis, quaerat fuga repudiandae accusamus quis similique officia quas sit libero, ab repellat, velit magnam! Adipisci ea dolorem temporibus dolores cumque quis laudantium, quod quo excepturi veniam deleniti distinctio vel at? Magni reiciendis odit, rem asperiores sunt amet molestias corporis nam quae nemo expedita provident error veniam doloribus! Accusamus ab assumenda, ea a at, tempore explicabo neque labore provident nisi architecto iste cupiditate esse. Deserunt officiis numquam ab nulla sit officia, repellendus debitis quis optio quia doloribus quidem nobis sint neque dolores inventore consequuntur incidunt explicabo ipsam odio assumenda delectus reprehenderit amet? Facilis quia doloribus laboriosam facere nemo maxime fuga a nesciunt eos id, nihil dolore quasi itaque molestiae ipsum magni consequuntur architecto, recusandae molestias necessitatibus voluptatum rem modi maiores accusantium? Nemo cupiditate voluptates earum delectus tempora similique iure. Esse, dignissimos cupiditate. Odio ipsum iste, corrupti voluptatibus, culpa vel quaerat incidunt eius possimus nisi est laboriosam dolorum veritatis quos facere expedita pariatur neque, sequi eaque nostrum? Et cum tenetur autem velit saepe rem quos, suscipit commodi aspernatur esse labore ea molestiae explicabo eligendi placeat maiores repudiandae similique dolore laboriosam quam sed impedit ut! Repellendus, magni, neque a beatae temporibus repellat mollitia eligendi provident omnis fugiat est eos aliquam perspiciatis dolorem. Culpa facere ipsum quasi.';

string_to_array = function (str) {
  return str.trim().split(' ');
};
let arr = string_to_array(wordsArr);

//Dom Manipulations
let loremBody = document.getElementById('lorem-body'),
  loremBodyText = document.getElementById('lorem-text-body'),
  criteria = document.getElementById('lorem-criteria'),
  genBtn = document.getElementById('generate-btn'),
  outputNum = document.getElementById('num'),
  copyBtn = document.getElementById('copy-btn');

//Secondary Functions
function clickBoard() {
  loremBodyText.select();
  loremBodyText.setAttribute('readonly', '');
  loremBodyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
}
let words;
let para;
let decision = () => {
  switch (criteria.value) {
    case 'words':
      loremBodyText.innerHTML = '';
      loremBodyText.innerHTML = words + '.';
      break;
    case 'sentence':
      loremBodyText.innerHTML = '';
      for (let i = 0; i < n; i++) {
        loremBodyText.textContent += ` ${words}.`;
      }
      break;
    case 'paragraph':
      loremBodyText.innerHTML = '';
      for (let i = 0; i < n; i++) {
        loremBodyText.textContent += ` ${para}. \n\r`;
      }
      break;
    default:
      console.log('');
  }
};

let generate = () => {
  n = Number(outputNum.value);
  words = arr.slice(0, n).join(' ');
  para = arr.slice(0, 40).join(' ');
  decision();
};

let displayUI = (e) => {
  generate();
  e.preventDefault();
};

//Event Listeners
genBtn.addEventListener('click', displayUI);
copyBtn.addEventListener('click', clickBoard);

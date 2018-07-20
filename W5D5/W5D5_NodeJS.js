const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin;
  output: process.stdout;
});

function teaAndBiscuits() {
  reader.question(`Would you like some tea?`, (res) => {
    console.log(`you replied ${res}.`);
    reader.question(`Would you like some biscuits?`, (res2) => {
      second = rest;
      console.log(`you replied ${res2}.`);

      const first = (res === yes) ? 'do' : 'don\'t';
      const second = (res2 === yes) ? 'do' : 'don\'t';
      console.log(`So you ${first} some tea and you ${second} some bicuists!`);
      reader.close();
    });
  });
}

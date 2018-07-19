function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping1(); // 'in block'. var is function scoped, it has to be let

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping2(); // in block, out of block. Const is block scoped

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping3(); // SyntaxError: Identifier 'x' has already been declared (var is function scoped)

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping4(); // in block, out of block. let ins block scoped

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

mysteryScoping5(); // SyntaxError: Identifier 'x' has already been declared. X is twice in the same block

 //-------------
 //-------------

function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

madLib("dance", "ugly", "shoe");


function isSubstring(phrase, subphrase) {
  return phrase.includes(subphrase);
}

isSubstring("Hello guys!, how are you?", "you");
isSubstring("Hello guys!, how are you?", "dog");




// Phase II

// fizzBuzz

function fizzBuzz (array){
  const fizzBuzzArr = [];

  array.forEach(el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      fizzBuzzArr.push(el);
    }
  });

  return fizzBuzzArr;
}

function fizzBuzz (array){
  const result = []
  array.forEach(x => {
  if ((x % 3 === 0)  && (x % 5 === 0)){
  result.push(x);
  };
});
  return result;
};

fizzBuzz ([60,3,10,15])

// isPrime

function isPrime (n){
  if (n < 2) {
    return false;
  };

  for(i = 2; i < n; i ++){
    if( n%i === 0 ) {
      return false;
    };
  };

  return true;
}

isPrime(3);
isPrime(25);
isPrime(37);

// sumOfNPrimes

function sumOfNPrimes(n) {
  let sum = 0;
  let primes = 0;
  for(i=2 ; primes <= n; i++ ){
    if( isPrime(i) ){
      sum = sum + i ;
      primes ++ ;
    };
  };
  return sum;
}

sumOfNPrimes(5);
sumOfNPrimes(2);

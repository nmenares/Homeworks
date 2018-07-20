function printCallback(x){
  return x;
}

function titleize(array, cb) {
  let names = array.map(el => `Mx. ${el} Jingleheimer Schmidt` );
  return  names.forEach(el => cb(el));
}

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrPRRRRRRR!!!`);
}

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
}

Elephant.prototype.play = function() {
  let tr = parseInt(Math.random() * this.tricks.length, 10);
  console.log(`${this.name} is ${this.tricks[tr]}`);
}

console.clear();
console.log('========== 1 =============');

function compare (a, b ) {
    if (a > b) console.log(a ,'didesnis');
    if (a < b) console.log(b ,'didesnis');
    if (a == b) console.log(a, b , 'lygus');
}

console.log(compare(5,3));

console.log('========== 2 =============');

for (let i = 1; i < 11; i++) {
    console.log(i);
}

console.log('========== 3 =============');

for (let i = 2; i < 11; i+=2) {
    console.log(i);
}

console.log('========== 4 =============');
var randomNumber;
for (let i = 0; i < 5; i++) {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

console.log('========== 5 =============');

var randomNumber;
while (randomNumber !== 5) {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}

console.log('========== 6 =============');

const masivas = [];
ilgis = Math.floor(Math.random() * (30 - 20) + 20);

for (let i = 0; i < ilgis; i++) {
    masivas.push(Math.round(Math.random() * (30 - 10) + 10))
}

let x = 0;
for (let i = 0; i < ilgis; i++) {
    if (x < masivas[i]) {
        x = masivas[i]; 
    }
}

console.log(ilgis);
console.log(masivas);
console.log(x);

console.log('========== 7 =============');

const masivasABCD = [];
const a = 'A';
const b = 'B';
const c = 'C';
const d = 'D';

for (let i = 0; i < 100; i++) {
    let rand = Math.floor(Math.random() * 4);
      if (rand == 0) {
        masivasABCD.push(a);
    } if (rand == 1) {
        masivasABCD.push(b);
    } if (rand == 2 ) {
        masivasABCD.push(c);
    } if (rand == 3 ) {
        masivasABCD.push(d);
    }
}

let a1 = 0;
let b1 = 0;
let c1 = 0;
let d1 = 0;
for (let j = 0; j < 100; j++) {
    if (masivasABCD[j] == a){
    a1 += 1;
    } if (masivasABCD[j] == b){
        b1 += 1;
    } if (masivasABCD[j] == c){
        c1 += 1;
    } if (masivasABCD[j] == d){
        d1 += 1;
    }  
}

console.log(masivasABCD);
console.log(a + a1, b + b1, c + c1, d + d1);

console.log('========== 8 =============');



console.log('========== 9 =============');

console.log('========== 10 =============');
import Operator from './src/operator';

const hitung = new Operator(5, 2);
console.log(hitung.tambah());

const div = new Operator(6,3);
console.log('6 / 4 = ',div.bagi());

const subs = new Operator(6,3);
console.log('6 - 4 = ',subs.kurang());

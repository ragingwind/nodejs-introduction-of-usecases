function fp() {
  console.log('2');
}
console.log('1');

setTimeout(fp, 2000);

console.log('3');
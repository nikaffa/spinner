//Creats a low-fidelity loading spinner
setTimeout(() => {
  process.stdout.write('\r|   '); // \r returns cursor back to the beginning of the line
}, 100);
setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);
setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);
setTimeout(() => {
  process.stdout.write('\r\\   ');// escape the backslash since it's a special character
}, 700);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);
setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);
setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);
setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);

setTimeout(() => {
  process.stdout.write('\n');
}, 1750);
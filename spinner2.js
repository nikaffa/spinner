//Creats a low-fidelity loading spinner. Refactored spinner1.js.
const sentence = "|/-\\|/-\\|";
let delay = 100;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`\r${char}  `);
  }, 0 + delay);
  delay += 200;
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay + 50);


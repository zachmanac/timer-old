const args = process.argv.slice(2);

let i = 0;
const timer = setInterval(function() {
  i++;
  console.log(i);

  for (arg of args) {
    if (i == arg) {
      process.stdout.write('\x07');
    } continue;
  }

  if (i >= 20) {
    clearInterval(this)
  }
}, 200);
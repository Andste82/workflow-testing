const fs = require('node:fs');

const content = 'Some content!';

try {
  fs.mkdirSync('build');
  fs.writeFileSync('build/output.txt', content);
  // file written successfully
} catch (err) {
  console.error(err);
}

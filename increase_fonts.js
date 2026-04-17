const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next')) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/text-\[(8|9|10|11|12|13)px\]/g, 'text-[14px]');
  content = content.replace(/text-xs/g, 'text-[14px]');
  fs.writeFileSync(file, content);
});
console.log('Fonts upgraded successfully.');

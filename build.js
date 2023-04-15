const path = require('path');
const expressStatic = require('express-static');

const outputPath = path.join(__dirname, 'public');
const serverFile = path.join(__dirname, 'index.js');

expressStatic(serverFile, outputPath, (err) => {
  if (err) {
    console.error('Error during the build:', err);
    process.exit(1);
  } else {
    console.log('Static files have been generated in the "public" folder.');
  }
});

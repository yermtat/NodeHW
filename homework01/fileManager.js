const fs = require("fs");

function readFile(filePath) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      console.error(err);
      throw err;
    }
    return data.toString();
  });
}

function writeFile(filePath, content) {
  fs.writeFile(filePath, data, function (err) {
    if (err) {
      console.error(err);
      throw err;
    }
  });
}

module.exports = {
  readFile,
  writeFile,
};

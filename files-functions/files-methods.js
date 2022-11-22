const fs = require("fs");

const readFilePromise = (entity) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./data/${entity}.json`, "utf-8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

const writeFilePromise = (entity, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./data/${entity}.json`, JSON.stringify(data), (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve("Ok");
    });
  });
};

module.exports = { readFilePromise, writeFilePromise };
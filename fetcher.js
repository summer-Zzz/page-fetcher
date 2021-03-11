const request = require ('request');
const fs = require ('fs');
const URL = process.argv[2];
const localPath = process.argv[3];

const pageDownloader = function (URL, localPath) {
request(URL, (error, response, body) => {
  if(error){
    console.log('Fail to download', error);
    return;
    } 
    fs.writeFile (localPath, body, (error) => {
      if (error) {
        console.log ('Fail to write the file', error);
      } else {
        console.log (`Downloaded and saved ${body.length} to ${localPath}`);
      }
    }) 
  })
};

pageDownloader (URL, localPath);
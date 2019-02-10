const fs = require('fs');

module.exports = {
  writeToFile: (res, dir, fileName, data) => {
    fs.writeFile(`${dir}/${fileName}`, data, (err) => {
      if (err) {
        // res.status(500).json({message: err});
        console.log(err);
      }
      // err.status(200).json({message: 'File converted to PDF'});
    });
  }

  deleteFile: (path) => {
    fs.unlink(path, err => {
      if (err) {
        console.log(err);
      }
    })
  }
};

const word2pdf = require('word2pdf');
const fs = require('fs');
const path = require('path');

const Helper = require('../Helper/helper');

module.exports = {
  WordToPdf(req, res) {
    try {
      const base64File = req.body.file.split(';base64,').pop();
      fs.writeFile(
        `./uploads/${req.body.name}`,
        base64File,
        'base64',
        async err => {
          if (err) {
            console.log(err);
          }

          const data = await word2pdf(`./uploads/${req.body.name}`);
          const fileName = req.body.name.split('.')[0];
          await Helper.writeToFile(res, './converted', `${fileName}.pdf`, data);

          return res.status(200).json({ message: 'File converted successfully', name: `${fileName }`.pdf});
        }
      );
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async DownloadFile(req, res) {
    const file = path.join(__dirname, '../converted') + '/' + req.params.fileName;
    await res.sendFile(file);
  }
};

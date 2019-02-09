import { WordService } from './../../services/word.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3001/api/converter/word-to-pdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart: true
  });
  fileName: string;
  fileTypeError = false;
  selectedFile: any;

  constructor(private wordService: WordService) { }

  ngOnInit() {}

  OnFileSelected(event) {
    const file: File = event[0];
    this.fileName = file.name;

    const fileCheck = this.fileName.toLowerCase();
    //  VVV regexp
    if (!fileCheck.match(/(\.docx|\.doc|\.rtf)$/)) {
      this.fileTypeError = true;
      return;
    } else {
      this.fileTypeError = false;
    }

    this.ReadAsBase64(file)
      .then(result => {
        this.selectedFile = result;

        this.wordService.convertFile(this.selectedFile, this.fileName)
          .subscribe(data => {
            console.log(data);
          }), err => {
            console.log(err);
          }
      })
      .catch(err => console.log(err));
  }

  ReadAsBase64(file): Promise<any>{
    const reader = new FileReader();
    // VVV if resolve then resolve the promise, if reject then reject with event
    const fileValue = new Promise((resolve, reject) => {
      reader.addEventListener('load', () => {
        resolve(reader.result)
      })
      reader.addEventListener('error', event => {
        reject(event);
      });
      reader.readAsDataURL(file);
    });
    return fileValue;
  }
}

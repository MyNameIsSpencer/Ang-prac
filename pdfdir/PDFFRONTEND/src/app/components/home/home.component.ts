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

  constructor() { }

  ngOnInit() {}

  OnFileSelected(event) {

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
    });
  }
}

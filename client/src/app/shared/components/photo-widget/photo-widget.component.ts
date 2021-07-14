import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent, base64ToFile } from 'ngx-image-cropper';

@Component({
  selector: 'app-photo-widget',
  templateUrl: './photo-widget.component.html',
  styleUrls: ['./photo-widget.component.scss']
})
export class PhotoWidgetComponent implements OnInit {
  files: File[] = [];
  imageChangedEvent: any = '';
  croppedImage: any = '';
  @Output() addFile = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent): any {
    this.croppedImage = event.base64;
  }

  onSelect(event): any {
    this.files = [];
    this.files.push(...event.addedFiles);
  }

  onUpload(): any {
    console.log(base64ToFile(this.croppedImage));
    this.addFile.emit(base64ToFile(this.croppedImage));
  }

}

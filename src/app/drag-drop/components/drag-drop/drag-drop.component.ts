import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  public files: NgxFileDropEntry[] = [];
  imageURL : string = '';
  imgData: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile && this.isFileAllowed(droppedFile.fileEntry.name)) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          var reader = new FileReader();
          reader.onload = () =>{
            let imgAux = {
              img: reader.result as string,
              name:droppedFile.relativePath,
              lastModified:file.lastModified
            }
            this.imgData.push(imgAux);
          };
          reader.readAsDataURL(file)   

        });
      } else {
             const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }

  isFileAllowed(fileName: string) {
    let isFileAllowed = false;
    const allowedFiles = ['.jpg', '.jpeg', '.png'];
    const regex = /(?:\.([^.]+))?$/;
    const extension = regex.exec(fileName);
    if (undefined !== extension && null !== extension) {
      for (const ext of allowedFiles) {
        if (ext === extension[0]) {
          isFileAllowed = true;
        }
      }
    }
    return isFileAllowed;
  }

  saveImg(){
    const imgAux=JSON.stringify(this.imgData);
    localStorage.setItem('imgList',imgAux);
    window.alert("Las imágenes se han guardado correctamente en el localstorage");
    this.imgData=[];
  }

}

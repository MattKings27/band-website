import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStyleService {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  setBackgroundImage(url: string) {
    this.document.documentElement.style.backgroundImage = `url(${url})`;
  }

  removeBackgroundImage() {
    this.document.documentElement.style.backgroundImage = '';
  }
}

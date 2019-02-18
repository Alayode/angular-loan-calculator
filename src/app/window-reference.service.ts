import { Injectable } from '@angular/core';



// This interface is optional, showing how you can
//  add strong typings for
//  Just use 'Window' as the type if you don't have
// custom global stuff

export interface ICustomWindow extends Window {
  __custom_global_stuff: string;
}

function getWindow(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowReferenceService {
  get nativeWindow(): ICustomWindow {
      return getWindow();
  }
}

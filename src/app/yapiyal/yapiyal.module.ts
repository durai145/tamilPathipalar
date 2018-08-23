import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Split } from 'brace';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class YapiyalModule {
   parseString: (inputString: string) => string = function(x) { 
    const xArr = x.split('');
    xArr.forEach(function (y) {
      console.log(y.charAt(0) + '=' + y.charCodeAt(0).toString());
    });
    return x; } ;
 }

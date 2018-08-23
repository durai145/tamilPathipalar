import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { TamilParserComponent } from './tamil-parser/tamil-parser.component';

@NgModule({
  declarations: [
    AppComponent,
    TamilParserComponent
  ],
  imports: [
    BrowserModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

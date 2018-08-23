import { YapiyalModule } from './yapiyal/yapiyal.module';
import { Component } from '@angular/core';
import { AceEditorModule } from 'ng2-ace-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'தமிழ் பதிப்பாசிரியர்';
  text: String = '';

  onChange(code) {
    console.log('new code', code);
    const yapiyalModule = new YapiyalModule();
    yapiyalModule.parseString(code);
  }
}

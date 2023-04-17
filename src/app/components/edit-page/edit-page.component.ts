import { Component } from '@angular/core';
import { Translation } from 'src/app/models/translation.model';
import { LogicService } from 'src/app/services/logic.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent {
  translation: Translation = {
    // id: '',
    // textFrom: '',
    // textTo: '',
    // meaning: ''
  };

  constructor(
    private logicService: LogicService
  ){}

  async editTranslation(): Promise<void> {
    console.log(`###` + this.translation.meaning)
  }
}

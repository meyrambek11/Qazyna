import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Translation } from 'src/app/models/translation.model';
import { LogicService } from 'src/app/services/logic.service';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})

export class EditPageComponent implements AfterViewInit {
  @ViewChild(MainPageComponent) mainPageComponent: any;

  translation: Translation = {
    id: '',
    word_kk: '',
    word_ru: '',
    meaning_kk: '',
    meaning_ru: '',
    meaning: ''
  }

  ngAfterViewInit() {
    console.log(this.mainPageComponent)
    // this.translation.id = this.mainPageComponent.translation.id;
  }

  constructor(
    private logicService: LogicService
  ){}


  async editTranslation(): Promise<void> {
    console.log(`###` + this.translation.meaning)
  }

  selectTranslation(translate: any) {
    console.log("22222")
    console.log(translate)
  }
}

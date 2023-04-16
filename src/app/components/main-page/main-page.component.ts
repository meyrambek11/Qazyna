import { Component, ElementRef, ViewChild } from '@angular/core';
import { Translation } from 'src/app/models/translation.model';
import { LogicService } from 'src/app/services/logic.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  translation: Translation = {
    id: '',
    textFrom: '',
    textTo: '',
    meaning: ''
  };

  constructor(
    private logicService: LogicService
  ){}

  async searchTranslation(): Promise<void> {
    let searchText = document.getElementById('search-word') as HTMLInputElement | null;
    let languageTypes = document.getElementById('language-type') as HTMLInputElement | null;
    //TODO: check the english letters
    let payload = {
      text: searchText?.value,
      from: languageTypes?.value,
      to: languageTypes?.value == 'kk' ? 'ru' : 'kk' 
    };

    console.log(payload)
    
    const data = (await this.logicService.getTranslation(payload)).subscribe({
      next: async (res) => {
        await this.putTranslationValues({
          ...res,
          from: payload.from,
          to: payload.to,
          textFrom: payload.text
        })
      },
      error: (e) => console.error(e)
    })
  }

  async putTranslationValues(data: any){
    console.log(data)
    this.translation.textFrom = data.textFrom;
    this.translation.textTo = data.word;
    this.translation.meaning = (data.meaning_kk && data.meaning_ru) ? data.from == 'kk' ? `${data.meaning_kk} - ${data.meaning_ru}` : `${data.meaning_ru} - ${data.meaning_kk}`: ''

  }
}

import { Component } from '@angular/core';
import { AddTranslation } from 'src/app/models/addTranslation.model';
import { Translation } from 'src/app/models/translation.model';
import { LogicService } from 'src/app/services/logic.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent {

  translation: Translation = {
    id: '',
    word_kk: '',
    word_ru: '',
    meaning_kk: '',
    meaning_ru: '',
    meaning: ''
  };

  constructor(private logicService: LogicService){}

  async addTranslation(): Promise<void> {
    let word_kk = document.getElementById('new-word-kk') as HTMLInputElement | null;
    let word_ru = document.getElementById('new-word-ru') as HTMLInputElement | null;
    let meaning_kk = document.getElementById('new-word-meainig-kk') as HTMLInputElement | null;
    let meaning_ru= document.getElementById('new-word-meaning-ru') as HTMLInputElement | null;

    if(word_kk?.value == "" || word_ru?.value == "" || meaning_kk?.value == "" || meaning_ru?.value ==""){
      //TODO: notification
      return;
    }
    let payload = {
      word_kk: word_kk?.value,
      word_ru: word_ru?.value,
      meaning_kk: meaning_kk?.value,
      meaning_ru: meaning_ru?.value
    }

    console.log(payload)

    const data = (await this.logicService.add(payload)).subscribe({
      next: async (res) => {
        await this.putTranslationValues(res)
      },
      error: (e) => console.error(e)
    })
  }

  async putTranslationValues(data: any){
    console.log(data)
    this.translation.id = data.id
    this.translation.word_kk = data.word_kk;
    this.translation.word_ru = data.word_ru;
    this.translation.meaning_kk = data.meaning_kk ? data.meaning_kk : '',
    this.translation.meaning_ru = data.meaning_ru ? data.meaning_ru : ''
    this.translation.meaning = (data.meaning_kk && data.meaning_kk) ? `${data.meaning_kk} - ${data.meaning_ru}` : ''
  }

}

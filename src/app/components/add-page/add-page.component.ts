import { Component } from '@angular/core';
import { AddTranslation } from 'src/app/models/addTranslation.model';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent {
  addtranslation: AddTranslation = {
    id: '',
    text_kk: '',
    text_ru: '',
    meaning_kk: '',
    meaning_ru: ''
  };

  async addTranslation(): Promise<void> {
    let word_kk = document.getElementById('new-word-kk') as HTMLInputElement | null;
    let word_ru = document.getElementById('new-word-ru') as HTMLInputElement | null;
    let word_meaning_kk = document.getElementById('new-word-meaning-kk') as HTMLInputElement | null;
    let word_meaning_ru = document.getElementById('new-word-meaning-ru') as HTMLInputElement | null;
    //TODO: check the english letters
    let payload = {
      text_kk: word_kk?.value,
      text_ru: word_ru?.value,
      m_kk: word_meaning_kk?.value,
      m_ru: word_meaning_ru?.value,
    };

    this.addtranslation.text_kk = payload.text_kk;
    this.addtranslation.text_ru = payload.text_ru;
    this.addtranslation.meaning_kk = payload.m_kk;
    this.addtranslation.meaning_ru = payload.m_ru;

    //console.log(payload)
  }

}

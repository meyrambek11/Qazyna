import { AfterViewInit, Component, ViewChild, Input, OnInit, ElementRef } from '@angular/core';
import { Translation } from 'src/app/models/translation.model';
import { LogicService } from 'src/app/services/logic.service';
import { MainPageComponent } from '../main-page/main-page.component';
import { DataService } from 'src/app/services/data.service';
import { editTranslation } from 'src/app/models/editTranslation.model';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})

export class EditPageComponent implements OnInit{

  @ViewChild('input_kk')
  inputkkReference!:ElementRef;

  dataList: editTranslation = {
    id: '',
    word_kk: '',
    word_ru: '',
    meaning_kk: '',
    meaning_ru: '',
    meaning: ''
  };

  public constructor(
    private dataService: DataService) { }

  ngOnInit(): void {
    this.dataList = this.dataService.getData();
  }

  Delete() {
    this.dataList.word_kk = '';
    this.dataList.word_ru = '';
    this.dataList.meaning_kk = '';
    this.dataList.meaning_ru = '';
    this.dataList.meaning = '';
  }

  Change() {
    this.dataList.word_kk = this.inputkkReference.nativeElement.value;
    this.dataList.word_ru = this.inputkkReference.nativeElement.value;
    this.dataList.meaning_kk = this.inputkkReference.nativeElement.value;
    this.dataList.meaning_ru = this.inputkkReference.nativeElement.value;
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AddDto, GetTranslationDto } from "../dto/dto";

const baseUrl = 'https://shark-app-kkbr8.ondigitalocean.app/';
@Injectable({
    providedIn: 'root'
 })
 export class LogicService{
    constructor(private http: HttpClient) {
    }

    async getTranslation(payload: GetTranslationDto){
        return this.http.post(`${baseUrl}gcp-translation/translate`, payload);
    }

    async add(payload: AddDto){
        return this.http.post(`${baseUrl}translation`, payload);
    }
 }
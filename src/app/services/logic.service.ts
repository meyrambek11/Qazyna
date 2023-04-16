import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://shark-app-kkbr8.ondigitalocean.app/';
@Injectable({
    providedIn: 'root'
 })
 export class LogicService{
    constructor(private http: HttpClient) {
    }

    async getTranslation(payload: {text: string | undefined, from: string | undefined, to: string}){
        return this.http.post(`${baseUrl}gcp-translation/translate`, payload);
    }
 }
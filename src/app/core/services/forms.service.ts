import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiLink = '../../../api';

@Injectable({ providedIn: 'root' })
export class FormsService {
  constructor(private httpClient: HttpClient) {}

  fetchForms() {
    const url = apiLink + '/forms';
    return this.httpClient.get(url);
  }

  fetchFormByUid(formUid: string) {
    const url = apiLink + '/forms/' + formUid;
    return this.httpClient.get(url);
  }
}

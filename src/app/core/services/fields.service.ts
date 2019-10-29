import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiLink = '../../../api';

@Injectable({ providedIn: 'root' })
export class FieldsService {
  constructor(private httpClient: HttpClient) {}

  fetchFields() {
    const url = apiLink + '/fields';
    return this.httpClient.get(url);
  }

  fetchFieldByUid(fieldUid: string) {
    const url = apiLink + '/fields/' + fieldUid;
    return this.httpClient.get(url);
  }
}

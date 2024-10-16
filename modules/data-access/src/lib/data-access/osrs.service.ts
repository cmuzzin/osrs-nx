import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OSRSService {
  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http.get(`https://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=${23}`).pipe(
        map(data => {
            console.log(data);
            return data;
        })
    );
  }
}
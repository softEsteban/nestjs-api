import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {}

  getNasaApi(): Observable<AxiosResponse<any>> {
    return this.httpService
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .pipe(map((response) => response.data));
  }

  getGithubApi(user: string): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`https://api.github.com/users/${user}`)
      .pipe(map((response) => response.data));
  }
}

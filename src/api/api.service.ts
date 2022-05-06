import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { RequestService } from 'src/request/request.service';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService,
              private request: RequestService) {}

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

  getBoredApi(): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`https://boredapi.com/api/activity/`)
      .pipe(map((response) => response.data));
  }

  async getRickAndMorty(){
    const response = await this.request.makeApiRequest('https://rickandmortyapi.com/api/character/497', 'get');
    console.log("Response", response);
    return response;
  }
}

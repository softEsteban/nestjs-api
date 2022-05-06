import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RequestService {
    constructor(private http: HttpService) {

    }

    makeApiRequest(url: string, type: string, data?: string) {
        console.log('Lets consume api service!');
        try {
            console.log("Url ", url);
            console.log("Data json", data);
            let response: any = null;
            //HTTP GET Request
            if (type == "get") {
                response = this.http
                    .get(url).toPromise();
            }

            //HTTP POST Request
            else if (type == "post") {
                response = this.http
                    .post(url, data).toPromise();
            }

            //HTTP PUT Request
            else if (type == "put") {
                response = this.http
                    .put(url, data).toPromise();
            }

            //HTTP DELETE Request
            else if (type == "delete") {
                response = this.http
                    .delete(url).toPromise();
            }

            const dataPromise = response.then((response) => response.data);
            return dataPromise;


        } catch (error) {

        }
    }
}

import { SERVER_URL } from './../config';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        console.log(JSON.stringify({ username: username, password: password }));
        let headers    = new Headers({ 'Content-Type': 'application/json'});
        let options    = new RequestOptions({ headers: headers });
        return this.http.post(`${SERVER_URL}/api/userdata/authenticate`, JSON.stringify({ username: username, password: password }), options)
            .map((response: Response) => {
                console.log("chegou aqui");
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    createUser(nome:string, email: string, password: string): Observable<boolean> {
        console.log(JSON.stringify({ nome: nome, email: email, password: password }));
        let headers    = new Headers({ 'Content-Type': 'application/json'  });
        let options    = new RequestOptions({ headers: headers });
        return this.http.post(`${SERVER_URL}/api/userdata/saveUser`, JSON.stringify({ nome: nome, email: email, senha: password }), options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: email, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
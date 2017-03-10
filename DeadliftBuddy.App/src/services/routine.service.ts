import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IRoutine, IExercise } from './routine.model';

@Injectable()
export class RoutineService {

    constructor(private httpService: Http) { }

    public getRoutines(): Observable<IRoutine[]> {
        return this.httpService.get('http://localhost:5650/api/routine').map((response) => {
            return <IRoutine[]>response.json();
        }).catch(this.handleError);
    }

    private handleError(error) {
        console.log(error.statusText);
        return Observable.throw(error.statusText);
    }
}

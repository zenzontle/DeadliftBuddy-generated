import { Component } from '@angular/core';

import { RoutineService } from '../services/routine.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'app works!';
    routine = 'None';

    constructor(private routineService: RoutineService) {}

    getIt() {
        this.routineService.getRoutines().subscribe(response => {
            if (response) {
                this.routine = response.toString();
            } else {
                this.routine = 'Not found';
            }
    });
  }
}

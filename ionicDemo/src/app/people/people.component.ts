import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-people', 
    templateUrl: './people.component.html'
})

export class PeopleComponent {
   @Input() peopleList: string[];

}
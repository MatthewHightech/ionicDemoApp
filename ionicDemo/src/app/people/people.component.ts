import { Component} from '@angular/core';
import { PeopleService } from './people.service';

@Component({
    selector: 'app-people', 
    templateUrl: './people.component.html'
})

export class PeopleComponent {
    // special binding for taking input from a parent component
   peopleList: string[];

   constructor(peoService: PeopleService) {
        this.peopleList = peoService.people; 
   }

}
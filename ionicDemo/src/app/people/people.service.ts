import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'; 

@Injectable({
    providedIn: 'root'
})

export class PeopleService {
    peopleChanged = new Subject<string[]>();
    people: string[] = ['matt', 'kate', 'sue', 'dave']; 

    // event triggered when custom event is run
    addPerson(name: string) {
        this.people.push(name);
        this.peopleChanged.next(this.people);  
    }

    removePerson(name: string) {
        this.people = this.people.filter(single => {
            return single !== name; 
        }); 
        this.peopleChanged.next(this.people);  
    }
}
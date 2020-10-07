import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PeopleService {

    people: string[] = ['matt', 'kate', 'sue', 'dave']; 

    // event triggered when custom event is run
    addPerson(name: string) {
        this.people.push(name); 
    }
}
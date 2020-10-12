import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';  

@Injectable({
    providedIn: 'root'
})

export class PeopleService {
    peopleChanged = new Subject<string[]>();
    people: string[] = [];  

    constructor (private http: HttpClient) {}

    fetchPeople() {
        this.http.get<any>('https://api.disneyapi.dev/characters')
        .pipe(map(ogResponse => {
            return ogResponse.data.map(character => character.name); 
        }))
        .subscribe(pipeResponse => {
            this.peopleChanged.next(pipeResponse); 
        })
        
    }
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
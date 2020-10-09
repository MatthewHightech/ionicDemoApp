import { Component, OnDestroy, OnInit} from '@angular/core';
import { PeopleService } from './people.service';

import { Subscription } from 'rxjs'; 

@Component({
    selector: 'app-people', 
    templateUrl: './people.component.html'
})

export class PeopleComponent implements OnInit, OnDestroy {
    // special binding for taking input from a parent component
    peopleList: string[];
    private peopleListSubscription: Subscription; 

    constructor(private peoService: PeopleService) {
            
    }

    ngOnInit() {
        this.peopleList = this.peoService.people; 
        this.peopleListSubscription = this.peoService.peopleChanged.subscribe(newPeopleList => {
            this.peopleList = newPeopleList; 
        });
    }

    ngOnDestroy() {
        this.peopleListSubscription.unsubscribe(); 
    }

    onRemove(name: string) {
        this.peoService.removePerson(name); 
    }

}
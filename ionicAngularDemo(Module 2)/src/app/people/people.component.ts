import { Component, OnDestroy, OnInit} from '@angular/core';
import { PeopleService } from './people.service';

import { Subscription } from 'rxjs'; 

@Component({
    selector: 'app-people', 
    templateUrl: './people.component.html'
})

export class PeopleComponent implements OnInit, OnDestroy {
    peopleList: string[];
    private peopleListSubscription: Subscription;
    isFetching = false;  

    constructor(private peoService: PeopleService) {
            
    }

    ngOnInit() { 
        this.peopleListSubscription = this.peoService.peopleChanged.subscribe(newPeopleList => {
            this.peopleList = newPeopleList;
            this.isFetching = false; 
        });
        this.isFetching = true; 
        this.peoService.fetchPeople(); 
    }

    ngOnDestroy() {
        this.peopleListSubscription.unsubscribe(); 
    }

    onRemove(name: string) {
        this.peoService.removePerson(name); 
    }

}
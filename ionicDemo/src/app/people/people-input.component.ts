import { Component } from '@angular/core'; 

@Component({
    selector: 'app-input-people', 
    templateUrl: './people-input.component.html', 
    styleUrls: ['./people-input.component.css']
})

export class PeopleInputComponent {
    onAddPeople() {
        console.log("Created new Person"); 
    }
}
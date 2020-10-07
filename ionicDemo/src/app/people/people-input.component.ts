import { Component, EventEmitter, Output } from '@angular/core'; 

@Component({
    selector: 'app-input-people', 
    templateUrl: './people-input.component.html', 
    styleUrls: ['./people-input.component.css']
})

export class PeopleInputComponent {
    // custom event 
    @Output() peopleCreate = new EventEmitter<string>(); 

    // when new name is entered it get's temporarily stored here
    enteredPeoplesName = '';

    // 
    addName() {
        console.log("Created new Person");
        // triggers custom event "peopleCreate" with arg enteredPeoplesName
        this.peopleCreate.emit(this.enteredPeoplesName);
    }
}
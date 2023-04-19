import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-practicedrom',
  templateUrl: './practicedrom.component.html',
  styleUrls: ['./practicedrom.component.css']
})
export class PracticedromComponent {
  name = new FormControl('');
  updateName() {
    this.name.setValue('changed name');
  }
}

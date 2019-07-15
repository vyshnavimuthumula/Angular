import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms"
@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  moviesForm :FormGroup;
  constructor() { }

  ngOnInit() {
    this.moviesForm=new FormGroup({
      name : new FormControl(),
      rating : new FormControl()
    });
  }

}

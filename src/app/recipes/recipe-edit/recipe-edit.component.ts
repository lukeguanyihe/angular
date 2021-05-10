import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']; //+ cast to string
          this.editMode = params['id'] != null //check if param is null. not null=>id=>edit
        }
      );
  }

}

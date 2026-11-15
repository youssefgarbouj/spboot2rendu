import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-categorie',
  imports: [FormsModule],
  templateUrl: './update-categorie.html',
})
export class UpdateCategorie implements OnInit {
  @Input()
  categorie!: Categorie;

  @Input()
  ajout!: boolean;

  @Output()
  categorieUpdated = new EventEmitter<Categorie>();

  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateCategorie ', this.categorie);
  }

  saveCategorie() {
    this.categorieUpdated.emit(this.categorie);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/categorie.model';
import { MotoService } from '../services/moto';
import { UpdateCategorie } from '../update-categorie/update-categorie';

@Component({
  selector: 'app-liste-categories',
  imports: [CommonModule, UpdateCategorie],
  templateUrl: './liste-categories.html',
})
export class ListeCategories implements OnInit {
  categories!: Categorie[];
  updatedCat: Categorie = { idCat: 0, nomCat: '' };
  ajout: boolean = true;

  constructor(private motoService: MotoService) {}

  ngOnInit(): void {
    this.chargerCategories();
  }

  chargerCategories() {
    this.categories = this.motoService.listeCategories();
    console.log(this.categories);
  }

  categorieUpdated(cat: Categorie) {
    console.log('Cat updated event', cat);
    if (this.ajout) {
      this.motoService.ajouterCategorie(cat);
    } else {
      this.motoService.updateCategorie(cat);
    }
    this.chargerCategories();
  }

  updateCat(cat: Categorie) {
    this.updatedCat = cat;
    this.ajout = false;
  }
}

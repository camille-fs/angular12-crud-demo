import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../service/produit.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProduitIn} from "../model/produit"

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private produitService: ProduitService, private router: Router) {
    this.createForm = new FormGroup({
      libelle: new FormControl('', Validators.required),
      libelleCategorie: new FormControl('', Validators.required)
    })
  }

  get formControls() {
    return this.createForm.controls;
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.createForm.value);
    let produitIn: ProduitIn = {
      libelle: this.createForm.value.libelle,
      categorie: {
        libelle: this.createForm.value.libelleCategorie
      }
    }

    this.produitService.create(produitIn).subscribe(result => {
      console.log('Produit créé avec succès');
      this.router.navigateByUrl('produit/index');
    })
  }
}

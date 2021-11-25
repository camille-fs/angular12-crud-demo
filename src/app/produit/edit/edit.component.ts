import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Produit} from "../model/produit";
import {ProduitService} from "../service/produit.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  produit: Produit;
  id: number;

  constructor(private produitService: ProduitService, private route: ActivatedRoute) {
    this.editForm = new FormGroup({
      libelle: new FormControl('', Validators.required),
      libelleCategorie: new FormControl('', Validators.required)
    });
  }

  get formControls() {
    return this.editForm.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['produitId'];
    this.produitService.getById(this.id).subscribe((result) => {
      this.produit = result;
    });
  }

  onSubmit() {
  }

}

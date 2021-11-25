import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../service/produit.service";
import {Produit} from "../model/produit";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // TODO : unsubscribe

  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {
  }

  ngOnInit(): void {
    this.getAllProduits();
  }

  public delete(produitId: number) {
    this.produitService.delete(produitId).subscribe(() => {
      this.produits = this.produits.filter(produit => produit.id !== produitId)
      console.log('Produit supprimer avec succès');
    })
  }

  private getAllProduits() {
    this.produitService.getAll().subscribe((produits) => {
      this.produits = produits;
    })
  }
}

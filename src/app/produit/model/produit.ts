export interface Produit {
  id: number;
  libelle: string;
  categorie: Categorie;
}

export interface Categorie {
  id: number;
  libelle: string;
}

export interface ProduitIn {
  libelle: string;
  categorie: CategorieIn;
}

export interface CategorieIn {
  libelle: string;
}

# Portfolio — Mathis TERRIER

Portfolio personnel d'élève ingénieur (Mécanique & Énergétique, INSA Hauts-de-France), hébergé sur GitHub Pages.
Site statique en **HTML / CSS pur** (aucun framework) avec une seule ligne de JavaScript utile (bouton « retour en haut »).

## Structure

| Fichier / dossier | Rôle |
|---|---|
| `index.html`, `index_en.html` | Page d'accueil FR / EN (projets, à propos, contact) |
| `experience-*.html` | Pages de détail de chaque projet ou expérience (FR) |
| `index.css` | Feuille de style unique (variables de couleur en haut du fichier) |
| `index.js` | Bouton « retour en haut » |
| `images/` | Images optimisées (≤ 1600 px, JPEG ≈ 80 %) + `og-image.jpg` pour le partage |
| `documents/` | PDF techniques (plans d'usinage, rapport du robot) |
| `fonts/` | HK Grotesk (chargée via `@font-face` dans `index.css`) |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Icônes du site |

## Ajouter une image à une galerie

1. Redimensionner l'image à 1600 px maximum sur son plus grand côté, JPEG qualité ≈ 80 %.
2. Ajouter dans la page :

```html
<figure class="gallery__item">
  <a class="gallery__link" href="images/mon-image.jpg" target="_blank" rel="noopener">
    <img src="images/mon-image.jpg" alt="Description utile de l'image"
         class="gallery__img" width="LARGEUR" height="HAUTEUR" loading="lazy" decoding="async" />
  </a>
  <figcaption class="gallery__caption">Légende (facultative)</figcaption>
</figure>
```

Les attributs `width` / `height` donnent le bon ratio : l'image s'affiche en entier, sans déformation.
Pour une photo verticale seule, ajouter `gallery__item--portrait` à la `<figure>` et `gallery--single` à la galerie.

## Identité visuelle

Orange racing `#FF5500` (variable `--racing-orange`), fond sombre `#0F172A`.
`--racing-orange-text` (`#C2410C`) est une variante plus foncée utilisée uniquement pour le texte sur fond blanc (lisibilité).

## Crédits

Structure d'origine inspirée du template open source `nisarhassan12/portfolio-template` — voir `LICENSE.md`.

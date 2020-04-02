# Test Dev Front : John Doe

Réalisation d'un test de développement front-end pour l'entreprise [Rezo Zero](https://www.rezo-zero.com).

## Instructions

Il s'agit de réaliser le portfolio du très célèbre photographe : John Doe.

Le but est de créer assez rapidement une navigation entre une Home et plusieurs pages de détails en réfléchissant aux interactions et aux transitions. Vous pouvez remplir avec autant de faux contenus que nécessaire si les médias fournis ne suffisent pas.

Analyse du rendu sur plusieurs critères :
* la clarté du DOM, bonnes pratiques SEO et accessibilité
* la compréhension et interprétation des éléments statiques de l'interface
* la clarté des styles et du JS
* la pertinence des dépendances JS
* fluidité et pertinence des animations / transitions
* la documentation
* et enfin la touche personnelle (directement liée à l'interprétation des maquettes statiques)

## Documents fournis

* Maquettes au format Sketch
* Preview JPG des 2 pages
* Contenus : textes et images
* Fonte "Chalet Book"

___

## Mon rendu

J'ai structuré le projet afin d'avoir un site en développement (dossier "app") et un site optimisé en production (dossier "dist"). J'ai géré mon environnement en automatisant des tâches avec le task runner Gulp. Aussi, j'ai décidé d'utiliser pour la première fois la méthodologie BEM (Block Element Modifier) pour mieux structurer mon code CSS de façon à éviter les conflits et de rendre le code réutilisable et modulable.

### Technos utilisées

* HTML5
* SASS compiler en CSS3
* normalize.css
* JavaScript
* jQuery-3.4.1
* Modernizr-3.8.0

### Gulp

Grâce à Gulp, j’ai automatisé différentes tâches me permettant de travailler plus efficacement sur le site en développement (rafraichissement du navigateur après chaque modification des fichiers, compilation automatique de SASS en CSS, ...). Enfin, j’ai automatisé des tâches pour générer et optimiser le site en production (minifier le JS et le CSS, mise en place d’un autoprefixer CSS pour adapter aux différents navigateurs, optimisation des images, ...).

J'ai donc créé deux commandes à lancer depuis la racine du projet.

>La première commande me permettant d'optimiser mon travail pendant le développement :
>```bash
>gulp
>```
>ou
>```bash
>gulp default
>```

>Et la seconde commande me permettant de générer le site optimisé/fini :
>```bash
>gulp build
>```

## Auteur

* **Gautier Maire** - [Site Web](https://www.gautiermaire.fr) - [Twitter](https://twitter.com/gaugauxmaire)

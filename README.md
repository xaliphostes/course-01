# course-01

Un melange de fonctions et d'objets TypeScript pour tester et se familiariser avec ces langages.

## Notions préliminaires
- Comprendre et utiliser l'utilitaire `yarn`
- Comprendre et utiliser l'utilitaire `node`
- Faire ses premiers `unit test`
- Faire du `coverage` de code
- Ecrire et générer de la `documentation` pour les utilisateurs
- Ecrire et générer une librarie
- Ecrire des examples utilisant cette librairie

## Notions de base
- Comprendre ces langages (syntaxe)
    - Typage versus non-typage
    - Variables `const` et `let`
    - Plus de variables globales !
- Exporter le strict nécessaire pour l'utilisateur
- Comprendre et utiliser la programmation fonctionnelle (déclarative). Comparaison avec la programmation impérative
- Comprendre et utiliser les fonctions `arrow` (ou expression lambda en C++)
- Utiliser une librairie tierce
    - La librairie `@youwol/dataframe`
    - Comparaison avec la librairie `Panda` (Python)
    - Avantages à utiliser cette librairie
    - Dataframe et programmation fonctionnelle
- → Exemple 1: Comment calculer le vecteur moyen des vecteurs propres d'une suites de tenseurs de contraintes aléatoires

## Notions avancées
- Notion de programmation orientée objets
- Notion de classe
- Notion d'interface
- Le `constructor` et son rôle
- Notion sous-jacente de polymorphisme
- → Exemple 2: Comment; en une centaine de lignes de code, on peut faire de la dérivation numérique et symbolique de fonctions mathématiques à une variable


## Programmation fonctionnelle
Exemple du *pourquoi ce truc* ...
```js
let n = 2

// incrémentation par effet de bord
function inc(k) {
    n = n + k // mutation de n !!!
    return n
}

console.log( inc(1) + inc(1) )
```
La valeure attendue est `4`.<br>
La valeure retrounée est `7`.

```js
// incrémentation sans effet de bord 
// (pas de variable globale, pas de mutation)
function inc(k) {
    return k+1 // pas de mutation !!!
}

console.log( inc(1) + inc(1) )
```
La valeure attendue est `4`.<br>
La valeure retrounée est `4`.
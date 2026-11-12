## Pitch du projet
Le but est de créer une bibliothèque de jeux vidéo comme Steam ou Epic Games. On pourra donc ajouter des jeux, les supprimer ou les trier par éditeurs ou genre. 

## Membres du groupe
- Emily Demas
- Marco Ferrier
- Axel Benoit
- Eden Boufferet

## Stack technique choisie
- JavaScript
- NodeJS : runtime javascript permettant d'éviter le navigateur
- Express : permet la création et la gestion d'un serveur web en JavaScript
- Drizzle : ORM permettant de discuter avec la base de données
- SQlite : base de données

## Entites
- Jeu (Editeur, Genre, Nom, PEGI)
- Editeur (Annee de création, Nationalité)

## Relations
- Un jeu a un seul éditeur
- Un jeu a un seul PEGI
- Un éditeur a une nationalité
- Un éditeur à plusieurs jeux
- Un jeu peut avoir plusieurs genres

## Entites A et B

## Contenu du seed
Jeu : 
    - Super Smash Bros Melee (Nintendo, Combat, 3)
    - Modern Warfare 4 (Activision, Combat, 18)
    - GTA 6 (Rockstar Games, Action-aventure, 18)
    - Fortnite (Epic Games, Battle-royal, 12)
    - Minecraft (Mojang, Aventure, 3)

Editeur : 
    - Rockstar Games (1998, Etats-Unis)
    - Activision (1979, Etats-Unis)
    - Nintendo (1947, Japon)
    - Epic Games (1991, Etats-Unis)
    - Mojang (2009, Suède)

## Ce qui est mis en avant sur la page d'accueil

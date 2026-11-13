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
- Jeu (Editeur, Date de Sortie, Tag, Nom, PEGI, note)
- Editeur (Annee de création, Nationalité)
- Tag (Caractéristique)

## Relations
- Un jeu a un seul éditeur
- Un jeu a un seul PEGI
- Un éditeur a une nationalité
- Un éditeur à plusieurs jeux
- Un jeu peut avoir plusieurs tags
- Un tag peut être associés a plusieurs jeux

## Entites A et B

## Contenu du seed
Jeu : 
    - Super Smash Bros Melee (Nintendo, Combat, Multijoueur, 3)
    - Modern Warfare 4 (Activision, Combat, Multijoueur, 18)
    - GTA 6 (Rockstar Games, Action-aventure, 18)
    - Fortnite (Epic Games, Battle-royal, Multijoueur, 12)
    - Minecraft (Mojang, Aventure, Multijoueur, 3)

Editeur : 
    - Rockstar Games (1998, Etats-Unis)
    - Activision (1979, Etats-Unis)
    - Nintendo (1947, Japon)
    - Epic Games (1991, Etats-Unis)
    - Mojang (2009, Suède)

Tag :
    - Combat
    - Multijoueur
    - Action-aventure
    - Battle-royal
    - Aventure

## Ce qui est mis en avant sur la page d'accueil

Les jeux sont mis en avant en fonction de la note que vous leurs attribués, les jeux les mieux notés apparaissent sur votre page d'acceuil en fonction de leurs date d'ajout.

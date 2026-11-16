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
- Jeu (Editeur, Date de Sortie, Tag, Nom, PEGI, noteSur20)
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
Entité A : les jeux vidéos
Entité B : les éditeurs
Entité C : les tags (on ne part pas avec une liste figé de tag. De nouveaux pourraient émerger) 

## Contenu du seed
Jeu : 
    - Nintendo, 21/11/2001, Combat, Super Smash Bros Melee, Multijoueur, 3, 18
    - Rockstar Games, 19/11/2026, Action-aventure, GTA 6, 18, 20
    - Activision, 23/10/2026, Combat, Call of Duty Modern Warfare 4, 18, 13
    - Mojang, 17/05/2011, Aventure, Minecraft, 3, 16
    - Epic Games, 25/08/2017, Multijoueur, Fortnite, 16, 17


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

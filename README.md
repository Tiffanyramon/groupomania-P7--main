# p7groupomania


Contexte:

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues.

La première version du projet:

- Doit être codé en JavaScript et respecter les standards WCAG
- Utilisation  d'un framework front-end JavaScript qui est React.js
- Base de données utilisation de l'outil DBeaver
- Utilisation de MySQl base de données relationnelle

Spécifications fonctionnelles:

- Page d'inscription
- Page de connexion
- Page d'acceuil
- Système de like 

Détails de la fonctionnalité de connexion

- Possibilité de se déconnecter
- Session persistante pendant connexion
- Données connexion sécurisées

Création d’un post

- Création d'un post 
- Post doit pouvoir contenir texte/image
- Pouvoir modifier et supprimer ses posts

Rôle administrateur

- Création d'un utilisateur administrateur
- Droit de modifier/supprimer sur tout les post du réseau social

Identité graphique

- Police Lato
- Couleur : - Primaire #FD2D01
            - Secondaire #FFD7D7
            



Technologie utilisées:

Frontend: React.js
Backend: Node.js 
Database: MySQL



Packages: 

BACKEND : 

- bcrypt
- cors
- dotenv
- express
- helmet
- jsonwebtoken
- multer
- mysql
- nodemon
- password-validator
- path


FRONTEND :

- @testing-library/react
- testing-library/jest-dom
- @testing-library/user-event
- axios
- react
- react-dom
- react-hook-form
- react-icons
- react-router
- react-router-dom
- react-scripts
- web-vitals



Installation 

Ouvrir un premier terminal: 

1. cd frontend
2. npm install 
3. Confguration du dossier image
   Crée un dossier image dans frontend/src/components
4. npm run start
5. Ouvrir un navigateur sur  http://localhost:3000 seulement 

Ouvrir deuxième terminal:

1. cd backend
2. npm install
3. npm install mysql --save
4. Configuration du fichier .env 
  Crée un fichier .env à la racine du projet du côté backend mettre la clé de chriffrement de: 
    - JWT_SECRET
    - DB_HOST
    - DB_USER 
    - DB_PASSWORD
    - DB_NAME
    - DB_PORT 
5. nodemon server


Importantion de la base de données 

Exécuter le backend sur http://localhost:3001 seulement






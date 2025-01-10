
# Application de Connexion Flutter

Cette application Flutter permet aux utilisateurs de se connecter et d'accéder à leur profil. Elle intègre des fonctionnalités de validation des formulaires, de gestion sécurisée des mots de passe, et d'optimisation de l'expérience utilisateur.

## Fonctionnalités

-   **Formulaire de Connexion** avec validation des entrées.
-   **Authentification Sécurisée** en utilisant le hachage des mots de passe.
-   **Écran de Profil** affichant les informations de l'utilisateur connecté.
-   **Indicateurs de Chargement** pour une meilleure expérience utilisateur.
-   **Design Réactif** adapté à différentes tailles d'écran.

## Résumé des Fichiers et Structure du Projet

### Structure du Projet :


    lib/
    ├── main.dart
    ├── screens/
    │   ├── login_screen.dart
    │   └── profile_screen.dart
    └── services/
        └── auth_service.dart

### Description :

-   **`main.dart` :**

    -   Point d'entrée de l'application.
    -   Configure le thème et définit `LoginScreen` comme écran initial.
-   **`screens/login_screen.dart` :**

    -   Contient le formulaire de connexion avec validation.
    -   Intègre `AuthService` pour gérer l'authentification.
    -   Affiche des indicateurs de chargement pendant le processus de connexion.
    -   Utilise `SingleChildScrollView` pour assurer la réactivité sur différentes tailles d'écran.
-   **`screens/profile_screen.dart` :**

    -   Affiche les informations du profil de l'utilisateur connecté.
    -   Offre une fonctionnalité de déconnexion.
-   **`services/auth_service.dart` :**

    -   Gère la logique d'authentification.
    -   Hache les mots de passe pour une sécurité accrue.
    -   Simule un délai pour imiter un appel réseau.

## Installation

1.  **Cloner le dépôt :**

    `git clone https://github.com/votre-utilisateur/votre-projet.git`

2.  **Naviguer dans le répertoire du projet :**

    `cd votre-projet`

3.  **Installer les dépendances :**

    `flutter pub get`

4.  **Lancer l'application :**

    `flutter run`

## Utilisation

1.  **Connexion :**
    -   Utilisez les crédentials suivants pour tester la connexion :
        -   **Utilisateur :** `user@example.com` / `userpass`
        -   **Admin :** `admin@example.com` / `adminpass`
2.  **Profil :**
    -   Après une connexion réussie, vous serez redirigé vers l'écran de profil affichant vos informations.
3.  **Déconnexion :**
    -   Utilisez le bouton de déconnexion pour revenir à l'écran de connexion.

## Contributions

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request pour améliorer ce projet.

## Licence

Ce projet est sous licence [MIT](https://opensource.org/license/mit).

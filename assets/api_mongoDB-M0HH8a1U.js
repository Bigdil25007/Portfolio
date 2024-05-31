const e={fr:{title:"API de gestion de défis d'éco-développement informatique",description:"Création et gestion d'une base de données MongoDB à l'aide de requêtes HTTP",sections:[{subtitle:"Contexte",paragraph:`Dans le cadre de nos cours sur les bases de données NoSQL, nous avons eu un mois pour créer une API à 2 permettant de communiquer avec. 
L'objectif était de nous familiariser avec les opérations CRUD de MongoDB (Create/Read/Update/Delete), tout en faisant travailler nos compétences en ExpressJS.
Notre API devait donc permettre de créer des défis d'éco-conception informatique puis de les modifier, supprimer ou récupérer sous format JSON.
`,image:"/projets/api_mongoDB/mongodb.jpg?url"},{subtitle:"Organisation du projet",paragraph:`Pour la partie base de données **(BdD)**, nous sommes passés par MongoDB Compass pour facilement ajouter des données et les visualiser pour vérifier leur intégrité tout du long du développement.
Une fois cette dernière exposée sur un serveur local, nous avons pu commencer à créer le serveur de l'API.

Avant de même de créer les opérations et les routes, nous avons dû prendre beaucoup de temps pour comprendre comment se connecter et intéragir avec la BdD. Nous sommes parti sur **Mongoose** (bibliothèque NodeJS pour MongoDB) qui facilite les requêtes mais demande la définition de **schémas et modèles** pour interpréter les résultats des requêtes.
Nous avons donc mis du temps au départ, mais pour avoir au final un schéma clair et précis.
La requête GET a ainsi été rapide à mettre en place puisque l'objectif était simplement de récupérer X défis aléatoires.

Pour les autres opérations, la tâche a été plus complexe car nous devions implémenter un système d'authentifaction avec **JWT** (JSON Web Token) pour sécuriser les routes, puisque POST, PUT et DELETE implique des modifications. Nous avons donc dû apprendre à générer ces jetons, les envoyer et les vérifier **(à l'aide d'un middleware)** pour autoriser ou non l'accès à certaines opérations.
Juste le fait de tester les jetons étaient compliqués car, au début, nous ne savions même pas comment les renseigner dans l'en-tête des requêtes HTTP.
`,image:"/projets/api_mongoDB/middleware.png?url"},{subtitle:"Point technique : Gestion d'erreur",paragraph:`Pour essayer d'avoir une API la plus proche de la réalité, nous avons pris le temps de gérer les erreurs en renseignant les bons codes en fonction de la situation. 
Par exemple, si un utilisateur tente de créer un défi sans être connecté, cela singifie qu'il tente d'accèder à une route non autorisé. On renvoie donc un message d'erreur ayant le statut 403 (Forbidden). De la même manière si du côté de serveur, une erreur se produit en faisant une opération, nous renverrons un code d'erreur 500 pour signfie que le problème vient du côté serveur.
Pour faire ça proprement dans le code, nous avons séparé en fichier les fonctions d'interactions avec la BdD et les gestions de routes. Si une erreur se produit dans la première fonction, on "throw" une erreur qui sera récupéré dans la route pour renvoyer le bon code d'erreur.

Pour faire tous ces test, nous avons créé un script JS qui permet d'envoyer une requête HTTP personnalisable.
`,image:"/projets/api_mongoDB/testRequest.jpg?url"},{subtitle:"Retour d'expérience et points d'amélioration",paragraph:`J'ai bien aimé faire ce projet puisque c'était la première fois que je créais une API. J'ai ainsi découvert MongoDB et ses avantages comme l'accès plus facile aux données pour des requêtes simples (comparé aux requêtes SQL).  

Comparé à d'autres projets web, celui-ci demandait plus de compréhension sur les requêtes HTTP (en-têtes, corps, méthodes, etc.) et la sécurité au niveau d'une API avec les jetons d'authentification. J'ai donc appris beaucoup de choses malgré le fait que ce projet était parmi les plus court que j'ai fait.
Et justement, puisque ce projet était assez réduit en terme de fonctionalités, il y a beaucoup de choses que j'aurais aimé ajouter comme :
 - Un système de recherche pour trouver des défis en fonction de leur nom voir même d'autres critères
 - Créer un site web de documentation pour lister les routes disponibles voir même permettre au site d'intéragir avec l'API pour avoir une interface graphique plutôt que de communiquer avec la commande "curl" ou bien un script JS.

Ce sont des idées qui pourraient être longues à rajouter mais permettrait de faire de cette API, un vrai projet d'envergure. 

Retrouvez le projet sur GitHub :
<a class="textLink" href="https://github.com/Bigdil25007/API_MongoDB">https://github.com/Bigdil25007/API_MongoDB</a>
`,image:""}],competences:[{techniques:[{skill:"MongoDB",value:90},{skill:"Curl",value:85},{skill:"ExpressJS",value:80},{skill:"Git",value:70}]},{concepts:[{skill:"Requêtes HTTP",value:95},{skill:"JWT (JSON Web Token)",value:85},{skill:"Réponses serveur (JSON et codes HTTP)",value:80}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]},en:{title:"API de gestion de défis d'éco-développement informatique",description:"Création et gestion d'une base de données MongoDB à l'aide de requêtes HTTP",sections:[{subtitle:"Context",paragraph:`Dans le cadre de nos cours sur les bases de données NoSQL, nous avons eu un mois pour créer une API à 2 permettant de communiquer avec. 
L'objectif était de nous familiariser avec les opérations CRUD de MongoDB (Create/Read/Update/Delete), tout en faisant travailler nos compétences en ExpressJS.
Notre API devait donc permettre de créer des défis d'éco-conception informatique puis de les modifier, supprimer ou récupérer sous format JSON.
`,image:"/projets/api_mongoDB/mongodb.jpg?url"},{subtitle:"Project Organization",paragraph:`Pour la partie base de données **(BdD)**, nous sommes passés par MongoDB Compass pour facilement ajouter des données et les visualiser pour vérifier leur intégrité tout du long du développement.
Une fois cette dernière exposée sur un serveur local, nous avons pu commencer à créer le serveur de l'API.

Avant de même de créer les opérations et les routes, nous avons dû prendre beaucoup de temps pour comprendre comment se connecter et intéragir avec la BdD. Nous sommes parti sur **Mongoose** (bibliothèque NodeJS pour MongoDB) qui facilite les requêtes mais demande la définition de **schémas et modèles** pour interpréter les résultats des requêtes.
Nous avons donc mis du temps au départ, mais pour avoir au final un schéma clair et précis.
La requête GET a ainsi été rapide à mettre en place puisque l'objectif était simplement de récupérer X défis aléatoires.

Pour les autres opérations, la tâche a été plus complexe car nous devions implémenter un système d'authentifaction avec **JWT** (JSON Web Token) pour sécuriser les routes, puisque POST, PUT et DELETE implique des modifications. Nous avons donc dû apprendre à générer ces jetons, les envoyer et les vérifier **(à l'aide d'un middleware)** pour autoriser ou non l'accès à certaines opérations.
Juste le fait de tester les jetons étaient compliqués car, au début, nous ne savions même pas comment les renseigner dans l'en-tête des requêtes HTTP.
`,image:"/projets/api_mongoDB/middleware.png?url"},{subtitle:"Technical Point : Error management",paragraph:`Pour essayer d'avoir une API la plus proche de la réalité, nous avons pris le temps de gérer les erreurs en renseignant les bons codes en fonction de la situation. 
Par exemple, si un utilisateur tente de créer un défi sans être connecté, cela singifie qu'il tente d'accèder à une route non autorisé. On renvoie donc un message d'erreur ayant le statut 403 (Forbidden). De la même manière si du côté de serveur, une erreur se produit en faisant une opération, nous renverrons un code d'erreur 500 pour signfie que le problème vient du côté serveur.
Pour faire ça proprement dans le code, nous avons séparé en fichier les fonctions d'interactions avec la BdD et les gestions de routes. Si une erreur se produit dans la première fonction, on "throw" une erreur qui sera récupéré dans la route pour renvoyer le bon code d'erreur.

Pour faire tous ces test, nous avons créé un script JS qui permet d'envoyer une requête HTTP personnalisable.
`,image:"/projets/api_mongoDB/testRequest.jpg?url"},{subtitle:"Feedback and Areas for improvement",paragraph:`J'ai bien aimé faire ce projet puisque c'était la première fois que je créais une API. J'ai ainsi découvert MongoDB et ses avantages comme l'accès plus facile aux données pour des requêtes simples (comparé aux requêtes SQL).  

Comparé à d'autres projets web, celui-ci demandait plus de compréhension sur les requêtes HTTP (en-têtes, corps, méthodes, etc.) et la sécurité au niveau d'une API avec les jetons d'authentification. J'ai donc appris beaucoup de choses malgré le fait que ce projet était parmi les plus court que j'ai fait.
Et justement, puisque ce projet était assez réduit en terme de fonctionalités, il y a beaucoup de choses que j'aurais aimé ajouter comme :
 - Un système de recherche pour trouver des défis en fonction de leur nom voir même d'autres critères
 - Créer un site web de documentation pour lister les routes disponibles voir même permettre au site d'intéragir avec l'API pour avoir une interface graphique plutôt que de communiquer avec la commande "curl" ou bien un script JS.

Ce sont des idées qui pourraient être longues à rajouter mais permettrait de faire de cette API, un vrai projet d'envergure. 

Find the project on Github :
<a class="textLink" href="https://github.com/Bigdil25007/API_MongoDB">https://github.com/Bigdil25007/API_MongoDB</a>
`,image:""}],competences:[{technicals:[{skill:"MongoDB",value:90},{skill:"Curl",value:85},{skill:"ExpressJS",value:80},{skill:"Git",value:70}]},{concepts:[{skill:"HTTP Requests",value:95},{skill:"JWT (JSON Web Token)",value:85},{skill:"Server responses (JSON and HTTP codes)",value:80}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]}};export{e as default};

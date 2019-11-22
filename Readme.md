1. Git init -> dodati git repo
   1.1 Staviti git ignore node_modules
2. Npm init -> inicijalizirati novi node projekat
3. npm install dependecies (express, express-validator, bcryptjs, config, gravatar, jsonwebtoken, mongoose, request), (nodemon i concurrently u devDependencies --save-dev)
4. napraviti server.js fajl
   4.1 import exress u server.js
   4.2 napraviti const PORT = process.env.PORT || 5000;
   4.3 napraviti app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //tilda se koristi za embedanje u comms
5. U package.json dodati skripte za pokretanje ("start": "node server",
   "server": "nodemon server")
6. Napraviti Config folder
   6.1 Napraviti default.json fajl gdje stoji connection string na bazu i jwt secret
   6.2 Napraviti db.js fajl sa funkcijom koja pravi konekciju na bazu
7. Napraviti folder routes a unutra folder api
   7.1 Napraviti rute za svaku funkcionalnost odvojeno (users, profile, posts, authentication, stores itd...)
   7.1.1 Rute treba da sadrze CRUD operacije
8. Napraviti folder models
   8.1 Napraviti schema za svaku kolekciju koja ce se nalaziti u bazi (User, Profile, Post, Store)
9. Rad u folderu Rute/api
   9.1 Dodavanje prve post metode za registraciju usera
   9.2 Koristenje express-validatora za validaciju proslijedjenih podataka

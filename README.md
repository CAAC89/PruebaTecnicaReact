1- Se debe instalar NVM for Windows en este link puedes descargarlo https://github.com/coreybutler/nvm-windows#readme
2- Se debe tener en cuenta la version de react y express a utilizar para este proyecto:
    -Ahora react tiene su version de next.js y su version de node respectiva:

    Para instalar el node adecuado:
    * nvm install 18.17.1
    * nvm use 18.17.1

    Para instalar express se debe:
    * npm install express
    * npm install express-generator -g (COMANDO QUE SIRVE PARA CREAR EL ESQUELETO DE EXPRESS)
    * express --view=pug myapp (COMANDO PARA CREAR EL PROYECTO CON TODAS SUS CARPETAS)

    * Esta depedencias son muy utiles:
    npm install mongoose dotenv morgan bcryptjs jsonwebtoken express-validator

        -mongoose: Para conectar y manejar MongoDB.
        -dotenv: Manejo de variables de entorno.
        -morgan: Middleware de logs.
        -bcryptjs: Para el hash de contraseñas si es necesario.
        -jsonwebtoken: Para autenticación con JWT.
        -express-validator: Para validar datos en las rutas.

3- Se debe ahora crear el proyecto de next
    
    kdir mi-proyecto-next
    cd mi-proyecto-next
    npx create-next-app@latest .
    npm run dev

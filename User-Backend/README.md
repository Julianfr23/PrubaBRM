#  API RESTful - Gestión de Usuarios

## Descripción
API RESTful para **crear, leer, actualizar y eliminar** usuarios (CRUD) utilizando la base de datos MongoDB.  
El proyecto incluye Docker + Docker‑Compose, documentación **Swagger UI**, y una arquitectura clara basada en MVC.

## Tecnologías utilizadas

Node.js version 20.11.1
Express.js 4.x Framework HTTP
MongoDB (imagen `mongo`) es la Base de datos
Mongoose  ODM 
Swagger UI Express  Docs interactiva 
Docker Compose Contenedores 

## Arquitectura implementada 

Se implemento una arquitectura MVC la cual se compone de la siguiente manera 
*La carpeta **models** es la que maneja el apartado del modelo o la informacion que manejara nuestra base de datos al momento del registro de usuario
*La carpeta **controllers** es donde se aplica la logica del negocio o donde se aplica las funciones a realizar nuestra API
*La carpeta **routes** es el apartado de la "vista" que manejaria el usuario que en realida son las peticiones HTTP que se utilizaria para usar los GET,PUT,DELETE y POST que requiera  el usuario
*Tambien se consta con una carpeta **config** la cual permite realizar la conexion de base de datos que en este proyecto se utilizo MongoDB
*La carpeta **swagger** esta incluye el archivo swagger.json la cual nos permite utilizar la herramienta swagger para tener la documentacion de la API RESTFull y tambien poder probarla en nuestro navegador levantando solo el proyecto sin la utilizacion de Postman
*Los demas archivos son necesarios para tener un funcionamiento correcto, como el archivo **.env** para definir el puerto donde se levanta el proyecto y otros archivos como para el uso de docker

## Comandos necesarios para levantar el proyecto

# 1 Clonar repositorio 

git clone https://github.com/TU_USUARIO/user-backend.git **TU_USUARIO** es solo reemplazarlo por el usuario propio tuyo de tu GitHub

# 2 Levantar el proyecto por Docker

docker compose up --build  recordar que este comando se ejecuta en la terminal 

# 3 Levantar el proyecto local

npm install instala las librerias necesarias 
npm start inicia el proyecto de forma local sin el uso de Docker 

## Que aprendi 

Aprendi a utilizar de una manera mas practica docker con mongodb algo que permite utilizar bases de datos que aveces no se instalan pero que funcionan de manera correcta gracias a Docker
Tambien aprendi a utilizar el ID automatico que genera mongoDb lo cual permite que sea un campo unico y que no se repita y util para la busqueda de usuarios y la misma eliminacion de usuarios

## Que mejoraria 

Implementaria mas campos de registro de usuario con tal de poder tener un registro mas completo.

Tambien implementaria otro ID de plus, pero entiendo que esto dependeria de los requisitos, a lo que me refiero es si el cliente final utiliza unos ID unicos que los puedan añadir y utilizar este campo para la busqueda, actualizacion y eliminacion de un usuario 
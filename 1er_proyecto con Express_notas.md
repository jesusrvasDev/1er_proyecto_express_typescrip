#  1. INICIO: Archivo package.json 

Contiene la informacion del proyecto, como el autor , las dependencias de desarrollo , las dependencias de produccion, los scripts necesario para arrancar la aplicacion , se genera escribiendo en la linea de comando en la capteta del proyecto (**npm init**).

- Express es una dependencia de desarrollo
- nodemon, es una libreria que permite hacer seguimento a los archivos de la aplicacion en la medida que sufren cambios y actualizarlos en tiempo real , es como el modo watch..

## Contenido del packge.jason (Investigar más de las opciones de este archivo)
    
 **-scripts:**

*dev (arranca servidor modo desarrollo):* Se coloca el comando que quieres que se ejecute en a consola:
- Se coloco **nodemon index.js** (antes de agregar TypeScript)
- Se coloco **nodemon src/index.ts** luego de agregar TypeScript y la configuracion de tsconfig.json

# 2. CREANDO UN SERVIDOR CON EXPRESS

Lo primero que debemos hacer es importar la libreria de express, al crear el packagejson se creo la carpera node_modules, alli tenemos en local la libreria de express, para usarla en el proyecto la importamos, por lo general en javascript usamos import, pero en node al momento de la grabacion de este curso usaron commonJS.

Para crear el servidor, creamos una instancia de la clase, funcion o metodo de express, usando **const app= requiere('express')**

Hasta ese momento solo creamos el servidor, sin embargo no le hemos dicho por que puerto se va a comunicar, esto ya es parte de la confuiguracion del servidor, esto lo realizamos con el metodo:

**app.listen(4000,(req,res)=>{**

**console.log("Servidor funcionado...")**
   
**}**

**)** 

Si abres el navegador se visualizara el mensaje *CANNOT GET/* , esto es por que por defecto el servidor busca renderizar la raiz del proyecto **'/'** , pero aun no le hemos indicado que es lo que va a renderizar, lo cual nos lleva a otra de las ventajas de express, que permite agregar las librerias que necesites en el proyecto, en este caso usaremos la libreria **routing** para configurar y distribuir las rutas del proyecto.


# 3. COMO REINICIAR EL SERVIDOR AUTOMATICAMENTE CADA VEZ QUE HACEMOS CAMBIOS

## - Con el modo watch

**node --watch index.js**

Se reinicia el servidor cada vez que se modifica el archivo index.js, se puede agregar un script al archivo package.json, con la linea de codigo anterior (en la propiedad script) y cuando vayamos a iniciar el servidor en modo watch, solo ejecutamos en la linea de comandos la linea:

**npm run:dev**

## - Instalando una libreria que se llama nodemon:

Aqui se entra en materia de instalar dependencias de desarrollo y de producion. Esta seria una libreria que se utiliza en desarrollo la instalamos en la consola con:

- **npm i -D nodemon**
- **npm i --save-dev nodemon**

*Observacion:* 

- Si se usa la libreria nodemon, se debe quitar del script el modo --swatch
- En caso de error, es posible que un puerto este en uso, usamos el comando **npx kill-port 4000**

# 4. COMO AÑADIR TypeScript AL PROYECTO (video 14, Es la configuracion de Typescript):

TypeScrip es un lenguaje de programacion fuertemente tipado, es un leguaje que se compila, luego el ejecutable queda en lenguaje Javascript. En el servidor se sube código javascript a producción.

Una vez se ha escrito el codigo en TypeScrip, este se compila a JavaScript por medio del **TypeScriptCompiler**

Express no soporta TypeScript directamente pero se puede instalar y configurar por medio del archivo   tsconfig.json  y algunas dependencias 

NestJS y otros freameworks ya incluyen TypeScript

## **Para añadir typeScript al proyecto:**

*TypeScript* es una dependencia de desarrollo, en el servidor solo corre el codigo javascript una vez se compile. instalamos mediante la terminal

**npm i -D typescript ts-node** 

El archivo de configuracion de typescript se llama:

**tsconfig.json:** Este archivo se crea manualmente, sin embargo la IA me indico que ejecutando tsc --init, se creaba , lo intente y me dio error

Al crearse el archivo **tsconfig.json** se procede a agregar las configuraciones, estas serian algunas de sus opciones de configuracion: 
 
 ### *1. compilerOptios:*

 #### 1.1 outdir: 

Indico donde quiero que se guarde el archivo de salida de la compilacion, es el proyecto, se elige que cree el directorio /dist

#### *1.2 rootDir:* 

Es el directorio principal donde se guardara el codigo fuente del proyecto, /src   

#### *1.3 lib:*

Aqui se indica la lista de bibliotecas y caracteristicas que quieres que esten disponibles en el codigo de TypeScrip, ESNext,le decimos que queremos utilizar la nueva sintaxis, es decir la version mas reciente de ECMACScript
    
#### *1.4 target:*

Se refiere al nivel de la version (mas nueva o mas antigua) a la cual vamos a compilar TypeScript, la version mas nueva ESNext, por lo general nodeJS siempre tiene buen soporte a lo mas nuevo que hay en javascript, le decimos que queremos compilar con la ultima sintaxys EMACScript 
    
#### *1.5 moduleResolution:*

Se refiere a la sintaxys de importacion de los modulos import y from, tambien se coloca la mas reciente EMACScript
    
#### *1.6 module:* 

La forma en como se van a compilar los modulos, igual que la anterior EMACScript 
    
#### *1.7 stric:* 

Ejecuta TypeScript en un modo no tan estricto (false), si se quiere en un modo estricto cambiara (true)

#### *1.8 sourceMap:*

Es un archivo que se genera para permitir hacer debug (Depurar) a la aplicacion, nos da una referencia a codigo original de TypeScript, true se genera el archivo.
    
#### *1.9 esmoduleInterop:*

Permite manejar ambas sintaxys CommonJS y EMACScript, puede ser que tenga que instalar una libreria que no este soportada con EMACScript
    
#### *1.10 declaration:*

Permite la generacion de los archivos con extension .d y .ts , ya que una vez compilados q javascrit, se van a perder los tipados de los datos , sirve de referencia a los usuarios dl codigo para ver que valor espera cierta funcion o que tipo es cierta variable refiriendose al codigo original.

### 2. include:

Es un arreglo, donde agregamos la ruta donde estan los archivos que queremos compilar, en build de este proyecto , cambiamos la extenion del archivo index, de .js a .ts, esto lo permite la opcion de configuracion include.

De esta forma **tsconfig.ts** es el soporte para **Typescript** para este proyecto

# 5. COMO COMPILAR EL CÓDIGO DEL PROYECTO (Video 15)

Para compilar el código del proyecto es necesario, agregar al archivo package.json , el script para la ejecucion del comando del proyecto, agragamos la linea ("build": "tsc") , (tsc, significa typescript compiler)

En entre las opciones de compilacion dentro del archivo tsconfig.json, podemos habilitar o deshabilidar si queremos o no los archivos .d.ts (declaration) y los .map (sourceMap) luego de la compilacion del codigo. Cuando se complila se aprecia mejor cuando se habilitan o no estas opciones , ya que no te aparecen los archivos .d.ts y .map en la carpeta /dist

Para servir el proyecto, lo hacemos desde el achivo dist/index.js , por lo tanto agregamos en los scrips de el archivo package.json, la linea ("start":node dist/index.js), finalmente servimos con npm start. Ya que start no necesita el run para arrancar.

IMPORTANTE: Cada script en el package.json , sirve versiones o modos.

- **npm run dev:**  (Este comando genera el modo desarrollador, es donde trabajo y voy observando las modficaciones del codigo en el momento que las realizo)
- **npm run bulid:**  (Este comando genera el codigo que voy a servir en el modo o vista de Produccion)
- **npm start:** (Este comando de genera la vista o el modo produccion, es servir la aplicacion al cliente)
  
# 6. SEPARANDO LA CREACION DEL SERVIDOR EN SU PROPIO ARCHIVO (Video 16)

## *server.ts:* 

Se crea un archivo aparte llamado **server.ts** , y alli colocamos el codigo de creacion de la aplicacion , que seria la  creacion de la variable **const app=express()** y la peticion de llamado y respuesta a la pagina principal.
- **app.get('/',(resq,res)=>{res.sen("Ahora el servidor tiene su configuracion en un archivo aparte")}).**

Una vez separado el archivo del servidor, para vincularlo al archivo donde estan las rutas debemos importar al archivo index (donde estan la rutas) la consiguracion del servidor que ya separamos, eso lo hacemos importando.
    
**import server from './server'** : El nombre de la importacion es irrelevante ya que agregamos export default en la configuracion del servidor 

# 7. CREANDO UN ARCHICVO DE ROUTING (VIDEO 17)

Un archicvo de rauter es un archivo .ts con todas las rutas, se utiliza una funcion o libreria de express , por lo que no se crea otra instancia de express si no que solo se importa la libreria **Router** es decir **import {Router} from 'Expresss'** , esto se hace en el archivo **router.ts** que vas a crear , peparando asi las rutas y la creacion del servidor, que inicialmente se habia creado asi cuando se inicio el curso. 

Como sabemos, existen diferentes tipos de peticiones, get, post, delete,update, se utiliza em metodo **.use** de express, para que en el rauter cuando se procese la peticion, se consideren todas las rutas del archivo routing, es decir haga un mapeo coorecto de todas las rutas en el archivo routing.

# 8. CREANDO EL ROUTING PARA LA AUTENTICACION (Video 18)

Se agrega comentario en archivo de router , que diga que alli, ira el codigo de la authenticacion

Los navegadores solo soportan peticiones get y post, pero no se recomida el uso de de peticiones get en los formularios , ya que los datos del usuario quedan en la url del navegador

Los formularios cuando son de registro,se usa el metodo post y cando son de consulta , se usa el metodo get

Los navegadores solo soportan peticiones get y post

Cuando usamos la peticion post en el router , la pagina no se puede vizualizar en el navegador. 

Como hasta este punto aun no se va a crear la aplicacion de Reac (implicaria crear el formulario y todo lo demas), por eso debemos simular las peticiones tipo post que enviaremos al navegador, para ello podemos usar postman, insomnia o thunder client 

# 9. HABILITAR LECTURA DE DATOS EN EL SERVIDOR 

Express no viene configurado por defecto para poder leer o recuperar lectura de datos, esta propiedad hay que habilitarla con express.json en el archivo de configuración del servidor **server.ts** y se hace con la linea de codigo

**app.use(express.jason())**

# 10. USANDO POSTMAN PARA SIMULAR PETICIONES POST (Video 19) 

Basicamente se utilizan para ahorrar tiempo y poder probar peteciones post y otras , que aunque se pueden probrar desde el navegador , nos evita todo el trabajo de crear un formulario, con la definicion de todos los campos etc, aca probamos la peticion y su posible respuesta de una vez.

Se utilizan herramientas como postaman, thunder client, insomnia,  para probar las rutas (endpoints) y asi validar que se envie y reciba la informacion entre el servidor y el cliente. 

- **Habilitar lectura de datos enviados al servidor:** Se debe configurar el servidor para que lea archivos **.json**. Eso se hace en el archivo **server.ts** agregando la linea **app.use(express.json())**, de esta manera se logra recuperar los datos que se envian al servidor, para vizualizarlos podemos hecer con console.log sobre resq.body y veremos los datos de la simulacion en la consola del servidor.

# 11. QUE ES UN ORM Y PARA QUE SIRVE 

**ORM:** Son las iniciales de *Objet Relational Mapping*. Es una tecnica mediante la cual se utiliza los datos en una base de datos como si fuesen objetos en un leguaje de programacion orientado a objetos,es decir utilizando paradigma de Programacion orientada a Objetos.

**NodeJS,** tiene una gran cantidad de ORM's que se instalan como dependencias via **npm**. 

## Ventajas de usar un ORM 

- Facilidad para escribir código que interactue con la base de datos (Se evita el trabajo de limpiar datos, preparar la conexión ,configurar la conexión y probar que todo salga correctamente)
- Velocidad en el desarrollo ya que tiene una gran cantidad métodos para crear , listar, actualizar y eliminar los datos
- Seguriadad, al implementar un ORM los datos son sanitizados, evitando asi inyeccion de **SQL**

La sintaxis **SQL** y la que utiliza el **ORM** son parecidas pero no son iguales. La sintaxis del ORM varia dependiendo de la libreria, pero en lineas generales se amolda a la sintaxys de programacion orientada a objetos de JavaScript . El nombre de la clase punto el metodo y entre parentesis los parametros.

**Ejemplo:**  

- **- SQL:** INSERT INTO 'table'('name') VALUES ('Jesus')
 
- **- ORM:** User.create({name:'Jesus'})

 Otra gran ventaja es que con el ORM usamos el mismo lenguaje de programacion que usamos para desarrollar la aplicacion, que que es javascript. 

 ## ORM MAS COMUNES 
 - Sequalize
 - Prisma
 - Mongoose
 - TypeORM
    
Para este proyecto se usa Mongoose.

**Mongoose:** Es un **ORM** para nodeJS. **ORM** es *Objet Relation Mapping*

*Mongoose*, es un **ODM** que simplifica bastantes tareas y puede ser la herramienta mas madura de este tipo para nodeJS.

En **monngoos** defines modelos con la forma que tendran los datos almacenados en tu base de datos  , tambien tiene una gran cantidad de metodos para agregar , eliminar, y actualizar los datos.

*nota:* Haciendo analogía con las bases de datos relacionales, lo que en Una base de datos relacional es una tabla en Mongo es una *Colección* y a lo que se le llama registro es un *Documento*

# 12.CONECTAR EL PROYECTO CON LA BASE DE DATOS 

Para conectar el proyecto con MongoDB , se crea la base de datos en Mongo, bueno cree fue un closter , alli en la parte de seguridad de mongo te pregunta como te quieres conectar a la base de datos , para este proyecto se eligio conectarse con drivers, te da una direccion url, en la que debes cambiar los datos de usuario y contraseña, al final de esa url luego de mong.net/ " Se coloca el nombre de la base de datos con la que se va a conectar, el profesor dice en el video que si no existe mongo la crea"

Támbien se crea una carpeta dentro de **/src**, llamada **/config** allí se crea un archivo que se usa para toda la configuración de la base de datos llamado **db.ts**, lo primero que debemos hacer es llamar la libreria *mongoose* con **import mongoosee from "mongoose"** 

Luego se crea una constante , llamada **connectDB** mediante una función asincróna anónima , El código va a el **try** cuando la conexión es exitosa y va al **cath** cuando hay un error en la conexión, para vizualizar el error en la consola del servidor se puede usar **console.log(error.message)**  

El la parte de **try**  se usa un metodo que es agregado gracias a la libreria que agregamos inicialmente **mongoose.connet** y gracias que estamos trabajando typescript , si colocas el cursos dentro de los parentesis donde van los parametros, te indica que debes agregar **URI:String** , un string de conexión, que es el que ya obtuvimos en MongoAtlas.

Para que se realice la conexión a la vez que se inicie el servidor , debemos llamar la conexión desde el archivo de configuración del servidor **server.ts**, esto lo hacemos con **import ¨{connectDB} from ".src/config/db.ts"**

*nota:*

1. El profesor indica que el estuvo buscando en la información que arroja en el servidor **console.log(connection)**, que es la información de la conexión y señala que hay dos variables que toma de allí para generar la linea donde re-escribe la linea de código donde crea la variable **URL** , llamandola URL2
Investigar sobre template string*

# 13. AGREGANDO COLOR AL CLI 

Con esta dependecia o libreria, se busca resaltar los errores producto de la ejecución del código en la terminal, inclusive cuando este desplegada en producción , por ello es que se agrega como dependencia de producción.

Para usar la libreria se usa el metodo colors, seguido del punto, es decir , **colors.** automticamente apareceran los colores disponibles, bagrund , tipos de letra , etc.. las cuales se aplicaran al texto que este dentro del parentesis del método colors que se creo(), así se va anidado los metodos a los que se les aplicara formato en el argumento del console.log.

#### Ejemplo:  
**console.log(colors.bgred.white(error.message))**

En profesor recomienda colocar las dependencias de node_modules en las primeras lineas de los imports, luego las depedecias de modulos de archivos locales.

# 14. CREANDO UN SCHEMA PARA LA BASE DE DATOS

Aneteriormente creamos una conexión a una base de datos de mongo que aún no tiene estructura, tablas, registros, en el caso de Mongo colecciones y documentos. Usamos postman para probar que el servidor se escontraba recibiendo solicitudes desde el cliente(navegador) con información tipo json en el cuerpo de esas solicitudes 

Ahora para poder agregar datos a la base de datos , es necesario definir el modelo o modelos de los datos , para el caso de mongo y el tipo de conexión que establecimos (drivers) usamos el ODM Mongoose, en este ODM es necesario en primer lugar crear el Schema y luego asociar ese schema al modelo que vamos a usar

El schema se refiere a la forma que van a tener los datos, estructura, en otros ORM se define el schema junto con el modelo, pero en mongoose se define primero el schema y luego se le asocia el modelo 

- En primer lugar creas una carpeta en la carpeta del código fuente **src**, en esa carpetas guardaras los modelos que se creen, la carpeta la llamamos **Models**.

- En segundo lugar creas un archivo con el nombre del modelo , la convención dice que es con la primera letra en mayuscula y el resto en minuscula, por ejemplo , **Users.ts**

- En tercer lugar importas mongoose al archivo donde vas a crear el modelo

- En cuarto lugar , creas el schema al creando el objeto schema:
  **const userSchema = new schema { }**

En quinto lugar , vas definiendo el esquema de los datos dentro de las llaves , que son como un objeto de javascript. Nombre de los campos, tipos de datos, sin son obligatorios, etc . Un enfoque muy importante es el de la Orientación a Objetos, es decir, por ejemplo si definimos el Modelo **Users.ts** dentro de esa colección estaran todos los objetos y cada campo son atributos de esos objetos.

Finalmente, para definir el modelo se usa un método de mongoose ya llamado **model** el cual recibe dos argumentos , El nombre del modelo que estas creando  y el nombre de Schema que va a tener asociado.

Todo lo anterios no es código de Javascript , es código de mongoDB

# 15. INFERENCIA Y PRIMITIVE TYPES EN TYPESCRIPT 

Cuando colocamos el cursor sobre la inicialización de una variable, veremos con typescript nos realiza lo que se llama INFERENCIA, es decir de acuerdo a lo que esta escrito en el código el infiere los tipos de datos primtivos que puede tomar la variable en la que esta puesto el cursor.

Si luego de la variable o fucion colocas dos puntos , podrás exigir que la variable o funcion tome determinado tipo de dato, que puede coincidir o no con lo que infiere typescript, de alli que el código pódria marcar un error y dejar de funcionar.

Por ejemplo: 

- **let x : string = 10** , la "x" se subraya en rojo indicando un error y ademas si se pocisiona el cursor sobre la "x", aparecera retroalimientacion en la que te explica por que se genera error y te sugiere que hacer para eliminar ese error.

### Que son los Primitive Types:
Son los tipos de datos que typescript soporta de forma nativa. Estos son: number, string, boolean, null, undefined

En el caso de los arreglos hay una sintaxys especial para crearlos, no exixten como Primitve Type.

# 16. TYPES E INTERFACE EN TypeScript

Dos de las caracteristicas que más se utilizan en TypeScript son Types e interface. Ambas pueden ser utilizadas incluso de forma intercambiable, hay muy poca diferencias entre ambos y en la comunidad vas a encontrar ejemplos con ambos.

Es una forma de crear una estructura o agrupar propiedades de un objeto

Express ya viene con una serie de Types ya definidos que puedes utilizar

Para crear el type se procede mediante la sintaxys:

- **type nombredelType = {Aqui van los tipos de datos }** 

Para crear las interfece se procede mediante la sintaxys

- **interface nombredelIterface {Aqui van los tipos de datos }**  // sin el signo '='

En coclusion los types fuerzan tipos de datos a estructura de datos mas complejos. 

# 17. UTILITY TYPES EN TYPESCRIPT, HERENCIA Y MAS

    
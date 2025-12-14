################ INSTALACION ###################
1- Instalar node:  https://nodejs.org/es/download
CDM Si esta instalado: npm -v 

2- Crear Carpetas 
Cypress/EndtoEnd

3- Abrir la carpeta en Visual Studio Code
Cypress/EndtoEnd 

4- Abrir la consola dentro de la carpeta Cypress/EndtoEnd 
npm init

- Llenar los datos
package name: (cypress) -> enter
version: (1.0.0)  -> enter                                                                                                                                                                     
description: Proyecto de Cypress                                                                                                                                                      
entry point: (index.js)  -> enter                                                                                                                                                            
test command: test                                                                                                                                                                   
git repository: https://github.com/jormarsikiu/cypress_jt.git                                                                                                                         
keywords: e2e cypress testing framework automation                                                                                                                                    
author: Jormar Turizo                                                                                                                                                                 
license: (ISC)  -> enter                                                                                                                                                                        
type: (commonjs)  -> enter 

5- Se creara un archivo entro de la carpeta Cypress
package.json donde estan los detalles del proyecto

6- Instalar cypress dentro del proyecto
npm install cypress --save-dev
Se creara una carpeta llamada node_modules y una devDependencies en package.json

################ FIN INSTALACION ###################

################## CONFIGURACION ###################
 
1- Pegar "cy:open": "cypress open" en package.json en scripts

Ejemplo:
"scripts": {
    "test": "test",
    "cy:open": "cypress open"
  }, 

Guardar el archivo                                                                     

2- Ejecutar npm run cy:open

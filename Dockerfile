# Primera capa: Instalar dependencias
FROM node:18

WORKDIR /myapp
COPY package.json /myapp/
RUN npm install

# Segunda capa: Copiar el código fuente
COPY  . .

# Capa final: Configuración del comando de inicio
#FROM source AS final
CMD npm start
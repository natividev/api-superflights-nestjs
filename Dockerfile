FROM node:18

# Crear un subdirectorio para la aplicación y configurarlo como directorio de trabajo
WORKDIR /app

# Copiar todos los archivos necesarios al contenedor
COPY tsconfig.json package*.json prisma ./

# Instalar dependencias
RUN npm i

# Instalar dependencias y generar el cliente Prisma
RUN npm install -g prisma
RUN npx prisma generate

# Copiar el código fuente y construir la aplicación
COPY . .
RUN npm run build

# Exponer el puerto y ejecutar la aplicación
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

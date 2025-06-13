# Usar imagen oficial de Node.js
FROM node:20.11.1

# Crear directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa la app
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "src/index.js"]

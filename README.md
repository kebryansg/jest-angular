# Configuración Jest Schematic

### 1. Eliminamos los node-modules y el archivo package-log.json

```sh
rm -rf node_modules
rm -rf package-lock.json
```

### 2. (Opcional) Instalamos el paquete jest schematics y el CLI de angular versión 12 globalmente

```sh
npm install -g @briebug/jest-schematic
npm install -g @angular/cli@12
```

### 3. Agregamos jest schematics a nuestro proyecto

```sh
ng add @briebug/jest-schematic
```

### 4. Modificamos el archivo package.json y cambiamos los test

```sh
"test": "ng test",
"test:coverage": "ng test --coverage",
"test:watch": "ng test --watch",
"test:deploy": "ng test --watch=false --coverage",
```

### 5. Revisamos que los `@types/jest` y `jest` se encuentren en la versión `27.0.0`

```sh
"@types/jest": "27.0.0",
"jest": "27.0.0",
```

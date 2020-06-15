# autofi-backend-challenge
AutoFi backend code challenge

## prerequisites
```
npm version: 6.14.5
node version: 12.14.0
```

# getting started
npm init

## external dependencies installed
```
1. npm i typescript
2. npm i express @types/express
3. npm i mongoose @types/mongoose
4. npm i multer @types/multer
5. npm uuidv4
6. npm i @types/jest @types/node jest ts-jest
```

## update package.json

"scripts": {
  "tsc": "tsc",
  "start": "tsc && node dist/server.js",
  "test": "jest"
},

## generate tsconfig.json file
```
1. npm run tsc -- --init
2. copy the following inside the tsconfig.json

{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "lib": ["es2015"]
  }
}
```

## build the solution
```
npm start
```

## test the solution
```
npm test
```

## endpoints
```
Type: POST
Url: http://localhost:2021/api/csv/process-csv
Example using fetch:

  var formdata = new FormData();
  formdata.append("providerName", "jose");
  formdata.append("file", fileInput.files[0], "autofi-extra-columns.csv");

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch("localhost:2021/api/csv/process-csv", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

```

```
Type: GET
Url: http://localhost:2021/api/csv
```

# documentation
https://mongoosejs.com/docs/

# author
```
Jose Ricardo Chacon Vargas
```
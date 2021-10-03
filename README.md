# Url Shortener API

## What is it?
Url Shortener API shortens long Internet addresses and renders them in a shortened version. Cryptic encryption is used for this.

This is made up of a generated code, if this does not already exist. A click on this shortened URL generates a redirect via a redirect.


## Requirement

[NodeJs](https://nodejs.org/en/) as runtime environment that runs on the V8 engine and executes JavaScript code.



## Installation

- To Get project:

   ```git clone https://github.com/Lo-Agency/mojtaba-url-shortener-api.git```
- Duplicate the ```.env.example``` file and name it ```.env``` and set your own environment variables
- To Install dependencies 
```npm install```
- To Setup database: ```npm run db-setup```
- To Run the app server in development mode: ```npm run dev```



## Usage

| End Point  | Method | Action 
| ------------- | ------------- | ------------- |
| /url/api/shorten | POST |  To get a short url using the correct structure. [POST Request body structure](#post-request-body)
| / | GET | To get the long url, which already has a short url in the database 

## POST Request Body

{
    "longUrl": "*your long url*"
}
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
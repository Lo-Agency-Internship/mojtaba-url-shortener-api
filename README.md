# Url Shortener API

## What is it?
Url Shortener API shortens long Internet addresses and renders them in a shortened version. Cryptic encryption is used for this.

This is made up of a generated code, if this does not already exist. A click on this shortened URL generates a redirect via a redirect.
Consider the following URL Structure:

<img src="https://user-images.githubusercontent.com/57585712/137588301-dbb929ff-2c1a-46c2-97be-64d3ab242216.png" width="500" height="200">

In case of a shortened url, instead of **path** and **Fragment identifier** a unique code is substituted, which is 6 or 7 characters long.
For example, this url:

https://www.amazon.de/-/en/b?node=562066&ref=gwmm_27c8d0f0&pf_rd_r=58Z2JYK6S9RDGTDWFPA5&pf_rd_p=42fd9feb-7feb-4dba-afe3-38eb6d3d751c&pd_rd_r=010fda2e-bfb8-4b98-8aa3-7ccc04f27255&pd_rd_w=uj4nc&pd_rd_wg=rjEq3&ref_=pd_gw_unk

is converted to:

https://www.amazon.de/gwGXFgE

If you install the project locally and your computer is both client and server, the shortened url will look like this:

https://localhost/gwGXFgE


For a long url there is only a shortened url in the database, the generated code is randomized and for this example was **gwGXFgE**

&nbsp; &nbsp;


## Requirement

[NodeJs](https://nodejs.org/en/) as runtime environment that runs on the V8 engine and executes JavaScript code.

[Yarn](https://classic.yarnpkg.com/en/) as a popular package manager for the JavaScript programming language.

&nbsp;

## Installation

- To Get project:

   ```git clone https://github.com/Lo-Agency/mojtaba-url-shortener-api.git```
- Duplicate the ```.env.example``` file and name it ```.env``` and set your own environment variables
- To Install dependencies: 
```yarn install```
- To Setup database: ```yarn run db-setup```
- To Run the app server in development mode: ```yarn run dev```

&nbsp;

## Usage

| End Point  | Method | Action 
| ------------- | ------------- | ------------- |
| /api/url/shorten | POST |  To get a short url using the correct structure. [POST Request body structure](#post-request-body)
| / | GET | To get the long url, which already has a short url in the database 

&nbsp;

## POST Request Body

{
    "longUrl": "*your long url*"
}

&nbsp;    
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

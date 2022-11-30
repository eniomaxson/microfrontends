
# S2.5 

A system developed to help the health care attendace proccess and the administrative stuff related to it.

This project is a base architecture proposoal to build the frontend solution based on microfrontends style offer by single-spa.

# Premisses

1. It must be able to work on IE11 browser
2. It must be developed to support microfrontend architecture

# How to run the project

## Docker

To run this project it's recommended to have a docker enviroment configured and docker-compose installed.

Navigate to the root directory and run the commonad bellow:
`docker-compose up -d`


## KeyCloak 

Keycloak is an open source identity provider developed in java that follows the Openid Connect specification and offers features like authentication and authorization out of the box. 

After running the command above you should get a keycloak container listen on port 8080, so you'll just need to configure it:

1. Create a new realm 
2. Configure a new client to that realm with openid-connect 
3. Configure client to be able to accept requets from yuor dev environment
    - 3.1 Valid redirect URIs 
    - 3.2 Web origins
4. Create a user for tests porpuse
5. Configure the accounts project with the URL from your realm and set the client secret




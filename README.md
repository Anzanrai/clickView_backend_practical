# Backend Practical

## Run Server
The api has been developed using NodeJS so NodeJS and npm is required to be installed in your system to run the server.

- Clone the repository to your machine
- Checkout master branch
- install dependencies using **npm install**
- run the server using **npm run dev** command
- server runs at default port of **8080**

**Note:** I have implemented filesystem as persistance of data. So making changes would reflect in the same playlists.json file.

## API Endpoints

### Create a new playlist 
  - url: **http://localhost:8080/api/playlists**
  - method: POST
  - payload: {
                "name": "some string for playlist name"
              }
  - if videos and description data are not provided at the time of post request, playlist is create with empty array of videos and empty string for description
  
### Get all playlist
  - url **http://localhost:8080/api/playlists**
  - method: GET
  - payload not required
  
### Update an existing playlist
  - url **http://localhost:8080/api/playlists/<id>**
  - method: PATCH
  - payload: {
                "name": "some string",
                "description": "some string",
             }
              

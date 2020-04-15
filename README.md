# Basic Health Units Plataform

Fron-end platform written in ReactJs to consume data from [Basic Health Units API](https://gitlab.com/victor.h.souza.vieira/basic-health-units).

#### Preparing the Development Environment

To install the Development Environment, access the [Docker Readme](docker/README.md) and follow the instructions.

## Environment variables

To run the project, create a `.env.local` file with the following environment variables:

```
    .env.local
    
    REACT_APP_GOOGLE_MAP_URL=https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
    
    REACT_APP_GOOGLE_API_KEY=
    
    REACT_APP_PRIVATE_KEY=
    
    REACT_APP_API_HOST=http://localhost:3000

```

##### REACT_APP_GOOGLE_API_KEY

For this variable it is necessary to create a [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=pt-br),
as it is used to load the **Google Maps** in the system.

##### REACT_APP_PRIVATE_KEY


This variable is used to perform the encryption of the data that will be saved in the browser coockies, this key is private, so do not leave it available on the system.

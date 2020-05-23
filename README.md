# Basic Health Units Plataform

Plataform production link: https://basic-health-units.herokuapp.com/

Fron-end platform written in ReactJs to consume data from [Basic Health Units API](https://github.com/OvictorVieira/basic-health-units-api).

#### Preparing the Development Environment

To install the Development Environment, access the [Docker Readme](docker/README.md) and follow the instructions.

## Environment variables

To run the project locally, create a `.env` at the root of the project with the following environment variables:

```
    REACT_APP_GOOGLE_MAP_URL=https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
    
    REACT_APP_GOOGLE_API_KEY=
    
    REACT_APP_PRIVATE_KEY=
    
    APP_API_HOST=http://localhost:3000
```

##### APP_GOOGLE_API_KEY

For this variable it is necessary to create a [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=pt-br),
as it is used to load the **Google Maps** in the system.

##### APP_PRIVATE_KEY

This variable is used to perform the encryption of the data that will be saved in the browser coockies, this key is private, so do not leave it available on the system.

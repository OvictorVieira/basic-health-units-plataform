# Basic Health Units Plataform

Plataform production link: https://basic-health-units.herokuapp.com/

Fron-end platform written in ReactJs to consume data from [Basic Health Units API](https://gitlab.com/victor.h.souza.vieira/basic-health-units).

#### Preparing the Development Environment

To install the Development Environment, access the [Docker Readme](docker/README.md) and follow the instructions.

## Environment variables

To run the project locally, create a `.env` at the root of the project with the following environment variables:

```
    APP_GOOGLE_MAP_URL=https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
    
    APP_GOOGLE_API_KEY=
    
    APP_PRIVATE_KEY=
    
    APP_API_HOST=http://localhost:3000
```

##### APP_GOOGLE_API_KEY

For this variable it is necessary to create a [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=pt-br),
as it is used to load the **Google Maps** in the system.

##### APP_PRIVATE_KEY


This variable is used to perform the encryption of the data that will be saved in the browser coockies, this key is private, so do not leave it available on the system.

![Ubs listings](https://firebasestorage.googleapis.com/v0/b/images-d10d2.appspot.com/o/basic-health-units%2FCaptura%20de%20Tela%202020-04-14%20a%CC%80s%2023.06.02.png?alt=media&token=f7d4be24-a170-4388-a552-61870ad7016f)

## Deploy

The deployment was done via Gitlab Pipelines, you can access the pipelines by [clicking here](https://gitlab.com/victor.h.souza.vieira/basic-health-units-plataform/pipelines).


Before deploying to Heroku, it is necessary to run the tests and then, if no test fails, the button to perform the deployment on heroku is released.

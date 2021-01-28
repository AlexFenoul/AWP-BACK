# AWP-API 

## Prérequis
`- Docker`

## Install project 
`Docker-compose up`

## Tout les Endpoint sont sécurisé via une authentification JWT (Sauf auth/login)

### Authentification
Headers : {
    Authorization : JWTToken
}

`3 heures de vie`

## API Endpoint

# `Auth`

## POST

### `/register`
>  Créer un utilisateur
#### Body 
|Name|Type|Description|Required|
|---|---|---|---|
|pseudo|string|Pseudonyme de l'utilisateur|True|
|password|string|Mot de passe de l'utilisateur|True|
|favorites|array|Id Image|False|

#### Example
    {
      "pseudo" : "Pluton",
      "password" : "ETy4$szQ4",
      "favorites" : [ "01", "04" ]
    }

#### Response
> Status : 201 Created
    { 
        success: true, 
        message: "Success"
    })
    
### Error
> Status : 400 Bad Request
#### Example
    {
      "username": "Pluton",
    }

### `/login`
>  Permet de s'identifier à l'API
#### Body 
|Name|Type|Description|Required|
|---|---|---|---|
|pseudo|string|Pseudonyme de l'utilisateur|True|
|password|string|Mot de passe de l'utilisateur|True|

#### Example
    {
      "pseudo": "Pluton",
      "password" : "ETy4$szQ4"
    }

#### Response
> Status : 200 OK

    {
        "success": true,
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAxMjdiNTg3NjhkZjAwMDQ4NGQ2NWUzIiwicHNldWRvIjoiSGFkZXMifSwiaWF0IjoxNjExODMyMzA3LCJleHAiOjE2MTE4NDMxMDd9.9ZkVBBn6CtOz6swd_tPRyDKM9KVHpCy4w419ZVcBu9w",
        "user": {
            "_id": "60127b58768df000484d65e3",
            "pseudo": "Pluton",
            "favorite": [
                "600f0fcf00418b00aa3be42c"
            ]
        }
    }
    
### Error
> Status : 400 Bad Request
#### Example
    {
      "pseudo": "Pluton",
      "pwd" : "ETy4$szQ4"
    }

# `User`
## GET

### `/`
>  Récupérer les informations de l'utilisateurs identifié
#### Response
> Status : 200 OK
    
    {
        "_id": "60127b58768df000484d65e3",
        "pseudo": "Pluton"
    }
    
### `/favorites`
>  Récupérer les images favorites de l'utilisateur identifié

#### Response
> Status : 200 OK

    {
        "_id": "60127b58768df000484d65e3",
        "favorite": [
            "600f0fcf00418b00aa3be42c"
        ]
    }

## PUT

### `/`
>  Modifier les informations de l'utilisateur identifié
#### Body 
|Name|Type|Description|Required|
|---|---|---|---|
|pseudo|string|Pseudonyme de l'utilisateur|False|
|favorites|array|Id Image|False|

#### Example
    {
        "pseudo": "Hades",
        "favorites" : [
                "007",
                "5845425452"
        ]
    }

#### Response
> Status : 200 OK

    {
        "_id": "60127b58768df000484d65e3",
        "pseudo": "Hades",
        "favorite": [
            "007",
            "5845425452"
        ],
        "createdAt": "2021-01-28T08:52:41.049Z"
    }
    
### Error
> Status : 400 Bad Request
#### Example
    {
      "password": "aksugyfgvh",
    }

# `Image`

## GET

### `/`
>  Récupérer toutes les images

#### Response
> Status : 200 OK
    
    [
        {
            "_id": "600f0fcf00418b00aa3be42c",
            "name": "Image 1",
            "description": "Photo",
            "url": "urlFictive",
            "createdAt": "2021-01-25T18:37:03.135Z",
            "updatedAt": "2021-01-25T18:37:03.135Z",
            "__v": 0
        },
        {
            "_id": "60127f29cc54b700f1ac91c8",
            "name": "name",
            "description": "description",
            "url": "BURL",
            "createdAt": "2021-01-28T09:08:57.253Z",
            "updatedAt": "2021-01-28T09:08:57.253Z",
            "__v": 0
        }
    ]

### `/:id`
>  Récupérer une image via son Id 

#### Parameters 
|Name|Type|Description|Required|
|---|---|---|---|
|id|queryParam|Id d'une image|true|

#### Response
> Status : 200 OK

    {
        "_id": "60127f29cc54b700f1ac91c8",
        "name": "name",
        "description": "description",
        "url": "BURL",
        "createdAt": "2021-01-28T09:08:57.253Z",
        "updatedAt": "2021-01-28T09:08:57.253Z",
        "__v": 0
    }

## POST

### `/`
>  Créer une image
#### Body 
|Name|Type|Description|Required|
|---|---|---|---|
|name|string|Nom de l'image|True|
|description|string|Description de l'image|True|
|url|string|Url de l'image|True|

#### Example
    {
        "name": "Image1",
        "description": "Description1",
        "url": "UrlFictive"
    }

#### Response
> Status : 201 Created
    {
    "success": true,
    "message": "Success"
    }
    
### Error
> Status : 400 Bad Request
#### Example
    {
      "name": "Img2",
      "url": "Url2"
    }

# Error

## 400 : Mauvaise structuration des données
> Status: 400 Bad Request

## 401 : L'utilisateur n'est pas authentifié
> Status: 401 Unauthorized

## 404 : Mauvaise URL ou ressource demander non trouvé
> Status: 404 Not found

## 500 : Erreur du côté serveur
> Status: 500 Internal Server Error

define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Request JWT token",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "jwt",
            "description": "<p>JWT token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register",
    "name": "Register",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of Note objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/note",
    "title": "Create note",
    "name": "CreateNote",
    "group": "Note",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Created note.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/note/index.js",
    "groupTitle": "Note"
  },
  {
    "type": "delete",
    "url": "/note/:id",
    "title": "Delete a note",
    "name": "DeleteNote",
    "group": "Note",
    "version": "0.0.0",
    "filename": "app/routes/note/index.js",
    "groupTitle": "Note"
  },
  {
    "type": "get",
    "url": "/note",
    "title": "Request all notes",
    "name": "GetNotes",
    "group": "Note",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of Note objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/note/index.js",
    "groupTitle": "Note"
  },
  {
    "type": "get",
    "url": "/note/:id",
    "title": "Request Note information",
    "name": "GetNotes",
    "group": "Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Notes unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the note.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the note.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/note/index.js",
    "groupTitle": "Note"
  },
  {
    "type": "delete",
    "url": "/user/me",
    "title": "Delete current account",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/me",
    "title": "Request current account information",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Request all Users information",
    "name": "GetUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>User objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/me",
    "title": "Update current account information",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/me/notes",
    "title": "Get notes created by this account",
    "name": "GetNotes",
    "group": "User_Note",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the note.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the note.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user/index.js",
    "groupTitle": "User_Note"
  }
] });

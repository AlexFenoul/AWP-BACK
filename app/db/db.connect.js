const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = require.main.require('./app/models/user');
const ImageSchema = require.main.require('./app/models/image');

const db = require('./db.config');
const User =  mongoose.model('User', UserSchema);
const Image = mongoose.model('Image', ImageSchema);

mongoose.connect(`mongodb://${db.host}/${db.name}`, db.opts);

mongoose.connection.on('connected', () => {
  mongoose.model('User', UserSchema);
  mongoose.model('Image', ImageSchema);
});

const passwordHash = bcrypt.hashSync('test123');

var userTest = new User( { 
  pseudo: 'test',
  password: passwordHash
})

User.countDocuments({ pseudo: userTest.pseudo }, (err, count) => {
  if (count !== 0) {
    return 
  } else {
    userTest.save(function (err, user) {
      if (err) return console.error(err);
      console.log("User : " + user.pseudo + " saved to users collection.");
    });
  }
})


var images = 
    [
        {
            "name": "Mona Lisa",
            "description": "Louvre - Paris - Léonard de Vinci",
            "url": "https://via.placeholder.com/300"
        },
        
        {
            "name": "La création d'Adam",    
            "description":"Chapelle Sixtine - Rome - Michel-Ange",
            "url": "https://via.placeholder.com/300"
        },
        
        {
            "name": "La jeune fille à la perle",
            "description": "Musée Mauritshuis - La Haye - Johannes Vermeer",
            "url": "https://via.placeholder.com/300"
        },
        
        {
            "name": "Les Nymphéas",        
            "description": "Répartie dans les galeries les plus renommées - Le monde - Claude Monet",
            "url": "https://via.placeholder.com/300"
        },
        
        {
            "name": "Le cri",
            "description": "Musée Munch - Oslo - Edvard Munch",
            "url": "https://via.placeholder.com/300"
        }
    ] 

  images.map(image => {
    Image.countDocuments({ name: image.name }, (err, count) => {
      if (count === 0) {
        var imageToSave = new Image( { 
          name: image.name,
          description: image.description,
          url: image.url
        })
        imageToSave.save(function (err, user) {
          if (err) return console.error(err);
          console.log("Image : " + image.name + " saved to image collection.");
        });
      }
    })
  })



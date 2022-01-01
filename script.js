/*var request = require('request');
var fs = require('fs');
var options = {
    'method': 'POST',
    'url': 'http://localhost:3000/api/user/store',
    'headers': {},
    formData: {
        'nom': 'younes',
        'prenom': 'di',
        'num': '0696969696',
        'email': 'younesdi@gmail.com',
        'pass': '0000',
        'date': '2021/01/13',
        'avatar': [
            fs.createReadStream('/C:/Users/HP/Downloads/calorie_289345.png')
        ]
    }
};
request(options, function(error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
}); */
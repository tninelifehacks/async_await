let fetch = require('node-fetch');
let axios = require('axios');


function getData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(5 + 22);
        }, 1000);
    });
}

module.exports.count = async function fetchAsync() {

    return await axios.get('http://www.speechify.in/internship/android_task.php')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });


};



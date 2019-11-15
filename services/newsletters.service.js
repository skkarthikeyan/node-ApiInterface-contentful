const axios = require('axios');
const config = require('./../config/config.json')['staging'];

export const getNewsLetters = async () =>{ 
    return await axios.get(
        config.baseUrl
        +'/spaces/'+config.space
        +'/environments/'+config.environments
        +'/entries?access_token='+config.accessToken
        +'')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}
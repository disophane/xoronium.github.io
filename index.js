window.alert("idk what im doing tbh.")

const axios = require('axios');
const fs = require('fs');

// Get the user's public IP address
async function getIPAddress() {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data.ip;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Write the IP address to a text file
function writeIPToFile(ip) {
    fs.writeFile('visitorIPs.txt', ip + '\n', { flag: 'a+' }, (err) => {
        if (err) throw err;
        console.log('IP address saved to visitorIPs.txt');
    });
}

// Get the user's IP address and write it to the text file
getIPAddress().then((ip) => {
    writeIPToFile(ip);
});
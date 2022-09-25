const fetch = require('node-fetch');

module.exports = async function getData(url, name, query, token) {
    const urlString = `${url}${name}?${query}`;
    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return await response.json();
}
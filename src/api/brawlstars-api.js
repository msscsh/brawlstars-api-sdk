
const fetch = require('node-fetch');

const config = {
    headers: {
        key: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImNkNzdiMWRhLWZhNWEtNGExZS1iN2ViLTUwYjYzMjk1NzI1YiIsImlhdCI6MTY4NDA0MjcxNiwic3ViIjoiZGV2ZWxvcGVyL2M4ZjQ0NTg1LTI5ZWUtMzJhNi01ODgyLTU0ZDFjZjZhNDFiMCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkyLjQzLjc5LjE3MCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Yonwxbi1HHxqbSmHvY8qa3NNFhfvTKM1x1ywppQjtUhvVMkMarNMUBtdeo4_n1OGInHU2FE6_1Zdw0p3dUcUTA',
        Accept: 'application/json'
    }
};


async function getPlayer(playerTag) {

    const response = await fetch(`https://api.brawlstars.com/v1/players/${playerTag}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}

module.exports = {getPlayer};
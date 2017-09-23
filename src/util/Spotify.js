const clientId = '3aadb18c5971487c94b47b33656776b8';
const authorizationUrl = 'https://accounts.spotify.com/authorize';
const searchUrl = 'https://api.spotify.com/v1/search';
const uri = 'http://localhost:3000';
let accessToken;
let expirationTime;

const Spotify = {
  getAccessToken() {
    if (expirationTime && Date.now() > expirationTime) {
      expirationTime = undefined;
      accessToken = undefined;
      window.location.hash = '';
    }
    if (!accessToken) {
      if (window.location.hash.includes('#access_token')) {
        accessToken = window.location.hash.match(/(#access_token=)(.*?)(&)/)[2];
        const expiresIn = window.location.hash.match(/(expires_in=)(\d*)/)[2];
        const now = Date.now();
        expirationTime = now + (expiresIn * 1000);
      } else {
        window.location.href = `${authorizationUrl}?client_id=${clientId}&redirect_uri=${uri}&response_type=token`;
      }
    }
  },
  search(term) {
    Spotify.getAccessToken();

    const fetchUrl = `${searchUrl}?type=track&q=${term}`;
    return window.fetch(fetchUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          console.log('Request failed!');
          return '';
        },
      ).then(
        (jsonResponse) => {
          if (jsonResponse.tracks.items) {
            return jsonResponse.tracks.items.map(
              item => ({
                id: item.id,
                title: item.name,
                album: item.album.name,
                artist: item.artists[0].name,
              }),
            );
          }
          console.log('no valid answer');
          return [];
        },
      );
  },
};

export default Spotify;

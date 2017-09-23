const clientId = '3aadb18c5971487c94b47b33656776b8';
const authorizationUrl = 'https://accounts.spotify.com/authorize';
const apiBaseUrl = 'https://api.spotify.com/';
const uri = 'http://localhost:3000';
let accessToken;
let expirationTime;
let userId;

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
    const fetchUrl = `${apiBaseUrl}v1/search?type=track&q=${term}`;
    return fetch(fetchUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then(
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
              uri: item.uri,
            }),
          );
        }
        console.log('no valid answer');
        return [];
      },
    );
  },
  save(title, tracks) {
    Spotify.getAccessToken();
    const uriList = tracks.map(
      track => track.uri,
    );
    const getUserNameUrl = `${apiBaseUrl}v1/me`;
    fetch(getUserNameUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        console.log('Request failed!');
        return '';
      },
    ).then(
      (jsonResponse) => {
        if (jsonResponse.id) {
          return jsonResponse.id;
        }
        console.log('received bad format');
        return '';
      },
    ).then(
      (id) => {
        userId = id;
        const createPlaylistUrl = `${apiBaseUrl}/v1/users/${userId}/playlists`;
        return fetch(createPlaylistUrl, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}` },
        }).then(
          (response) => {
            console.log(response);
          },
        );
      },
    );
  },
};

export default Spotify;

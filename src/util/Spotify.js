const clientId = '3aadb18c5971487c94b47b33656776b8';
const authorizationUrl = 'https://accounts.spotify.com/authorize';
const apiBaseUrl = 'https://api.spotify.com/v1';
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
        window.location.href = `${authorizationUrl}?client_id=${clientId}&scope=playlist-modify-public&redirect_uri=${uri}&response_type=token`;
      }
    }
  },
  search(term) {
    Spotify.getAccessToken();
    const fetchUrl = `${apiBaseUrl}/search?type=track&q=${term}`;
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
        if (jsonResponse.tracks) {
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
  createPlaylist(id, title, uriList) {
    userId = id;
    const createPlaylistUrl = `${apiBaseUrl}/users/${userId}/playlists`;
    return fetch(createPlaylistUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ name: title }),
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
      (playlistId) => {
        const populatePlaylistUrl = `${apiBaseUrl}/users/${userId}/playlists/${playlistId}/tracks`;
        return fetch(populatePlaylistUrl, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}` },
          body: JSON.stringify({ uris: uriList }),
        });
      },
    );
  },
  save(title, tracks) {
    Spotify.getAccessToken();
    const uriList = tracks.map(
      track => track.uri,
    );
    const getUserNameUrl = `${apiBaseUrl}/me`;
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
        Spotify.createPlaylist(id, title, uriList);
      },
    );
  },
};


export default Spotify;

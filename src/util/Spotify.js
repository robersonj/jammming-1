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

  getUserId() {
    if (userId) {
      return new Promise(
        resolve => resolve(userId),
      );
    }
    const getUserNameUrl = `${apiBaseUrl}/me`;
    return fetch(getUserNameUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        console.log('Request failed: userId not obtained');
        return '';
      },
    ).then(
      (jsonResponse) => {
        if (jsonResponse.id) {
          userId = jsonResponse.id;
          return jsonResponse.id;
        }
        console.log('received bad format');
        return '';
      },
    );
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
              cover: item.album.images[2].url,
              artist: item.artists[0].name,
              uri: item.uri
            }),
          );
        }
        console.log('no valid answer');
        return [];
      },
    );
  },

  createPlaylist(title, uriList) {
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
    Spotify.getUserId().then(
      () => {
        Spotify.createPlaylist(title, uriList);
      },
    );
  },
};


export default Spotify;

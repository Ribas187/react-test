import axios from 'axios';


const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_TOKEN}`,
  },
});

export default api;

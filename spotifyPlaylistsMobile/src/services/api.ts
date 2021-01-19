import axios from 'axios';

const token = 'BQAHUCQO2omq5STvVcZnoxmL0aIlnIoBVUGX4lJS3kq0wLoiHfVl0hrIFsC2X5-JX_eJKlFn_2jQbejMmm7guE5p2RbRHik3NFDZPBKrlo1EqSYAnfbnP8-ZiL2BoHLWNvnNtMhluQ'

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default api;

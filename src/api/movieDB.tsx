import  axios  from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'cdcc4f120aad5e429bec4eb004d0f868',
    language: 'es-ES',
  },
});


export default movieDB;

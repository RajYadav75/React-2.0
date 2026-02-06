import axios from 'axios';

const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(request =>
{
  console.log('Starting Request ', request);
  return request;
},
  (config) =>
  {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer &{token}`;
    }
    return config;
  },
  (error) =>
  {
    console.error('Request Error', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) =>
{
  return response;
}, 
(error) => {
  if(error.response && error.response.status === 401){
    console.log('Unauthorized');
  }
  if(error.response && error.response.status === 501){
    console.log('Servre Error!');
  }
  return Promise.reject(error);
}
)

export default api;
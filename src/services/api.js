import axios from 'axios';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID PbOovuyOX681XwQAxnl_CLgmeXagG1qYjsBmR-oQG-M'
  }
});

export const searchImages = async (query, page = 1) => {
  const response = await unsplashApi.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
    }
  });

  return response.data;
};
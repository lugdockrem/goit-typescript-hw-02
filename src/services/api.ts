import axios from 'axios';
import { UnsplashResponse } from '../types';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID PbOovuyOX681XwQAxnl_CLgmeXagG1qYjsBmR-oQG-M'
  }
});

export const searchImages = async (query: string, page: number = 1): Promise<UnsplashResponse> => {
  const response = await unsplashApi.get<UnsplashResponse>('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
    }
  });

  return response.data;
};
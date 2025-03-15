import axios from 'axios';
import { UnsplashResponse, Image } from '../types';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID PbOovuyOX681XwQAxnl_CLgmeXagG1qYjsBmR-oQG-M'
  }
});

interface SearchImagesResponse {
  images: Image[];
  total: number;
  totalPages: number;
}

export const searchImages = async (query: string, page: number = 1): Promise<SearchImagesResponse> => {
  const response = await unsplashApi.get<UnsplashResponse>('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
    }
  });

  const { data } = response;
  
  const formattedImages: Image[] = data.results.map(image => ({
    id: image.id,
    webformatURL: image.urls.regular,
    largeImageURL: image.urls.full,
    tags: image.alt_description || 'image',
    author: image.user.name,
    description: image.description || image.alt_description || 'No description available',
    likes: image.likes,
    downloads: image.downloads,
    location: image.location?.name
  }));

  return {
    images: formattedImages,
    total: data.total,
    totalPages: data.total_pages
  };
};
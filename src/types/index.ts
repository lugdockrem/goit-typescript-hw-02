export interface Image {
    id: string;
    webformatURL: string;
    largeImageURL: string;
    tags: string;
    author: string;
    description: string;
    likes: number;
    downloads?: number;
    location?: string;
  }
  
  export interface UnsplashImage {
    id: string;
    urls: {
      regular: string;
      full: string;
    };
    alt_description: string | null;
    description: string | null;
    user: {
      name: string;
    };
    likes: number;
    downloads?: number;
    location?: {
      name: string;
    };
  }
  
  export interface UnsplashResponse {
    results: UnsplashImage[];
    total: number;
    total_pages: number;
  }
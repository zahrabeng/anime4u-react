export default interface allData {
  mal_id: number;
  url: string;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score?: any;
  scored_by?: any;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis?: any;
  background?: any;
  season?: any;
  year?: any;
  broadcast: {
    day?: any;
    time?: any;
    timezone?: any;
    string?: any;
  };
  producers: any[];
  licensors: any[];
  studios: any[];
  genres: Genre[];
  explicit_genres: any[];
  themes: any[];
  demographics: Demographic[];
  trailer: {
    youtube_id?: any;
    url?: any;
    embed_url?: any;
    images: {
      image_url?: any;
      small_image_url?: any;
      medium_image_url?: any;
      large_image_url?: any;
      maximum_image_url?: any;
    };
  };
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface To {
  day?: any;
  month?: any;
  year?: any;
}

export interface Prop {
  from: From;
  to: To;
}

export interface Aired {
  from: Date;
  to?: any;
  prop: Prop;
  string: string;
}

export interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

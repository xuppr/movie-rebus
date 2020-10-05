export interface RebusSlidesData {
  levels: Levels;
}

export interface Levels {
  [level: string]: MovieSlidesTitles;
}

export interface MovieSlidesTitles {
  [title: string]: MovieSlideInfo;
}

export interface MovieSlideInfo {
  imgUrl: string;
  solved: boolean;
}

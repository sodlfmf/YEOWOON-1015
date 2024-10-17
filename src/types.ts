export interface campaignType {
  id: number;
  title: string;
  subTitle: string;
  scriptKor: string;
  scriptEng: string;
  ImgUrl: string;
  Imgs: string[];
  video: string;
}

export interface campImgType {
  id: number;
  ImgUrl: string;
  title: string;
}

export interface artistImgType {
  id: number;
  ImgUrl: string;
  artist: string;
}

export interface artistType {
  id: number;
  artist: string;
  born: number;
  logoImgUrl: string;
  Instagram: string | string[];
  WebSite: string;
  Email: string;
  scriptKor: string;
  scriptEng: string;
  ImgUrl: string;
  Imgs: string[];
  hasSeries: string | boolean;
  video: string;
}

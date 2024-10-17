import { artistData } from "@/mock/artwork/artist";
import { campaignData } from "@/mock/artwork/campaign";
import { artistType, campaignType } from "@/types";
import { create } from "zustand";

interface CampaignSelectType {
  campaignSelect: number;
  selectedCampaignData: campaignType[];
  setCampaignSelect: (selection: number) => void;
}

interface ArtistSelectType {
  isModalTypeArtist: boolean;
  isSecondPage: boolean;
  artistSelect: number;
  selectedArtistData: artistType[];
  setArtistSelect: (selection: number) => void;
}

type ArtworkSelectType = CampaignSelectType & ArtistSelectType;

export const createArtworkStore = create<ArtworkSelectType>((set) => ({
  isModalTypeArtist: false,
  isSecondPage: true,
  campaignSelect: 0,
  artistSelect: 0,
  selectedCampaignData: [
    {
      id: 0,
      title: "",
      subTitle: "",
      scriptKor: "",
      scriptEng: "",
      ImgUrl: "",
      Imgs: [""],
      video: "",
    },
  ],
  selectedArtistData: [
    {
      id: 0,
      artist: "",
      born: 0,
      logoImgUrl: "",
      Instagram: "",
      WebSite: "",
      Email: "",
      scriptKor: "",
      scriptEng: "",
      ImgUrl: "",
      Imgs: [""],
      hasSeries: "",
      video: "",
    },
  ],

  setCampaignSelect: (selection: number) => {
    set((state) => ({
      campaignSelect: selection,
      selectedCampaignData: campaignData.filter(({ id }) => id === selection),
      isModalTypeArtist: false,
    }));
  },
  setArtistSelect: (selection: number) => {
    set((state) => ({
      artistSelect: selection,
      selectedArtistData: artistData.filter(({ id }) => id === selection),
      isModalTypeArtist: true,
    }));
  },
}));

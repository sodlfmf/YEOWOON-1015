import { createArtworkStore } from "@/store/artwork-store";
import { createArtworkModalStore } from "@/store/modal-store";
import { artistImgType } from "@/types";
import Image from "next/image";

const ArtistImgItem = ({ imgProps }: { imgProps: artistImgType }) => {
  const { id, ImgUrl, artist } = imgProps;
  const { isArtworkModalOpen, setIsArtworkModalOpen } =
    createArtworkModalStore();
  const { setArtistSelect } = createArtworkStore();

  return (
    <>
      <Image
        onClick={() => {
          setIsArtworkModalOpen(isArtworkModalOpen);
          setArtistSelect(id);
        }}
        src={ImgUrl}
        alt={artist}
        width={330}
        height={200}
        style={{}}
      />
      <p>{artist} X S.tree </p>
    </>
  );
};

export default ArtistImgItem;

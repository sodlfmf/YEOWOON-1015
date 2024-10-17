import { createArtworkStore } from "@/store/artwork-store";
import { createArtworkModalStore } from "@/store/modal-store";
import { campImgType } from "@/types";

import Image from "next/image";

const CampaignImgItem = ({ imgProps }: { imgProps: campImgType }) => {
  const { id, ImgUrl, title } = imgProps;
  const { isArtworkModalOpen, setIsArtworkModalOpen } =
    createArtworkModalStore();
  const { setCampaignSelect } = createArtworkStore();
  return (
    <>
      <Image
        onClick={() => {
          setIsArtworkModalOpen(isArtworkModalOpen);
          setCampaignSelect(id);
        }}
        src={ImgUrl}
        alt={title}
        width={330}
        height={200}
        style={{}}
      />
      <p>{imgProps.title}</p>
    </>
  );
};

export default CampaignImgItem;

import { createArtworkStore } from "@/store/artwork-store";
import Image from "next/image";
import "./content-campaign.scss";
const CampaignContent = ({ ...item }) => {
  const { selectedCampaignData } = createArtworkStore();
  return (
    <>
      {item.isSecondPage === false ? (
        <>
          <figure className="camp_artwork_img">
            {item.Imgs.map((img: string, i: number) => {
              return (
                <div key={i}>
                  <Image
                    src={`${img}`}
                    style={{}}
                    width={600}
                    height={400}
                    alt={`img-${i}`}
                  />
                </div>
              );
            })}
          </figure>
        </>
      ) : (
        <>
          {item.video === "" ? null : (
            <>
              <video
                className="campaign_video"
                loop
                muted
                autoPlay
                playsInline>
                <source src={`${item.video}`} type="video/mp4" />
              </video>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CampaignContent;

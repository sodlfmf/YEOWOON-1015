import Image from "next/image";
import "./content-artist.scss";

const ArtistContent = ({ ...item }) => {
  return (
    <>
      {item.isSecondPage === false ? (
        <>
          <figure className="artist_artwork_img">
            <Image
              src={`${item.ImgUrl}`}
              width={500}
              height={500}
              style={{}}
              alt={item.artist}
            />
          </figure>
          <label className="artwork_script">
            <p>{item.scriptKor}</p>
          </label>
        </>
      ) : item.video === "" ? (
        <div className="artist_imgs">
          {item.Imgs.map((img: string, i: number) => {
            return (
              <div key={i}>
                <Image
                  src={`${img}`}
                  alt={`${item.artist}-${i}`}
                  width={500}
                  height={500}
                  style={{}}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <video
            className="artist_video"
            loop
            muted
            autoPlay
            playsInline>
            <source src={`${item.video}`} type="video/mp4" />
          </video>
        </>
      )}
    </>
  );
};

export default ArtistContent;

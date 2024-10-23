import Image from "next/image";
import "./about-team-item.scss";
import { aboutTeam } from "@/mock/about/about";

const AboutTeamItem = () => {
  return (
    <div className="at_item_container">
      {aboutTeam.map(({ id, imgUrl, title, script }) => {
        return (
          <div key={id}>
            <Image
              className={`aboutTeam_img ${id}`}
              priority
              src={imgUrl}
              style={{}}
              width={380}
              height={480}
              alt={`aboutTeam-img-${id}`}
            />
            <div className="at_content">
              <h3 className="notobold">{title}</h3>
              <p>{script}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutTeamItem;

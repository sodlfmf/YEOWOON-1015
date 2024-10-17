import brand from "@/mock/brand.json";
import Image from "next/image";
import "./page.scss";
import MenuModal from "@/components/menu-modal";
const Brand = () => {
  return (
    <div className="brand">
      {brand.map((item) => {
        return (
          <div key={item.id} className="brand_container">
            <div className="brand_img">
              <Image
                src={item.imgUrl}
                alt={item.id}
                width={1080}
                height={1720}
              />
              <div>
                <Image
                  src={item.logo}
                  alt={item.id}
                  width={400}
                  height={160}></Image>
              </div>
            </div>
            <div className="brand_link">
              <div>
                <p>{item.determination}</p>
              </div>
              <div>
                <a href={item.instagram}>
                  <Image
                    src="/img/brandInsta.png"
                    alt="insta"
                    width={80}
                    height={80}></Image>
                </a>
                <a href={item.webpage}>
                  <Image
                    src="/img/brandWeb.png"
                    alt="wed"
                    width={80}
                    height={80}></Image>
                </a>
              </div>
            </div>
          </div>
        );
      })}
      <MenuModal />
    </div>
  );
};

export default Brand;

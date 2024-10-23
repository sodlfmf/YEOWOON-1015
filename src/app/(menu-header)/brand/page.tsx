import brand from "@/mock/brand.json";
import Image from "next/image";
import "./page.scss";
import MenuModal from "@/components/menu-modal";
import { KarlaMedium, kottaOne,notoSansBlack } from "@/fonts";
const Brand = () => {
  const fonts = [kottaOne,notoSansBlack]
  const fontClassname = fonts.map((font) => font.variable).join(" ")
  return (
    <div className={`brand ${fontClassname}`}>
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
                  <div className={item.font}>
                    <p>{item.determination}</p>
                  </div>
                <Image
                  src={item.logo}
                  alt={item.id}
                  width={400}
                  height={160}></Image>
              </div>
            </div>
            <div className="brand_link">
              <div className={KarlaMedium.className}>
                <a href={item.instagram}>
                  INSTA
                </a>
                <a href={item.webpage}>
                  SHOP
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

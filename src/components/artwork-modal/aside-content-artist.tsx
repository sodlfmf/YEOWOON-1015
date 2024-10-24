import Link from "next/link";

const ArtistAsideContent = ({ ...item }) => {
  return (
    <>
      <div className="artist_info">
        <h2>{item.artist}</h2>
        <p>Republic of Korea</p>
        {item.born === 0 ? null : <p>{item.born}</p>}
      </div>
      <div className="artsist_address">
        <p>
          {typeof item.Instagram === "string" ? (
            <>Instagram /{item.Instagram}</>
          ) : (
            item.Instagram.map((insta: string, i: number) => (
              <span key={i}>
                Instagram / &nbsp;
                <Link href={`http://instagram.com/insta`}>{insta}</Link>
              </span>
            ))
          )}
        </p>
        {item.WebSite === "" ? null : (
          <p>
            Website /&nbsp;
            <Link href={`http://${item.WebSite}`}>{item.WebSite}</Link>
          </p>
        )}
        {item.Email === "" ? null : <p>E-mail / {item.Email}</p>}
      </div>
    </>
  );
};

export default ArtistAsideContent;

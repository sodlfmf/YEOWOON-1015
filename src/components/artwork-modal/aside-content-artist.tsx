const ArtistAsideContent = ({ ...item }) => {
  return (
    <>
      <div className="artist_info">
        <h2>{item.artist}</h2>
        <p>Republic of Korea</p>
        {item.born === 0 ? null : <p>{item.born}</p>}
      </div>
      <div className="artsist_address">
        <span>Instagram /</span>
        {typeof item.Instagram === "string" ? (
          <p>{item.Instagram} </p>
        ) : (
          item.Instagram.map((insta: string, i: number) => (
            <div key={i}>
              <p>{insta}</p>
            </div>
          ))
        )}
        {item.WebSite === "" ? null : (
          <p>
            <span>Website /</span>
            <br /> {item.WebSite}/
          </p>
        )}
        {item.Email === "" ? null : (
          <p>
            E-mail /<br />
            {item.Email}
          </p>
        )}
      </div>
    </>
  );
};

export default ArtistAsideContent;

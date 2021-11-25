import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">MERN</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://res.cloudinary.com/dyyhowttt/image/upload/v1617636805/samples/landscapes/nature-mountains.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;

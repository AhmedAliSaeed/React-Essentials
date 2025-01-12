import headerImg from "../../../public/assets/react-core-concepts.png";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <img src={headerImg} alt="Header Img" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </div>
    </>
  );
}

export default Header;

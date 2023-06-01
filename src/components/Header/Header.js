import Button from "../Button/Button";
import "./Header.css";

const Header = ({ title, text }) => {
  return (
    <header>
      <img
        src="https://images.unsplash.com/photo-1685306314640-31a02b996d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="text-box">
        <h1>{title}</h1>
        <p>{text}</p>
        <Button>Button</Button>
      </div>
    </header>
  );
};

export default Header;

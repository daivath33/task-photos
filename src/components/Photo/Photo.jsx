import PropTypes from "prop-types";
import "./Photo.css";

const Photo = ({ imageUrl, title }) => {
  return (
    <div className="photo-card">
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

Photo.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

export default Photo;

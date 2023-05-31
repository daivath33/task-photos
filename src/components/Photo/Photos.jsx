import Photo from "./Photo";
import "./Photos.css";

const Photos = ({ data }) => {
  return (
    <>
      <div className="text">
        <h1>Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          odit doloremque quae facere magni? Veritatis optio eum et tempora
          cumque corrupti deleniti debitis obcaecati, magni, ducimus distinctio
          accusamus consequuntur doloremque.
        </p>
      </div>

      <div className="photos">
        {data.map((el) => (
          <Photo key={el.id} imageUrl={el.imageUrl} title={el.title} />
        ))}
        <Photo />
      </div>
    </>
  );
};

export default Photos;

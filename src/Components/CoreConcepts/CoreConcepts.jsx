import "./CoreConcepts.css";

function CoreConcepts({ image, title, description }) {
  return (
    <>
      <li>
        <img src={image} alt="comonents image" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </>
  );
}

export default CoreConcepts;

import "./heading.css";

function Heading(props) {
  // eslint-disable-next-line react/prop-types
  const { title, sectionHead } = props;

  return (
    <div className="heading d-flex flex-column mb-4">
      <p className="px-3 py-2 rounded text-center text-uppercase fw-medium mb-1">{title}</p>
      <h3 className="text-center">{sectionHead}</h3>
    </div>
  );
}

export default Heading;

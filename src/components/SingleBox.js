const SingleItem = (props) => {
  return (
    // <!-- the brging of card 1 -->
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title"> {props.boxObject.year}</h5>
        <p className="card-text">{props.boxObject.event} </p>
      </div>
    </div>
    //  <!-- the end of card -->
  );
};
export default SingleItem;

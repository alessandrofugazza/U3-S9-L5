const SingleComment = props => {
  return (
    <>
      <p className="m-0">
        <strong>Recensione: </strong>
        {props.review.comment}
      </p>
      <p className="m-0">
        <strong>Voto: </strong>
        {props.review.rate}
      </p>
    </>
  );
};

export default SingleComment;

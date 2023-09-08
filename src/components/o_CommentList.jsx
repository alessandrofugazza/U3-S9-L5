import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = props => {
  return props.reviews.map(review => (
    <ListGroup.Item key={review._id}>
      <SingleComment review={review} />
    </ListGroup.Item>
  ));
};

export default CommentList;

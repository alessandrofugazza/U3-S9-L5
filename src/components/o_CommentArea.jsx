import { Component } from "react";
import { Alert, ListGroup, Spinner } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    isLoading: true,
    hasError: false,
    reviews: [],
  };
  fetchReviews = async () => {
    this.setState({ isLoading: true });
    try {
      const asin = this.props.asin;
      const commentsUrl = "https://striveschool-api.herokuapp.com/api/comments/";
      const fetchUrl = commentsUrl + asin;
      const re = await fetch(fetchUrl, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTkyZGMwMzRmZjAwMTQwM2Y0ZmUiLCJpYXQiOjE2OTQwODcyMzMsImV4cCI6MTY5NTI5NjgzM30.h3t3Ck-2duA_c0NU-bVjwedissVciuKWnFsJSrFYRM8",
        },
      });
      if (re.ok) {
        const reviews = await re.json();
        this.setState({ reviews });
      } else {
        this.setState({ hasError: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  componentDidMount() {
    this.fetchReviews();
  }
  render() {
    return (
      <div>
        {this.state.hasError && <Alert variant="danger">Fetch error</Alert>}
        {this.state.isLoading && <Spinner animation="border" variant="warning" />}
        <ListGroup>
          {this.state.reviews.length === 0 && !this.state.hasError && !this.state.isLoading && (
            <ListGroup.Item>No one reviewed this book yet.</ListGroup.Item>
          )}
          <CommentList reviews={this.state.reviews} />
        </ListGroup>
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;

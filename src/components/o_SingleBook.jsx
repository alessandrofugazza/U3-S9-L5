import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  highlightSelected = () => {
    this.setState({ selected: !this.state.selected });
  };
  render() {
    return (
      <Card style={this.state.selected ? { border: "1.5px solid red" } : null}>
        <Card.Img
          onClick={this.highlightSelected}
          src={this.props.book.img}
          variant="top"
          style={{ height: "200px" }}
          className="object-fit-contain"
        />
        <Card.Body>
          <Card.Title className="fs-6">{this.props.book.title}</Card.Title>
          {this.state.selected && <CommentArea asin={this.props.book.asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

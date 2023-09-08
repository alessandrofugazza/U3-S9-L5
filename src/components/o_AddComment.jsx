import { Component } from "react";
import { Alert, Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    hasAlert: false,
    alert: { message: "", status: "", variant: "success" },
    review: {
      comment: "",
      rate: "3",
    },
  };
  handleChange = (propertyName, propertyValue) => {
    this.setState({ review: { ...this.state.review, [propertyName]: propertyValue } });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const asin = this.props.asin;
    const fetchUrl = "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      const re = await fetch(fetchUrl, {
        method: "POST",
        body: JSON.stringify({ ...this.state.review, elementId: asin }),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTkyZGMwMzRmZjAwMTQwM2Y0ZmUiLCJpYXQiOjE2OTQwODcyMzMsImV4cCI6MTY5NTI5NjgzM30.h3t3Ck-2duA_c0NU-bVjwedissVciuKWnFsJSrFYRM8",
          "Content-Type": "application/json",
        },
      });
      if (re.ok) {
        const newReview = await re.json();
        this.setState({
          hasAlert: true,
          alert: {
            message: "Recensione " + newReview._id + " lasciata con successo.",
            status: re.status,
            variant: "success",
          },
        });
        setTimeout(() => this.setState({ hasAlert: false }), 2500);
      } else {
        this.setState({
          hasAlert: true,
          alert: { message: "Errore reperimento dati", status: re.status, variant: "danger" },
        });
        setTimeout(() => this.setState({ hasAlert: false }), 2500);
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
        {this.state.hasAlert && (
          <Alert variant={this.state.alert.variant}>
            {this.state.alert.message}, status code: {this.state.alert.status}
          </Alert>
        )}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Commento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cosa ne pensi del libro?"
              value={this.state.review.comment}
              onChange={event => this.handleChange("comment", event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Valutazione</Form.Label>
            <Form.Select
              value={this.state.review.rate}
              onChange={event => this.handleChange("rate", event.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;

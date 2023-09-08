import { Container } from "react-bootstrap";

const Welcome = () => (
  <div className="p-5  rounded-3">
    <Container fluid className="p-5 bg-body-secondary border rounded-3">
      <h1 className="display-5 fw-bold">EpiBooks</h1>
      <p className="col-md-8 fs-4">Books for everyone!</p>
      <button className="btn btn-primary btn-lg" type="button">
        Buy now
      </button>
    </Container>
  </div>
);

export default Welcome;

import { Container } from "react-bootstrap";
import BookGenreRow from "./BookGenreRow";

import fantasyBooks from "../data/fantasy.json";
import historyBooks from "../data/history.json";
import horrorBooks from "../data/horror.json";
import romanceBooks from "../data/romance.json";
import scifiBooks from "../data/scifi.json";

const AllTheBooks = () => (
  <Container className="pt-2 pb-5">
    <BookGenreRow genre="Fantasy" books={fantasyBooks} />
    <BookGenreRow genre="History" books={historyBooks} />
    <BookGenreRow genre="Horror" books={horrorBooks} />
    <BookGenreRow genre="Romance" books={romanceBooks} />
    <BookGenreRow genre="Sci-fi" books={scifiBooks} />
  </Container>
);

export default AllTheBooks;

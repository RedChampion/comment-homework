import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
//updates state
class Saved extends Component {
  state = {
    books: []
  };
//starts as the component is mounted, updates state
  componentDidMount() {
    this.getSavedBooks();
  }
//gets saved books from the database
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          //sets results from books into state
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };
//function to delete books by ID. after deleting it sets state as updated api
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };
//renders page with react
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              {/* jumbotron being created with react */}
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {/* card with inserted list, listing all information from the database */}
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
//exports saved route
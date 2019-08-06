import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
//creates a class function called home that can be exported to App.js
class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };
//sets state as empty, allowing for information to be stored or added
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
//sets name to value in state on event.
  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      //function that hits the API, pulling books into state.
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
      //catch error, when books is empty it displayes an empty message.
  };
//submits the form after the getBooks function is hit
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };
//finds books id after it is saved
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);
//saves the information tied to the books as its stored.
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };//calls the getBooks function after the book is saved.

  render() {
    //creates html through react.
    return (
      <Container>
        <Row>
          <Col size="md-12">
            {/* creates jumbotron in react */}
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            {/* creates cards in react */}
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {/* creates a card that has a list, containing all of the books database information */}
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
//exports home
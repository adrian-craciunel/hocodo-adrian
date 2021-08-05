import React, { useEffect, useState } from 'react';

import { Loader } from '../../components/loader';
import { Card } from '../../components/card';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { withErrorBoundary } from '../../hoc/with-error-boundery';
import { httpService } from '../../services/http';
import { getAuthorBooks } from '../../services/books';
import './styles.scss';

export const BooksList = withErrorBoundary((props) => {
  const { history } = props;
  const [books, setBooks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function getAndSetBooksData() {
      setIsLoading(true);
      try {
        const response = await httpService.get('/data.json');
        if (response && response.status === 200) {
          const { books } = response.data;
          setBooks(books);
        }
      } catch (error) {
        setErrorMessage(error.message || 'Unknown Error');
      } finally {
        setIsLoading(false);
      }
    }
    getAndSetBooksData();
  }, []);

  const handleMoreClick = (book) => {
    const { id } = book;
    const sameAuthorBooks = getAuthorBooks(
      books.filter((b) => b.id !== id),
      book.author
    );
    history.push(`/book/${id}`, { sameAuthorBooks, book });
  };

  return (
    <>
      <Header />
      <main className="page-books-list">
        {isLoading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : (
          <>
            {errorMessage && (
              <div className="err-container">
                Oops. Error when fetching data occurred. Message: {errorMessage}
              </div>
            )}
            {books && (
              <div className="books-cards-container">
                {books.map((book) => (
                  <Card
                    key={book.id}
                    thumbnailPath={book.cover}
                    title={book.title}
                    onMoreClick={() => {
                      handleMoreClick(book);
                    }}
                    body={<p>Author: {book.author}</p>}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
});

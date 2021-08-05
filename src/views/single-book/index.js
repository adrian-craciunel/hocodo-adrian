import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { getAuthorBooks } from '../../services/books';

import './styles.scss';

export const SingleBook = (props) => {
  const {
    location: { state }
  } = props;

  const { book, sameAuthorBooks } = state;

  return (
    <>
      <Header />
      <main className="page-single-book">
        <Link className="top-link" to="/">
          Back to list
        </Link>
        {!book ? (
          <div className="no-book-container">Book is not found</div>
        ) : (
          <div className="book-container">
            {Boolean(book.cover) && (
              <div className="cover-container">
                <img src={book.cover} alt={book.title + ' cover'} />
              </div>
            )}
            <div className="info-container">
              <div className="info-block">
                <span className="info-heading">Title:</span>
                <span className="info-value">{book.title}</span>
              </div>
              <div className="info-block">
                <span className="info-heading">Author name:</span>
                <span className="info-value">{book.author}</span>
              </div>
              <div className="info-block">
                <span className="info-heading">ISBN:</span>
                <span className="info-value">{book.isbn}</span>
              </div>

              {Boolean(sameAuthorBooks?.length) && (
                <div className="author-books-block">
                  <span>Same author books:</span>
                  {sameAuthorBooks.map((b) => (
                    <Link
                      key={b.id}
                      to={{
                        pathname: `/book/${b.id}`,
                        state: {
                          book: b,
                          sameAuthorBooks: getAuthorBooks(
                            [...sameAuthorBooks, book].filter((entry) => entry.id !== b.id),
                            b.author
                          )
                        }
                      }}
                    >
                      {b.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function AuthorsList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [authors, setAuthors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            searchQuery
          )}+inauthor&startIndex=${(currentPage - 1) * 20}&maxResults=20`
        );
        setAuthors(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems / 20));
      } catch (error) {
        console.error(error);
      }
    };

    fetchAuthors();
  }, [searchQuery, currentPage]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <body>
      <div>
      <div
        className="hero-section"
        style={{ backgroundImage: `url('https://st.depositphotos.com/1000152/4981/i/600/depositphotos_49813215-stock-photo-school-books.jpg')` }}
      >
        <div className="container">
          <h1 className="hero-title text-center pt-5">Discover Authors</h1>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group pt-5 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search authors"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <button className="btn btn-primary" type="button" onClick={() => setCurrentPage(1)}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container author_list mt-4">
        <h2 className="mb-4">Authors List</h2>

        <div className="row">
          {authors &&
            authors.map((author) => (
              <div key={author.id} className="col-md-4 mb-4">
                <Link to={`/author/${author.id}`} className="card-link">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{author.volumeInfo.authors && author.volumeInfo.authors[0]}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        <div className="row mt-4">
          <div className="col-md-6 offset-md-3">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={goToPrevPage}>
                    Previous
                  </button>
                </li>
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={goToNextPage}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}

export default AuthorsList;

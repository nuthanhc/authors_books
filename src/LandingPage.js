import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AuthorCard({ author }) {
  return (
    <div className="author-card">
      <h3>{author.name}</h3>
      <p>{author.bio}</p>
      <Link to={`/authors/${author.id}`}>View Books</Link>
    </div>
  );
}

function LandingPage() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get('https://openlibrary.org/authors.json');
      setAuthors(response.data);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  return (
    <div>
      <h1>Authors</h1>
      {authors.map(author => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </div>
  );
}

export default LandingPage;

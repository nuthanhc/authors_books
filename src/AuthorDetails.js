import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AuthorDetail() {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${authorId}`);
        setAuthor(response.data.volumeInfo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAuthorData();
  }, [authorId]);

  if (!author) {
    return <div>Loading author details...</div>;
  }

  const authorTitle = author.title || 'Unknown Author';
  const authorAuthors = author.authors || [];

  const containerStyle = {
    border: '1px solid #ccc',
    backgroundColor: '#f8f8f8',
    padding: '20px',
  };

  const authorNameStyle = {
    color: 'darkblue',
  };

  return (
    <div className="container mt-5" style={containerStyle}>
      <h2 style={authorNameStyle}>{authorAuthors.join(', ')}</h2>
      <h3>About the Author</h3>
      <p>{author.description || 'Author description not found'}</p>

      <h3>Books by {authorAuthors.join(', ')}</h3>
      <div className="card-deck">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{authorTitle}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetail;

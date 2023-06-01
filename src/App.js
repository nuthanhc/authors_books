import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthorsList from './AuthorsList';
import AuthorDetails from './AuthorDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthorsList />} />
        <Route path="/author/:authorId" element={<AuthorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

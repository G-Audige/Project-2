import './Form.css';
import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
// Contexts
import { SearchContext } from '../Contexts/SearchContext';
// Hooks
import { useEffect, useState } from 'react';

function Form(props) {
  const { index, setIndex } = useContext(SearchContext);
  const { search, setSearch } = useContext(SearchContext);
  const [formData, setFormData] = useState({
    searchterm: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (index > 0 || index < 0) {
      setSearch(formData.searchterm);
      setIndex(0);
    }
    if (formData.searchterm) {
      setSearch(formData.searchterm);
      console.log('Form data search:', search);
      // props.search(formData.searchterm);
    } else {
      window.location.reload();
    }
  };

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="on"
          name="searchterm"
          onChange={handleChange}
          placeholder="Search by title or author..."
          type="text"
          value={formData.searchterm}
          className="searchbar"
        />
        <button type="submit" className="searchButton">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default Form;

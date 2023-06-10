// SearchBar.jsx
import React, {useState} from 'react';
import '../css/SearchBar.css'; // import the css file

const SearchBar = ({ onSearch }) => {
    const [searchItem, setSearchItem] = useState({
        area: '',
        name: ''
    });

    const handleSearch = (event) => {
        setSearchItem({
            ...searchItem,
            [event.target.name]: event.target.value
        });

        onSearch({
            ...searchItem,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                name="area"
                placeholder="Search by area"
                value={searchItem.area}
                onChange={handleSearch}
            />
            <input
                className="search-input"
                type="text"
                name="name"
                placeholder="Search by name"
                value={searchItem.name}
                onChange={handleSearch}
            />
            <button> 검색 </button>
        </div>
    );
}

export default SearchBar;

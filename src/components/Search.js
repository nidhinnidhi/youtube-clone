import React, { useState } from 'react';
import * as youtube from '../youtube';
import './Search.scss';

function Search({ setSearchResults }) {
    const [searchWord, setSearchWord] = useState('');
    const handleClick = async (event) => {
        event.preventDefault();
        if (searchWord) {
            const result = await youtube.search(searchWord);
            setSearchResults(result);
        }
    };
    return (
        <form>
            <div className="search">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search"
                    onChange={(e) => setSearchWord(e.target.value)}
                />
                <button className="search__btn" onClick={handleClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#828282"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </div>
        </form>
    );
}

export default Search;

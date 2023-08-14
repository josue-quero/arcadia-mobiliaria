import styles from './styles.module.css';
import { useState } from 'react';

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');

    return (
        <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()} role="search">
            <label className={styles.searchLabel} htmlFor="search">Search for stuff</label>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className={styles.searchBar} id="search" type="search" placeholder="Search..." autoFocus required />
            {searchInput && (
                <button className={styles.submitBtn} type="submit">Go</button>
            )}
        </form>
    );
};

export default SearchBar;
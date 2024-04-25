import React, { ChangeEvent } from 'react';
import SearchIcon from "../../icons/SearchIcon/SearchIcon";
import CloseIcon from "../../icons/CloseIcon/CloseIcon";
import styles from '../AutoComplete/AutoComplete.module.css';

interface SearchInputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onReset: () => void;
    onFocus: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onReset, onFocus }) => {
    return (
        <div className={styles['search-wrapper']}>
            <SearchIcon />
            <input
                type="text"
                placeholder="Enter value"
                className={styles['search-input']}
                onChange={onChange}
                value={value}
                onFocus={onFocus}
            />
            {value && <CloseIcon onClick={onReset} className={styles['close-icon']} />}
        </div>
    );
};

export default SearchInput;

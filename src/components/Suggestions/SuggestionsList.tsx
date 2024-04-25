
import React, { useState, useRef } from 'react';
import styles from './SuggestionsList.module.css';
import { ITEM_HEIGHT, VISIBLE_ITEMS } from "../../constants/constants";
import {Match} from "../../utils/autocompleteUtils";

interface SuggestionsListProps {
    suggestions: Match[][];
    onSelectSuggestion: (suggestion: string) => void;
    isOpen: boolean;
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({ suggestions, onSelectSuggestion, isOpen }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const listRef = useRef<HTMLUListElement>(null);

    const handleScroll = () => {
        if (listRef.current) {
            setScrollTop(listRef.current.scrollTop);
        }
    };

    if (!isOpen) {
        return null;
    }

    const totalHeight = suggestions.length * ITEM_HEIGHT;
    const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
    const endIndex = Math.min(suggestions.length, startIndex + VISIBLE_ITEMS);
    const visibleSuggestions = suggestions.slice(startIndex, endIndex);
    const visibleHeight = Math.min(suggestions.length, VISIBLE_ITEMS) * ITEM_HEIGHT;

    const handleSuggestionClick = (suggestion: string) => () => {
        onSelectSuggestion(suggestion);
    };

    return (
        <ul className={styles.list} ref={listRef} onScroll={handleScroll} style={{ height: `${visibleHeight}px`, overflowY: 'auto',  minHeight: '50px' }}>
            <div style={{ height: `${totalHeight}px`, position: 'relative' }}>
                {suggestions.length > 0 ? (
                    visibleSuggestions.map((suggestion, index) => (
                        <li className={styles['list-item']} key={startIndex + index} onClick={handleSuggestionClick(suggestion.map(part => part.text).join(''))}
                            style={{ position: 'absolute', top: `${(startIndex + index) * ITEM_HEIGHT}px`, width: '100%' }}>
                            {suggestion.map((part, partIndex) => (
                                <span key={partIndex} style={{ fontWeight: part.highlighted ? 'bold' : 'normal' }}>
                            {part.text}
                        </span>
                            ))}
                        </li>
                    ))
                ) : (
                    <li className={styles['none-list-item']} style={{ position: 'absolute', top: '0px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        No results
                    </li>
                )}
            </div>
        </ul>
    );
};

export default SuggestionsList;

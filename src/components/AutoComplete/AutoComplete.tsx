import React, { useState, useRef, ChangeEvent } from 'react';
import useDebounceFn from '../../hooks/useDebounceFn';
import SuggestionsList from "../Suggestions/SuggestionsList";
import SearchInput from "../SearchInput/SearchInput";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import {useFetchData} from "../../hooks/useFetchData";
import {highlightText, Match} from "../../utils/autocompleteUtils";

interface AutoCompleteState {
    value: string;
    suggestions: Match[][];
    isOpen: boolean;
}

const AutoComplete: React.FC = () => {
    const [searchState, setSearchState] = useState<AutoCompleteState>({ value: '', suggestions: [], isOpen: false });
    const data = useFetchData('https://jsonplaceholder.typicode.com/posts');
    const wrapperRef = useRef<HTMLDivElement>(null);
    const debouncedSearch = useDebounceFn(() => loadSuggestions(), 500);

    useOutsideClick(wrapperRef, () => setSearchState(prev => ({ ...prev, isOpen: false })));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchState(prev => ({ ...prev, value: e.target.value }));
        debouncedSearch();
    };

    const loadSuggestions = () => {
        const filtered = filterData(searchState.value);
        const highlighted = filtered.map(item => highlightText(item, searchState.value));
        setSearchState(prev => ({ ...prev, suggestions: highlighted, isOpen: true }));
    };

    const onInputFocus = () => {
        setSearchState(prev => ({ ...prev, isOpen: true }));
        debouncedSearch()
    };

    const filterData = (query: string) => data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    return (
        <div ref={wrapperRef}>
            <SearchInput value={searchState.value} onChange={handleChange}  onFocus={onInputFocus} onReset={() => setSearchState({ value: '', suggestions: [], isOpen: false })} />
            <SuggestionsList
                suggestions={searchState.suggestions}
                isOpen={searchState.isOpen}
                onSelectSuggestion={(suggestion) => setSearchState({ value: suggestion, suggestions: [], isOpen: false })}
            />
        </div>
    );
};

export default AutoComplete;

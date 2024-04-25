export interface Match {
    text: string;
    highlighted: boolean;
}

export const highlightText = (input: string, query: string): Match[] => {
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = input.split(regex);

    return parts.map(part => ({
        text: part,
        highlighted: part.toLowerCase() === query.toLowerCase()
    }));
};

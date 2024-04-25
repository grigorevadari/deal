import { useState, useEffect } from 'react';

interface FetchData {
    title: string;
}

export const useFetchData = (url: string): string[] => {
    const [data, setData] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json() as FetchData[];
                setData(json.map(item => item.title));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url]);

    return data;
};
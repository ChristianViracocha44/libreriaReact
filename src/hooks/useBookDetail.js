import {useEffect, useState} from "react";

export const useBookDetail= (props) => {

    const [BookStore, setBookStore] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://www.omdbapi.com/?i=${props.bookid}&apikey=ff9520af`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setBookStore(data);
                setLoading(false);
                console.log(loading);
            } catch (error) {
                setError(error.message);
                setLoading(false);
                console.log(error);
            }
        };
        fetchData();
    }, []);

    console.log(error);

    return { BookStore};

}

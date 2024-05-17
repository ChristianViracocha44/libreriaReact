import {useEffect, useState} from "react";

export const useBookLibrary= () => {

    const [Book, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://www.omdbapi.com/?s=disney&apikey=ff9520af";
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setBooks(data.Search);
                setLoading(false);
                
            } catch (error) {
                setError(error.message);
                setLoading(false);
                
            }
        };

        fetchData();
    }, []);


    console.log(error);
    console.log(loading);
    console.log("El props es BookList:", Book);

    return { Book};

}

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/recipes')
            .then(response => setRecipes(response.data))
            .finally(() => setLoading(false));
    }, []);

    return [recipes, loading];
};

export default useFetchRecipes

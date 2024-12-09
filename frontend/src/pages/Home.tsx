import React  from 'react';
import RecipeCard from '../components/RecipeCard';
import useFetchRecipies from '../hooks/useFetchRecipies';

const Home: React.FC = () => {
    const { recipes, loading } = useFetchRecipies();

    if (loading) return <p>Loading recipes...</p>;

    return (
        <div className="home">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
        </div>
    );
};

export default Home;
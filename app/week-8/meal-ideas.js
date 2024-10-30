"use client";
import { useEffect, useState } from "react";

export default function MealIdeas ({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            if (!response.ok) console.log(response.statusText);
            const data = await response.json();
            return(data);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
    
    const MealIdeas = ({ ingredient }) => {
       
        const loadMealIdeas = async () => {
            try {
                const mealIdeas = await fetchMealIdeas(ingredient);
                setMeals(mealIdeas);
            } catch (error) {
                console.error('Error fetching meal ideas:', error);
            }
        };
    
        useEffect(() => {
            if (ingredient) {
                loadMealIdeas();
            }
        }, [ingredient]);

    }

    return (
        <div>
            <h2>Meal Ideas for {ingredient}:</h2>
            <ul>
                {meals.map((meal, index) => (
                    <li key={index}>{meal.name}</li>
                ))}
            </ul>
        </div>
    )

}



import Item from './item';
import { useState } from 'react';

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    // Function to sort items without mutating the original array
    const getSortedItems = () => {
        const itemsCopy = [...items]; // Create a copy of items
        if (sortBy === "name") {
            return itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "category") {
            return itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
        } else {
            return itemsCopy; // Return unsorted copy if no valid sort criteria
        }
    };

    const sortedItems = getSortedItems();

    return (
        <div>
            <h3>Items:</h3>
            <div className="sort-buttons">
                <button
                    onClick={() => setSortBy("name")}
                    className="rounded p-2 bg-blue-500 text-white hover:bg-blue-700"
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className="rounded p-2 bg-green-500 text-white hover:bg-green-700"
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        category={item.category}
                        quantity={item.quantity}
                    />
                ))}
            </ul>
        </div>
    );
}

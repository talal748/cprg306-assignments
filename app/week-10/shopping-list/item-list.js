import React, { useState } from 'react';

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name); 
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category); 
        }
        return 0;
    });

    return (
        <div>
            <h3>Items:</h3>
            <button onClick={() => setSortBy("name")}>Sort by Name</button>
            <button onClick={() => setSortBy("category")}>Sort by Category</button>

            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.name} 
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect(item)} 
                    />
                ))}
            </ul>
        </div>
    );
}

"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new.item";
import ItemList from "./item-list";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main>
            <h1 className="font-serif text-blue-500">Shopping List:</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}

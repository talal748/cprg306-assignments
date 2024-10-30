import { useState } from "react";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";

export default function Page() {
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleItemSelect = (item) => {
        setSelectedItemName(item.name);
    };

    return (
        <main>
            <h1 className="font-serif text-blue-500">Shopping List:</h1>
            <ItemList 
                onItemSelect={handleItemSelect}
            />
            <MealIdeas selectedItem={selectedItemName} />
        </main>
    );
}

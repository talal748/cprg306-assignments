import Item from './item';
import { useState } from 'react';

export default function ItemList(Item) {

    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
    };
       
      const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
      const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
      const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
      const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
      const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
      const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
      const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
      const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
      const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
      const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
      const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };

      const [sortBy, setSortBy] = useState("name");

      if (sortBy === "name") {
        return a.name.localeCompare(b.name); // Sort alphabetically by name
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category); // Sort alphabetically by category
      }

      <button onClick={() => setSortBy("name")}></button>
      <button onClick={() => setSortBy("category")}></button>

      return ({
        <h3>Items:</h3>
        <ul>
            {sortedItems.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
      });
    }

    
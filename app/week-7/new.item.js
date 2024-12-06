"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const handleNameChange = (event) => setName(event.target.value);
    const handleQuantityChange = (event) => setQuantity(Number(event.target.value));
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            id: crypto.randomUUID(), // Generate a random string for the id
            name,
            quantity,
            category,
        };

        onAddItem(item); // Call the onAddItem prop with the item object

        setName("");
        setQuantity(1); // Reset to default value
        setCategory("produce");
    };

    const increment = () => {
        setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20)); // Prevent going above 20
    };

    const decrement = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1)); // Prevent going below 1
    };

    return (
        <div className="p-5 border-gray-200">
            <p>Quantity: {quantity}</p>
            <button
                disabled={quantity >= 20}
                onClick={increment}
                className="rounded p-3 bg-slate-800 hover:bg-slate-500"
            >
                Increment
            </button>
            <br />
            <button
                disabled={quantity <= 1}
                onClick={decrement}
                className="rounded p-3 bg-slate-800 hover:bg-slate-500"
            >
                Decrement
            </button>

            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label>Name:</label>
                    <input
                        className="rounded focus:bg-emerald-100 bg-orange-300"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>

                <div className="mb-2">
                    <label>Quantity:</label>
                    <input
                        className="rounded focus:bg-emerald-100 bg-orange-300"
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                        max="20"
                        required
                    />
                </div>

                <div className="mb-2">
                    <label>Category:</label>
                    <select
                        className="rounded focus:bg-emerald-100 bg-orange-300"
                        value={category}
                        onChange={handleCategoryChange}
                        required
                    >
                        <option disabled value="">
                            -- Please select a category --
                        </option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen goods">Frozen Goods</option>
                        <option value="canned foods">Canned Foods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <button
                        type="submit"
                        className="rounded p-3 bg-slate-800 hover:bg-slate-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

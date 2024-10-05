"use client"
import Link from "next/link";
import { useState } from "react"

export default function NewItem () {
    const [quantity, setQuantity] = useState(1);

    const [name, setName] = useState("");

    const [category, setCategory] = useState("produce");

    const handleNameChange = (event) => setName (event.target.value);
    const handleQuantityChange = (event) => setQuantity (event.target.value);
    const handleCateoryChange = (event) => setCategory (event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            title : name,
            amount : quantity,
            type : category
        }

        alert (`
            Name: ${item.title},
            Quantity: ${item.amount},
            Category: ${item.type}
        `);

        setName("");
        setQuantity("");
        setCategory("");
    }

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        setQuantity(quantity - 1);
    }

    return (
        <div className="p-5 border-gray-200">
            <p>Quantity: {quantity}</p>
            <button disabled={quantity >= 20}onClick={increment} className="rounded p-3 bg-slate-800 hover:bg-slate-500">Increment</button>
            <br></br>
            <button disabled={quantity <= 1} onClick={decrement} className="rounded p-3 bg-slate-800 hover:bg-slate-500">Decrement</button>

            <form>
                <div className="mb-2">
                    <label>Name:</label>
                    <input className="rounded focus:bg-emerald-100 bg-orange-300" type="text" value={name} onChange={handleNameChange}/>
                </div>
                
                <div className="mb-2">
                    <label>Quantity:</label>
                    <input className="rounded focus:bg-emerald-100 bg-orange-300" type="text" value={quantity} onChange={handleQuantityChange}/>
                </div>

                <div className="mb-2">
                    <select className="rounded focus:bg-emerald-100 bg-orange-300" value={category} onChange={handleCateoryChange}>
                        <option selected disabled value="">-- Please select a category --</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="forzen goods">Frozen Goods</option>
                        <option value="canned foods">Canned Foods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>                
                    </select>
                </div>

                <div>
                    <button onClick={handleSubmit} className="rounded p-3 bg-slate-800 hover:bg-slate-500">Submit</button>
                </div>

            </form>
        </div>
    );
}



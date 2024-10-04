"use client"
import Link from "next/link";
import { useState } from "react"

export default function NewItem () {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        setQuantity(quantity - 1);
    }

    return (
        <div className="p-5 border-gray-200">
            <p >Quantity: {quantity}</p>
            <button disabled={quantity >= 20}onClick={increment} className="rounded p-3 bg-slate-800 hover:bg-slate-500">Increment</button>
            <br></br>
            <button disabled={quantity <= 1} onClick={decrement} className="rounded p-3 bg-slate-800 hover:bg-slate-500">Decrement</button>
        </div>
    );
}



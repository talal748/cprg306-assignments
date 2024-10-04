import Link from "next/link";
export default function Item ({name, quantity, category}) {
    return (
        <div className="inline-block pxy-5">
            <li>{name}</li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </div>
    )
};
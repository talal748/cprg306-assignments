export default function Item ({name, quantity, category}) {
    return (
        <div>
            <li>{name}</li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </div>
    )
};
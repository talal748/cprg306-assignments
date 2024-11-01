export default function Item ({name, quantity, category, onSelect}) {
    return (
        <div className="inline-block pxy-5" onClick={onSelect}>
            <li>{name}</li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </div>
    )
};

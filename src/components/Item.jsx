const Item = ({ item , onDelete }) => {

    return (
        <div>
            <h2>{item.name}</h2>
            <div> <button onClick = {() => onDelete(item.id)}>Delete</button></div>
        </div>
    )
    // Render a single item
    // Add a Delete and Edit button
    
};

export default Item;

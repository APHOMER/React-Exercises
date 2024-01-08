import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";


function ShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), productName: "Phasionix", productPrice: 0 },
        { id: uuid(), productName: "Fash", productPrice: 13 },
        { id: uuid(), productName: "Ferliler", productPrice: 14 }
    ])

    const addItem = (item) => {
        setItems((currItems) => {
            return [...currItems, { ...item, id: uuid() }];
        });
    };

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.productName} --- {item.productPrice} ---{item.id[0]}</li>
                )
                )}
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
        
    )
    

}

export default ShoppingList;


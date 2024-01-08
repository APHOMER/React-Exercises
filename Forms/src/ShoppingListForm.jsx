import { useState } from "react";


function ShoppingListForm ({ addItem }) {
    const [formData, setFormData] = useState({ productName: "", productPrice: 0 });

    const handleChange = (evt) => {
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
        // console.log(formData);
        // evt.preventDefault();
    }

    const handleSubmit = (e) => {
        // console.log("Sub!!!!!!!!!");
        e.preventDefault();
        addItem(formData);
        setFormData({ productName: "", productPrice: 0 })
    }

    return (
        <form onSubmit={handleSubmit}>    
            <h1>Product Name is: {formData.productName}</h1>
            <h1>Product Price is: {formData.productPrice}</h1>
            <label htmlFor="productName">Product Name</label>
            <input 
                type="text"
                placeholder="Product Name"
                name="productName"
                id="productName"
                onChange={handleChange}
                value={formData.productName}
                />
                {/* name must match what is our state */}
                {/* id must match what is our label */}
                <label htmlFor="productPrice">Product Price</label>
            <input 
                type="number"
                placeholder="Product Price"
                name="productPrice" 
                id="productPrice" 
                onChange={handleChange}
                value={formData.productPrice}
                />
            <button>AddItem</button>
        </form>
    )
}


export default ShoppingListForm;

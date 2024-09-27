import { useState } from 'react';
import { dataServiceObj } from './DataServices'; // Adjust this import based on your actual service file
// import './ajax.css';  // Import the CSS file

function Ajax() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [productArray, setProductArray] = useState([]);

    function getProductsClick() {
        dataServiceObj.getAllProducts().then((resData) => {
            setProductArray(resData.data);
        });
    }

    function addProductClick() {
        let productObj = { id, name, price, category };

        dataServiceObj.addProduct(productObj).then(() => {
            alert("New Product Added to server");
            getProductsClick();
            clearFields();
        });
    }

    function deleteProductClick(prodId) {
        if (window.confirm("Do you want to Delete?")) {
            dataServiceObj.deleteProduct(prodId).then(() => {
                alert("Selected Product deleted from server");
                getProductsClick();
            });
        }
    }

    function selectProductClick(prodId) {
        dataServiceObj.getProductById(prodId).then((resData) => {
            let productObj = resData.data;
            setId(productObj.id);
            setName(productObj.name);
            setPrice(productObj.price);
            setCategory(productObj.category);
        });
    }

    function updateProductClick() {
        let productObj = { id, name, price, category };

        dataServiceObj.updateProduct(productObj).then(() => {
            alert("Product details are updated in server");
            getProductsClick();
            clearFields();
        });
    }

    function clearFields() {
        setId("");
        setName("");
        setPrice("");
        setCategory("");
    }

    var result = productArray.map((item, index) => (
        <tr key={index}>
            <td className="td">{item.id}</td>
            <td className="td">{item.name}</td>
            <td className="td">{item.price}</td>
            <td className="td">{item.category}</td>
            <td className="td" align='center'>
                <a className="link" onClick={() => selectProductClick(item.id)}>Select</a>
                <a className="link" onClick={() => deleteProductClick(item.id)}>Delete</a>
            </td>
        </tr>
    ));

    return (
        <div className="container">
            <input className="input" placeholder="ID" type="text"
                value={id} onChange={(e) => setId(e.target.value)} />
            <input className="input" placeholder="Name" type="text"
                value={name} onChange={(e) => setName(e.target.value)} />
            <input className="input" placeholder="Price" type="text"
                value={price} onChange={(e) => setPrice(e.target.value)} />
            <input className="input" placeholder="Category" type="text"
                value={category} onChange={(e) => setCategory(e.target.value)} />
            <hr />
            <button className="button" onClick={getProductsClick}>Get All Products</button>
            <button className="button" onClick={addProductClick}>Add Product</button>
            <button className="button" onClick={updateProductClick}>Update Product</button>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">Product ID</th>
                        <th className="th">Product Name</th>
                        <th className="th">Product Price</th>
                        <th className="th">Product Category</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>
        </div>
    );
}

export default Ajax;

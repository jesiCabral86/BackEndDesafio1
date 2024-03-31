//creamos el constructor con el array vacio.
let products = [];

const addProducts = (title, description, price, thumbail, code, stock) => {

const newProducts = () => {
    id: products.length + 1,
    title,
    description,
    price, 
    thumbail,
    code,
    stock
}

const productExists = products.find (product => product.code === code);
if (productExists){
    console.log('El producto con el codigo ${code} ya existe');
    return;
}

products.push (newProducts);
}

const getProducts = () => {
    console.log (products);
    return products;
}

const getProductsById = (id) => {
    const product = product.find (product => product.id === id);
    if (!product) {
        console.log ("No se encontro el producto con el ID ${id}");
        return;
    }
}

//test
 addProducts("Producto 1", "El primer producto", 299, "http://www.google.com", "ASDF121", 10);
 addProducts("Producto 2", "El segundo producto", 899, "http://www.google.com", "ASDF122", 10);
 addProducts("Producto 3", "El tercer producto", 899, "http://www.google.com", "ASDF122", 10);
 addProducts("Producto 4", "El cuarto producto", 899, "http://www.google.com", "ASDF123", 10);
 addProducts("Producto 5", "El quinto producto", 899, "http://www.google.com", "ASDF124", 10);

 getProducts();
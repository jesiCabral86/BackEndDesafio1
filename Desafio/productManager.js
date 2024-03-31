//creamos el constructor con el array vacio.
let products = [];

//creamos metodo addProducts para agregar productos al arreglo inicial
const addProduct = (title, description, price, thumbail, code, stock) => {

const newProduct = {
    id: products.length + 1,
    title,
    description,
    price, 
    thumbail,
    code,
    stock
};

//validamos que no se repita el campo code
const productExists = products.find (product => product.code === code);
if (productExists){
    console.log('El producto con el codigo ${code} ya existe');
    return;
}

products.push(newProduct);
}

const getProducts = () => {
    console.log (products);
    return products;
}

const getProductById = (id) => {
    const product = products.find (product => product.id === id);
    if (! product) {
        console.log ("No se encontro el producto con el ID ${id}");
        return;
    }
}

//hacemos el test del ingreso de los productos
 addProduct("Producto 1", "El primer producto", 299, "http://www.google.com", "ASDF121", 10);
 addProduct("Producto 2", "El segundo producto", 899, "http://www.google.com", "ASDF122", 10);
 addProduct("Producto 3", "El tercer producto", 899, "http://www.google.com", "ASDF122", 10);
 addProduct("Producto 4", "El cuarto producto", 899, "http://www.google.com", "ASDF123", 10);
 addProduct("Producto 5", "El quinto producto", 899, "http://www.google.com", "ASDF124", 10);

 getProducts();

const { products } = require("./utils/products");

/************************************************************************************
PUNTO 1
utiliza addingIdToProduct para agregarle un id único a cada producto empezando en 1
*************************************************************************************/
// Tu código acá
const addingIdToProduct = () => {

		products.map((p, i) => p.id = i + 1)
		return products
	
};

/*****************************************************************************
 * PUNTO 2
 * utiliza returningTheNames para retornar el nombre de cada uno de los productos
 ******************************************************************************/
// Tu código acá
const returningTheNames = () => {
	let names = [];
	products.map(p => names.push(p.name))
	return names;
}

/********************************************************************************
PUNTO 3
utiliza searchID para retornar el producto cuyo id corresponda al parametro pasado.
Si ejecuto searchID(3) debería devolver el objeto entero, cuyo id sea 3
************************************************************************************/
// Tu código acá
const searchID = (id) => {
	let productFound = products.find(p => p.id === id);
	return productFound? productFound: "no hubo coincidencias"
}

/*****************************************************************************
PUNTO 4
utiliza matchingColors para retornar los productos que hagan match con 
el color pasado por parámetro
******************************************************************************/
// Tu código acá
const matchingColors = (color) => {
	let colorArray =[];
	products.forEach(element => {
		if(element.colors.includes(color)){
			colorArray.push(element)
		}
	}
	)
	return colorArray
}
/*****************************************************************************
PUNTO 5
utiliza colorsLength para retornar los productos que no tengan color
******************************************************************************/
// Tu código acá
const colorsLength = () => {
	// let colorArray =[];
	// products.forEach(element => {
	// 	if(element.colors.length === 0){
	// 		colorArray.push(element)
	// 	}
	// }
	// )
	// return colorArray
	return products.filter(e => e.colors.length === 0)
}

/*****************************************************************************
PUNTO 6
utiliza addProduct para agregar un nuevo producto que contenga las mismas
propiedades (name,price,quantity,colors).
Retornar los productos donde se incluya el producto agregado
******************************************************************************/
// Tu código acá
const addProduct = (obj) => {
	if(obj.name && obj.price && obj.quantity && obj.colors){
		return products.push(obj)
	}
}

/*****************************************************************************
PUNTO 7
utiliza deleteProduct para Eliminar del array de productos a aquellos sin stock (con quantity 0)
******************************************************************************/
// Tu código acá
const deleteProduct = () => {
	return products.filter(e => e.quantity > 0)
};
/*****************************************************************************
PUNTO 8
utiliza existingProducts para sumar el numero total de stock entre todos los productos.
Debe retornar dicho numero
******************************************************************************/
// Tu código acá
const existingProducts = (lista) => {
	let total = 0;
	lista.map(e => total += e.quantity)
	return total;
}

/*****************************************************************************
PUNTO 9
utiliza showHigherPrice para retornar los productos cuyo importe sea mayor al pasado por parametro
Esta función recibe el array de productos y el importe (precio) a buscar:
showHigherPrice(products,500) 
debería devolver 2 objetos, ya que solo 2 productos tienen un valor mayor a 500
******************************************************************************/
// Tu código acá
const showHigherPrice = (prod, precio) => {
	return prod.filter(p => p.price > precio)
}
module.exports = {
	addingIdToProduct,
	existingProducts,
	deleteProduct,
	addProduct,
	colorsLength,
	matchingColors,
	searchID,
	returningTheNames,
	showHigherPrice,
};

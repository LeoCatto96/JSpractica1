/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá
const calculatePrice = ( producto, precio ) => {
	let totalPrice;
	if(precio <= 0){
		return "Error"
	}
	if(!producto || !precio){
		return "ingresar ambos parámetros";
	}
	if(typeof(producto) !== "string"){
		return "ingresar un nombre válido";
	}
	if(precio >= 1 && precio <= 2000){
		totalPrice = precio + 300
		return producto + 300 + totalPrice;
	}
	if(precio > 2000 && precio <= 4000){
		totalPrice = precio + 500
		return producto + 500 + totalPrice;
	}
	if(precio > 4000){
		totalPrice = precio + 700
		return producto + 700 + totalPrice;
	}
};



module.exports = {
	calculatePrice,
};

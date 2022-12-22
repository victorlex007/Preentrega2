import {contenedorCarrito} from "./contenedorCarrito.js";
import {contenedorProducto} from "./contenedorProducto.js";


export async function agregarProductoACarrito(idProd, idCarrito){
    const carrito = await contenedorCarrito.obtenerPorId(idCarrito)
    const producto = await contenedorProducto.obtenerPorId(idProd)
    carrito.productos.push(producto)
    await contenedorCarrito.reemplazarPorId(carrito)
    return carrito
}
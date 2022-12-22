import { agregarProductoACarrito } from "./model.js"

export async function postCarrito (req, res, next){
    try {
         const {idProd} = req.body
         const {IdCarrito} =req.params
         const carritoActualizado = await agregarProductoACarrito(idProd, IdCarrito)
         res.json(carritoActualizado)
        } catch(error){
            next(error)
        }
}
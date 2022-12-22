import express from 'express'
import { modeloProductos} from "./modeloProductosMongoose.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


async function controladorPost(req, res) {
    const datosProductos = req.body
    const persona = await modeloProductos.create(datosProductos)
    res.json(producto)
}

async function controladorGet(req, res) {
    const productos = await modeloProductos.find()
    res.json(productos)
}

app.post('/', controladorPost)
app.get('/', controladorGet)

app.listen(8080, () => { console.log(`conectado a puerto 8080`) })
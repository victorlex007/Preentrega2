import { database } from "./mongoClient.js";



export class ContenedorMongoDb {
    constructor(nombreCollection) {
            const dbProductos = database.collection(nombreCollection);

    }

    async guardar(cosa) {
        await this.collection.insertOne(cosa);
    }

    async recuperar(cosa) {
        return await this.collection.find(criterio).toarray();
    }
}
import { Producto } from "../models/producto.model.js";

export const listarProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        
        return res.status(200).json({
            status: "success",
            mensaje: "Productos consultados correctamente",
            data: productos,
            error: null,
            code: 200
        });
    } catch (error) {
        console.error("Error al consultar productos:", error);
        
        return res.status(500).json({
            status: "error",
            mensaje: "Error al consultar productos",
            data: null,
            error: error.message,
            code: 500
        });
    }
};
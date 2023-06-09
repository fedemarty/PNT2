import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://6464028c043c103502b0bf69.mockapi.io/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async cargar() {
    try {
      const response = await apiClient.get("/categorias/");
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async cargarDatos(filtro) {
    try {
      const response = await apiClient.get("/categorias/" + filtro);
      return response.data;
    } catch (error) {
      throw "Error de conexión";
    }
  },
  async cargar(filtro) {
    try {
      const response = await apiClient.get("/categorias/", {
        params: filtro
      });
      return response.data;
    } catch (error) {
      throw "Error de conexión";
    }
  },
  async agregar(elem) {
    try {
      await apiClient.post("/categorias/", elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async eliminar(id) {
    try {
      await apiClient.delete("/categorias/" + id);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async modificar(id, elem) {
    try {
      await apiClient.put("/categorias/" + id, elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },
};

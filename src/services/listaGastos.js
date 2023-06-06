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
      const response = await apiClient.get("/gastos/");
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async cargarDatos(filtro) {
    try {
      const response = await apiClient.get("/gastos?id="+filtro);
      return response.data;
    } catch (error) {
      throw "Error de conexión";
    }
  },
  async cargar(filtro) {
    try {
      const response = await apiClient.get("/gastos?userID="+filtro);
      return response.data;
    } catch (error) {
      throw "Error de conexión";
    }
  },
  async agregar(elem) {
    try {
      await apiClient.post("/gastos/", elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async eliminar(id) {
    try {
      await apiClient.delete("/gastos/" + id);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async modificar(id, elem) {
    try {
      await apiClient.put("/gastos/" + id, elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },
};

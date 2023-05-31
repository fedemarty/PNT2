import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://6464027e127ad0b8f895db50.mockapi.io/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async cargar() {
    try {
      const response = await apiClient.get("/lista/");
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async agregar(elem) {
    try {
      await apiClient.post("/lista/", elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async eliminar(id) {
    try {
      await apiClient.delete("/lista/" + id);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async modificar(id, elem) {
    try {
      await apiClient.put("/lista/" + id, elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },
};

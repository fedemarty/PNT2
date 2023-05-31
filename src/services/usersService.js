import { useIonRouter } from "@ionic/vue";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://6464027e127ad0b8f895db50.mockapi.io/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const user = "/user/"

export default {
  async cargar() {
    try {
      const response = await apiClient.get(user);
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async cargarUsuarioXID(filtro) {
    try {
      const response = await apiClient.get("/user?email="+filtro);
      console.log(response.data[0])
      return response.data[0];
      

    } catch (error) {
      throw "Error de conexión";
    }
  },
  async agregar(elem) {
    try {
      await apiClient.post(user, elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async eliminar(id) {
    try {
      await apiClient.delete(user + id);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async modificar(id, elem) {
    try {
      await apiClient.put(user + id, elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },
};

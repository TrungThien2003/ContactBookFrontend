import createApiClient from "./api.service";
class ContactService {
  constructor(baseUrl = "/api/contacts") {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    try {
      return (await this.api.get("/")).data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      throw error;
    }
  }
  async create(data) {
    return (await this.api.post("/", data)).data;
  }
  async deleteAll() {
    return (await this.api.delete("/")).data;
  }
  async get(id) {
    return (await this.api.get(`/${id}`)).data;
  }
  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }
  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }
}
const BASE_URL = "http://localhost:3000/api/contacts";
export default new ContactService(BASE_URL);

import axios from "axios";

export default class TableService {
  static async getAll(limit = 10, page = 1, query, field, type, ordering) {
    
    let params = {
      params: {
        limit: limit,
        ordering: ordering,
        field: field,
        sort_method: type,
        value: query,
      },
    }
    if (page !== 1) {
      params.params.offset = (page - 1) * 10
    } 
    const responce = await axios.get("http://127.0.0.1:8000/table/", params);
    return responce.data;
  }
}

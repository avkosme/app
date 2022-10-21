import { environment } from "../environment";
class API {
  async setOrder(data) {
    const urls = await fetch(`${environment.API_URL}/order/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());

    return urls;
  }

  async getServices() {
    const urls = await fetch(`${environment.API_URL}/services/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());

    return urls;
  }
}

export default new API();

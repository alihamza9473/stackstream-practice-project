import axios from "axios";
import getRoute from "api/apiRoutes";

class API {
  config = {
    headers: {
      "Sierra-ApiKey": "",
    },
  };
  failedResponse = (error: any): Promise<any> => {
    const data =
      error.response && error.response.data ? error.response.data : {};
    return Promise.reject(data);
  };

  fetch = (route: string) => {
    return axios.get(route, this.config).catch((error) => {
      return this.failedResponse(error);
    });
  };

  post = (route: string, data) => {
    return axios.post(route, data, this.config).catch((error) => {
      return this.failedResponse(error);
    });
  };

  login = (email: string, password: string): Promise<any> => {
    const route = getRoute("login");
    return this.post(route, { email, password });
  };

  signup = (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<any> => {
    const route = getRoute("signup");
    return this.post(route, { email, password, firstName, lastName });
  };

  refresh = (refresh_token: string): Promise<any> => {
    const route = getRoute("refresh");
    return this.fetch(route);
  };
}

export default new API();

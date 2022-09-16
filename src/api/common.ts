import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  getExchangeRate = (): Promise<any> => {
    const route = getRoute('getExchangeRate');
    return api.fetch(route);
  };
  getCurrencies = (): Promise<any> => {
    const route = getRoute('getCurrencies');
    return api.fetch(route);
  };
}

export default new API();

import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  getTransactions = (payload: any): Promise<any> => {
    const route = getRoute('getTransactions');
    return api.post(route, payload);
  };

  createBulkTransactions = (payload: any): Promise<any> => {
    const route = getRoute('createBulkTransactions');
    return api.post(route, payload);
  };
}

export default new API();

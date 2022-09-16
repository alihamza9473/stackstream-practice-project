import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  config = {
    headers: {
      'Sierra-ApiKey': ''
    }
  };

  getPayment = (id: any): Promise<any> => {
    const route = getRoute('getPayment', { id });
    return api.fetch(route);
  };

  updatePayment = (payment: any): Promise<any> => {
    const route = getRoute('updatePayment', { id: payment._id });
    return api.patch(route, payment);
  };
}

export default new API();

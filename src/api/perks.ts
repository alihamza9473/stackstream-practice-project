import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  config = {
    headers: {
      'Sierra-ApiKey': ''
    }
  };

  getPerks = (payload: any): Promise<any> => {
    const route = getRoute('getPerks');
    return api.post(route, payload);
  };
}

export default new API();

import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  config = {
    headers: {
      'Sierra-ApiKey': ''
    }
  };

  getProfile = (id: any): Promise<any> => {
    const route = getRoute('getProfile', { id });
    return api.fetch(route);
  };

  updateProfile = (profile: any): Promise<any> => {
    const route = getRoute('updateProfile', { id: profile._id });
    return api.patch(route, profile);
  };
}

export default new API();

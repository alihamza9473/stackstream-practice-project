import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  getRolesListing = (payload: any): Promise<any> => {
    const route = getRoute('getRolesListing');
    return api.post(route, payload);
  };
  getRolesDetails = (id: any): Promise<any> => {
    const route = getRoute('getRolesDetails', { id });
    return api.fetch(route);
  };
  addRoles = (ggmsRoles: any): Promise<any> => {
    const route = getRoute('addRoles');
    return api.post(route, ggmsRoles);
  };
  updateRoles = (ggmsRoles: any): Promise<any> => {
    const route = getRoute('updateRoles', { id: ggmsRoles._id });
    return api.patch(route, ggmsRoles);
  };
  deleteRoles = (id: any): Promise<any> => {
    const route = getRoute('deleteRoles', { id });
    return api.delete(route);
  };
  getRoles = (payload: any): Promise<any> => {
    const route = getRoute('getRoles');
    return api.post(route, payload);
  };
}

export default new API();

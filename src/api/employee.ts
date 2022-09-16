import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  getEmployee = (payload: any): Promise<any> => {
    const route = getRoute('getEmployee');
    return api.post(route, payload);
  };
  getEmployeeDetails = (id: any): Promise<any> => {
    const route = getRoute('getEmployeeDetails', { id });
    return api.fetch(route);
  };
  addEmployee = (reimbursement: any): Promise<any> => {
    const route = getRoute('addEmployee');
    return api.post(route, reimbursement);
  };
  updateEmployee = (reimbursement: any): Promise<any> => {
    const route = getRoute('updateEmployee', { id: reimbursement._id });
    return api.patch(route, reimbursement);
  };
  updateEmployeeStatus = (payload: any): Promise<any> => {
    const route = getRoute('updateEmployeeStatus');
    return api.post(route, payload);
  };
  deleteEmployee = (id: any): Promise<any> => {
    const route = getRoute('deleteEmployee', { id });
    return api.delete(route);
  };
}

export default new API();

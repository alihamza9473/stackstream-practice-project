import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  config = {
    headers: {
      'Sierra-ApiKey': ''
    }
  };

  getPayroll = (payload: any): Promise<any> => {
    const route = getRoute('getPayroll');
    return api.post(route, payload);
  };

  addPayroll = (payload: any): Promise<any> => {
    const route = getRoute('addPayroll');
    return api.post(route, payload);
  };

  updatePayroll = (payroll: any): Promise<any> => {
    const route = getRoute('updatePayroll', { id: payroll._id });
    return api.patch(route, payroll);
  };

  deletePayroll = (id: any): Promise<any> => {
    const route = getRoute('deletePayroll', { id });
    return api.delete(route);
  };

  getPayrollDetails = (id: any): Promise<any> => {
    const route = getRoute('getPayrollDetails', { id });
    return api.fetch(route);
  };
}

export default new API();

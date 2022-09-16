import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  config = {
    headers: {
      'Sierra-ApiKey': ''
    }
  };

  getPayrollRun = (payload: any): Promise<any> => {
    const route = getRoute('getPayrollRun');
    return api.post(route, payload);
  };

  getAdminDashboard = (payload: any): Promise<any> => {
    const route = getRoute('getAdminDashboard');
    return api.post(route, payload);
  };

  getEmployeeDashboard = (payload: any): Promise<any> => {
    const route = getRoute('getEmployeeDashboard', { year: payload });
    return api.post(route, payload);
  };
}

export default new API();

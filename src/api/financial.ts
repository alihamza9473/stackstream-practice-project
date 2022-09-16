import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  getFinancial = (payload: any): Promise<any> => {
    const route = getRoute('getFinancial');
    return api.post(route, payload);
  };
  getFinancialDetails = (id: any): Promise<any> => {
    const route = getRoute('getFinancialDetails', { id });
    return api.fetch(route);
  };
  addFinancial = (reimbursement: any): Promise<any> => {
    const route = getRoute('addFinancial');
    return api.post(route, reimbursement);
  };
  updateFinancial = (reimbursement: any): Promise<any> => {
    const route = getRoute('updateFinancial', { id: reimbursement._id });
    return api.patch(route, reimbursement);
  };
  deleteFinancial = (id: any): Promise<any> => {
    const route = getRoute('deleteFinancial', { id });
    return api.delete(route);
  };
}

export default new API();

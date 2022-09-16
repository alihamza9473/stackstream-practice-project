import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  config = {
    headers: {
      'Sierra-ApiKey': ''
    }
  };

  getReimbursement = (payload: any): Promise<any> => {
    const route = getRoute('getReimbursement');
    return api.post(route, payload);
  };
  getReimbursementDetails = (id: any): Promise<any> => {
    const route = getRoute('getReimbursementDetails', { id });
    return api.fetch(route);
  };
  addReimbursement = (reimbursement: any): Promise<any> => {
    const route = getRoute('addReimbursement');
    return api.post(route, reimbursement);
  };
  updateReimbursement = (reimbursement: any): Promise<any> => {
    const route = getRoute('updateReimbursement', { id: reimbursement._id });
    return api.patch(route, reimbursement);
  };
  deleteReimbursement = (id: any): Promise<any> => {
    const route = getRoute('deleteReimbursement', { id });
    return api.delete(route);
  };
  updateReimbursementStatus = (payload: any): Promise<any> => {
    const route = getRoute('updateReimbursementStatus');
    return api.post(route, payload);
  };
  getReimbursementLimits = (): Promise<any> => {
    const route = getRoute('getReimbursementLimits');
    return api.fetch(route);
  };
}

export default new API();

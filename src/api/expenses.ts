import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  getExpense = (payload: any): Promise<any> => {
    const route = getRoute('getExpense');
    return api.post(route, payload);
  };
  getExpenseDetails = (id: any): Promise<any> => {
    const route = getRoute('getExpenseDetails', { id });
    return api.fetch(route);
  };
  addExpense = (reimbursement: any): Promise<any> => {
    const route = getRoute('addExpense');
    return api.post(route, reimbursement);
  };
  updateExpense = (reimbursement: any): Promise<any> => {
    const route = getRoute('updateExpense', { id: reimbursement._id });
    return api.patch(route, reimbursement);
  };
  deleteExpense = (id: any): Promise<any> => {
    const route = getRoute('deleteExpense', { id });
    return api.delete(route);
  };
}

export default new API();

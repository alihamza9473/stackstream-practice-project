import { API_BASE_PATH } from 'config';
import each from 'lodash/each';
import replace from 'lodash/replace';

export const ROUTES_OBJ = {
  // AUTH
  login: `${API_BASE_PATH}/auth/login`,
  signup: `${API_BASE_PATH}/auth/signup`,
  refresh: `${API_BASE_PATH}/auth/token/refresh`,

  // PAYROLL RUN
  getPayrollRun: `${API_BASE_PATH}/payroll/run`,

  // PAYROLL
  getPayroll: `${API_BASE_PATH}/payroll/search`,
  addPayroll: `${API_BASE_PATH}/payroll/`,
  updatePayroll: `${API_BASE_PATH}/payroll/<id>`,
  deletePayroll: `${API_BASE_PATH}/payroll/<id>`,
  getPayrollDetails: `${API_BASE_PATH}/payroll/<id>`,

  // TRANSACTIONS
  createBulkTransactions: `${API_BASE_PATH}/transaction/bulk-create`,
  getTransactions: `${API_BASE_PATH}/transaction/search/`,

  // Profile
  updateProfile: `${API_BASE_PATH}/users/profile/<id>`,
  getProfile: `${API_BASE_PATH}/users/profile/<id>`,

  // Payment
  updatePayment: `${API_BASE_PATH}/users/payment/<id>`,
  getPayment: `${API_BASE_PATH}/users/payment/<id>`,

  // REIMBURSEMENT
  getReimbursement: `${API_BASE_PATH}/reimbursement/search/`,
  addReimbursement: `${API_BASE_PATH}/reimbursement/`,
  updateReimbursement: `${API_BASE_PATH}/reimbursement/<id>`,
  deleteReimbursement: `${API_BASE_PATH}/reimbursement/<id>`,
  getReimbursementDetails: `${API_BASE_PATH}/reimbursement/<id>`,
  getReimbursementLimits: `${API_BASE_PATH}/reimbursement/limits/`,
  updateReimbursementStatus: `${API_BASE_PATH}/admin/reimbursement-bulk-udpate`,

  // EMPLOYEE
  getEmployee: `${API_BASE_PATH}/users/search/`,
  addEmployee: `${API_BASE_PATH}/users/`,
  updateEmployee: `${API_BASE_PATH}/users/<id>`,
  deleteEmployee: `${API_BASE_PATH}/users/<id>`,
  getEmployeeDetails: `${API_BASE_PATH}/users/<id>`,
  updateEmployeeStatus: `${API_BASE_PATH}/admin/users-bulk-udpate`,

  // FINANCIAL
  getFinancial: `${API_BASE_PATH}/financial/search/`,
  addFinancial: `${API_BASE_PATH}/financial/`,
  updateFinancial: `${API_BASE_PATH}/financial/<id>`,
  deleteFinancial: `${API_BASE_PATH}/financial/<id>`,
  getFinancialDetails: `${API_BASE_PATH}/financial/<id>`,

  // Expenses
  getExpense: `${API_BASE_PATH}/expenses/search/`,
  addExpense: `${API_BASE_PATH}/expenses/`,
  updateExpense: `${API_BASE_PATH}/expenses/<id>`,
  deleteExpense: `${API_BASE_PATH}/expenses/<id>`,
  getExpenseDetails: `${API_BASE_PATH}/expenses/<id>`,

  // PERKS
  getPerks: `${API_BASE_PATH}/perks/search/`,

  // DASHBOARD
  getAdminDashboard: `${API_BASE_PATH}/admin/dashboard?current=1`,
  getEmployeeDashboard: `${API_BASE_PATH}/users/dashboard?year=<year>`,

  //Common
  getExchangeRate: `${API_BASE_PATH}/exchange-rate/`,
  getCurrencies: `${API_BASE_PATH}/common/currencies/`,

  // ROLES
  getRolesListing: `${API_BASE_PATH}/roles/search/`,
  addRoles: `${API_BASE_PATH}/roles/`,
  updateRoles: `${API_BASE_PATH}/roles/<id>`,
  deleteRoles: `${API_BASE_PATH}/roles/<id>`,
  getRolesDetails: `${API_BASE_PATH}/roles?id=<id>`,
  getRoles: `${API_BASE_PATH}/roles/search/?rolesOnly=1`
};

export type ROUTES = keyof typeof ROUTES_OBJ;
/**
 * getRoute creates the URL through provided routeName & params arguments
 * @param  {string} routeName   any object name of ROUTES_OBJ e.g. login
 * @param  {Object} [params={}] param values replace with strings present <...>.
 * @return {string}             URL
 */
const getRoute = (routeName: ROUTES, params = {}): string => {
  let url: string = ROUTES_OBJ[routeName];
  each(params, (val: string, key: string) => {
    val = Array.isArray(val) ? val.join(',') : val;
    url = replace(url, new RegExp(`<${key}>`, 'g'), encodeURIComponent(val));
    if (typeof val === 'undefined' || val === '' || val === null) {
      url = url
        .replace(new RegExp(`&${key}=`, 'g'), '')
        .replace(new RegExp(`${key}=`, 'g'), '')
        .replace('undefined', '')
        .replace('null', '');
    }
  });
  const regex = /<(.*?)>/;
  let matched: any = [];
  do {
    matched = regex.exec(url);
    if (matched) {
      url = replace(url, new RegExp(matched[0], 'g'), '');
      url = url.replace(new RegExp(`&${matched[1]}=`, 'g'), '').replace(new RegExp(`${matched[1]}=`, 'g'), '');
    }
  } while (matched);
  return url;
};

export default getRoute;

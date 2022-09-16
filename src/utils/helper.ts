import get from 'lodash/get';
import toaster from 'utils/toaster';
export const API_TYPE = (action: string) => ({
  STARTED: `${action}_STARTED`,
  FULLFILLED: `${action}_FULLFILLED`,
  REJECTED: `${action}_REJECTED`
});

const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const copy = obj => {
  return JSON.parse(JSON.stringify(obj));
};
export const getDate = (date: Date | string | null) => {
  if (!date) return '-';
  let d = new Date(date);
  if (typeof date === 'string') d = new Date(date);
  return `${d.getDate()} ${shortMonths[d.getMonth()]} ${d.getUTCFullYear()}`;
};

export const isDate = (date: Date | string) => {
  return !isNaN(new Date(date).valueOf());
};

export const getKeysForOptions = data => {
  if (data) {
    data = Object.keys(data).filter(keys => keys !== '_id' && keys !== '__v' && keys !== 'resource');
    return data?.map(fkey => ({ label: fkey, value: fkey }));
  }
};

export const toUpperCase = str => {
  if (str) return str.toUpperCase();
};

export const camelCaseToNormal = str => {
  return (
    str
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, function(str) {
        return str.toUpperCase();
      })
  );
};

export const showOnKeys = field => {
  const keys: string[] = [];
  Object.keys(field).forEach(key => {
    if (field[key] === 'On') keys.push(camelCaseToNormal(key));
  });
  return keys.join(', ');
};

export const errorHandler = error => {
  if (typeof error === 'string') {
    toaster.error(error);
  } else {
    let errorMessage = '';
    Object.keys(error).forEach(key => {
      if (errorMessage) errorMessage = error[key];
      else errorMessage = '. \n' + error[key];
    });
    toaster.error(errorMessage);
  }
};

export const alertText = "You won't be able to revert this!";

export const alertTitle = (moduleName: string) => {
  return `Are you sure want to delete this ${moduleName}`;
};

export const alertStatusUpdateTitle = (statusName: string) => {
  return `Are you sure want to update this ${statusName} status?`;
};

export const getTransactionPayload = data => {
  const { paid_from, selectedPayrollRun, status } = data;

  return selectedPayrollRun.map(payroll => {
    const { gross_salary, currency, resource, expenses, reimbursement, profit } = payroll;
    const profieValue = (get(resource, 'profit_share', 0) / 100) * get(profit, 'amount', 0);
    let expensesIds = expenses.map(expense => expense._id);
    let reimbursementIds = reimbursement.map(reimburse => reimburse._id);
    const net_salary =
      gross_salary +
      reimbursement?.reduce((totalAmount, r) => totalAmount + r.amount, 0) +
      expenses?.reduce((totalAmount, r) => totalAmount + r.amount, 0) +
      (get(resource, 'profit_share', 0) / 100) * get(profit, 'amount', 0) -
      payroll?.taxes?.current_tax_deduction;

    const amount_in_dollar =
      (gross_salary +
        reimbursement?.reduce((totalAmount, r) => totalAmount + r.amount, 0) +
        expenses?.reduce((totalAmount, r) => totalAmount + r.amount, 0) +
        (get(resource, 'profit_share', 0) / 100) * get(profit, 'amount', 0)) /
      167.4;

    return {
      resource: resource._id,
      currency,
      status,
      gross_salary,
      expenses: expensesIds,
      reimbursement: reimbursementIds,
      profit: profieValue,
      net_salary,
      paid_from,
      amount_in_dollar: amount_in_dollar,
      taxes: payroll?.taxes?.current_tax_deduction
    };
  });
};

import {
  FORM,
  PAYROLLRUN_STATUSES,
  REIMBURSEMENT_STATUSES,
  STATUSES,
  USER_STATUSES,
} from "config";

import { ROLES } from "config";

export const routes = {
  [ROLES.SUPER_ADMIN]: {
    Menu: [{ label: "Home", path: "/dashboard", icon: "bx bx-home-circle" }],
    Payroll: [
      { label: "Payroll Run", path: "/payrollRun", icon: "bx bx-loader" },
      { label: "Employee", path: "/employee", icon: "bx bx-laptop" },
      { label: "Payroll", path: "/payroll", icon: "bx bx-wallet" },
      { label: "Reimbursement", path: "/reimbursement", icon: "bx bx-layer" },
    ],
    Finance: [
      { label: "Expenses", path: "/expenses", icon: "bx bx-money" },
      { label: "Transactions", path: "/transactions", icon: "bx bx-transfer" },
      { label: "Financials", path: "/financial", icon: "bx bx-dollar" },
    ],
    Settings: [
      { label: "Roles", path: "/roles", icon: "bx bx-money" },
      { label: "Perks", path: "/perks", icon: "bx bx-gift" },
    ],
  },
  [ROLES.ADMIN]: {
    Menu: [{ label: "Home", path: "/dashboard", icon: "bx bx-home-circle" }],
    Finance: [
      { label: "Reimbursement", path: "/reimbursement", icon: "bx bx-layer" },
      { label: "Expenses", path: "/expenses", icon: "bx bx-money" },
    ],
  },
  [ROLES.EMPLOYEE]: {
    Menu: [
      { label: "Home", path: "/dashboard", icon: "bx bx-home-circle" },
      { label: "Reimbursement", path: "/reimbursement", icon: "bx bx-layer" },
    ],
  },
  [ROLES.ACCOUNTANT]: {
    Menu: [{ label: "Home", path: "/dashboard", icon: "bx bx-home-circle" }],
    Payroll: [
      { label: "Payroll Run", path: "/payrollRun", icon: "bx bx-loader" },
      { label: "Reimbursement", path: "/reimbursement", icon: "bx bx-layer" },
    ],
    Finance: [
      { label: "Transactions", path: "/transactions", icon: "bx bx-transfer" },
      { label: "Financials", path: "/financial", icon: "bx bx-dollar" },
    ],
  },
  [ROLES.ADMIN_OFFICER]: {
    Menu: [{ label: "Home", path: "/dashboard", icon: "bx bx-home-circle" }],
    Payroll: [
      { label: "Reimbursement", path: "/reimbursement", icon: "bx bx-layer" },
    ],
    Finance: [{ label: "Expenses", path: "/expenses", icon: "bx bx-money" }],
  },
  [ROLES.ADMIN_OFFICER]: {
    Menu: [{ label: "Home", path: "/dashboard", icon: "bx bx-home-circle" }],
    App: [
      { label: "Reimbursement", path: "/reimbursement", icon: "bx bx-layer" },
      { label: "Expenses", path: "/expenses", icon: "bx bx-money" },
      // { label: 'Project Logs', path: '/reimbursement', icon: 'bx bxs-hourglass' }
    ],
  },
  [ROLES.HUMAN_RESOURCE_GENERALIST]: {
    Menu: [{ label: "Home", path: "/dashboard", icon: "bx bx-home-circle" }],
    App: [
      { label: "Payroll Run", path: "/payrollRun", icon: "bx bx-loader" },
      { label: "Employee", path: "/employee", icon: "bx bx-laptop" },
      { label: "Reimbursement", path: "/reimbursement", icon: "bx bx-layer" },
      { label: "Payroll", path: "/payroll", icon: "bx bx-wallet" },
    ],
  },
};

export const formKeys = {
  [FORM.REIMBURSEMENT]: [
    "_id",
    "amount",
    "perk",
    "description",
    "reimbursement_for",
    "service",
    "type",
  ],
};

export const commonState = {
  pagination: { limit: 10, page: 1 },
  search: "",
  sort: { _id: -1 },
  query: {},
};

export const reimbursementStatus = Object.keys(REIMBURSEMENT_STATUSES).map(
  (key) => {
    return { label: key, value: REIMBURSEMENT_STATUSES[key] };
  }
);

export const payrollRunStatus = Object.keys(PAYROLLRUN_STATUSES).map((key) => {
  return { label: key, value: PAYROLLRUN_STATUSES[key] };
});

export const statuses = Object.keys(STATUSES).map((key) => {
  return { label: key, value: STATUSES[key] };
});

export const userStatus = Object.keys(USER_STATUSES).map((key) => {
  return { label: key, value: USER_STATUSES[key] };
});

export const userRoles = Object.keys(ROLES).map((key) => {
  return { label: key, value: ROLES[key] };
});

export const employeeFormKeys = {
  [FORM.EMPLOYEE]: [
    "_id",
    "email",
    "first_name",
    "last_name",
    "status",
    "role",
  ],
};

export const payrollFormKeys = {
  [FORM.PAYROLL]: ["_id", "resource", "gross_salary", "currency"],
};

export const profileFormKeys = {
  [FORM.PROFILE]: ["_id", "date_of_birth", "father_name", "mobile", "address"],
};

export const paymentFormKeys = {
  [FORM.PAYMENT]: [
    "_id",
    "payment_mode",
    "account_number",
    "branch_name",
    "branch_code",
    "account_title",
  ],
};

export const financialFormKeys = {
  [FORM.FINANCIAL]: ["_id", "source", "currency", "status", "amount"],
};

export const expenseFormKeys = {
  [FORM.EXPENSE]: [
    "_id",
    "paid_by",
    "description",
    "amount",
    "currency",
    "type",
  ],
};

export const optionsForReimbursementFor = [
  { label: "self", value: "self" },
  { label: "parent", value: "parent" },
  { label: "spouse", value: "spouse" },
  { label: "children", value: "children" },
];

export const optionsForExpensesForm = [
  { label: "One Time", value: "one time" },
  { label: "Recurring", value: "recurring" },
];

export const optionsForReimbursement = [
  { label: "Status", value: "status" },
  { label: "Perk", value: "perk.type" },
  { label: "Desciption", value: "desciption" },
  { label: "Submission Date", value: "created_at" },
  { label: "Name", value: "resource.first_name" },
  { label: "Email", value: "resource.email" },
];

export const optionsForFinancials = [
  { label: "Source", value: "source" },
  { label: "Currency", value: "currency" },
  { label: "Status", value: "status" },
  { label: "Amount", value: "amount" },
  { label: "Creation Date", value: "created_at" },
  { label: "Last Updated", value: "updated_at" },
];

export const optionsForExpenses = [
  { label: "Source", value: "currency" },
  { label: "Currency", value: "currency" },
  { label: "Status", value: "status" },
  { label: "Amount", value: "amount" },
  { label: "Added by", value: "created_by.first_name" },
  { label: "Creation Date", value: "created_at" },
  { label: "Last Updated", value: "updated_at" },
];

export const optionsForEmployee = [
  { label: "Role", value: "role" },
  { label: "Email", value: "email" },
  { label: "Status", value: "status" },
  { label: "Employee Type", value: "employee_type" },
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Creation Date", value: "created_at" },
  { label: "Last Updated", value: "updated_at" },
];

export const optionsForPayroll = [
  { label: "Currency", value: "currency" },
  { label: "Status", value: "status" },
  { label: "Gross Salary", value: "gross_salary" },
  { label: "Reimbursement", value: "reimbursement" },
  { label: "Expenses", value: "expenses" },
  { label: "Employee Type", value: "employee_type" },
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
];

export const rolesFormKeys = {
  [FORM.ROLES]: ["_id", "roleName", "allPermissions", "action"],
};

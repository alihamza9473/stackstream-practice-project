export enum FORM {
  REIMBURSEMENT,
  EMPLOYEE,
  FINANCIAL,
  EXPENSE,
  PROFILE,
  PAYMENT,
  PAYROLL,
  ROLES
}

export enum SCREEN {
  'XSM' = 465,
  'SM' = 768,
  'MD' = 992,
  'LG' = 1200
}

export enum ROLES {
  SUPER_ADMIN = 'super admin',
  ADMIN = 'admin',
  EMPLOYEE = 'employee',
  ACCOUNTANT = 'accountant',
  ADMIN_OFFICER = 'admin officer',
  HUMAN_RESOURCE_GENERALIST = 'human resource generalist'
}

export enum REIMBURSEMENT_STATUSES {
  PENDING_APPROVAL = 'pending approval',
  APPROVED = 'approved',
  HOLD = 'hold',
  DISMISSED = 'dismissed',
  DELETED = 'deleted'
}

export enum USER_STATUSES {
  DISABLED = 'disable',
  PENDING_VERIFICATION = 'pending approval',
  ACTIVE = 'active',
  HOLD = 'hold',
  SUSPENDED = 'suspended',
  DELETED = 'deleted'
}

export enum STATUSES {
  ENABLED = 'enable',
  DISABLED = 'disable',
  ACTIVE = 'active',
  DELETED = 'deleted',
  ONHOLD = 'on hold'
}

export enum PAYROLLRUN_STATUSES {
  PAID = 'paid',
  PENDING = 'pending',
  ACTIVE = 'active',
  DELETED = 'deleted'
}

export enum PAYROLL_DETAILS {
  REIMBURSEMENT = 'reimbursement',
  EXPENSE = 'expense',
  TAX = 'tax',
  EXCHANGE_RATE = 'exchange rate'
}

export enum STATUS {
  APPROVED = 'success',
  DISMISSED = 'danger',
  PAID = 'info',
  PENDING = 'warning',
  ACTIVE = 'success',
  HOLD = 'warning',
  SUSPENDED = 'warning',
  'PENDING APPROVAL' = 'warning'
}

export enum Currency {
  USD = '$',
  PKR = 'PKR',
  EURO = '€'
}

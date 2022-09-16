// import React from 'react';
// import moment from 'moment';
// import get from 'lodash/get';
// import { Badge, NavLink } from 'reactstrap';
// import NumberFormat from 'react-number-format';
// import { Currency, PAYROLL_DETAILS, STATUS } from 'config';
// import { confirmationAlert } from 'utils/sweetAlert';
// import ActionMenu from 'components/Common/Table/ActionMenu';
// import { toUpperCase, alertTitle, alertText } from 'utils/helper';

// export const payrollRunColumns = (exchangeRate, getDetailsIntoPayrollRun) => {
//   const cols: any = [
//     {
//       name: 'Name',
//       selector: row => row?.resource?.first_name + ' ' + row?.resource?.last_name,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Employee type',
//       cell: row => <span className="text-capitalize">{row?.resource?.employee_type}</span>,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Gross Salary',
//       selector: row => (
//         <NumberFormat
//           value={row?.gross_salary}
//           displayType={'text'}
//           thousandSeparator={true}
//           prefix={`${toUpperCase(get(row, 'currency', ''))} `}
//           decimalScale={2}
//         ></NumberFormat>
//       ),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Profit Share',
//       selector: row => (
//         <NumberFormat
//           value={(get(row?.resource, 'profit_share', 0) / 100) * get(row?.profit, 'amount', 0) + get(row?.resource, 'fixed_amount', 0)}
//           displayType={'text'}
//           thousandSeparator={true}
//           prefix={`${toUpperCase(get(row, 'currency', ''))} `}
//           decimalScale={2}
//         ></NumberFormat>
//       ),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Reimbursements',
//       selector: row => (
//         <span
//           onClick={() => {
//             getDetailsIntoPayrollRun(PAYROLL_DETAILS.REIMBURSEMENT, row);
//           }}
//         >
//           <NavLink active href="#">
//             {row?.reimbursement?.reduce((totalAmount, r) => totalAmount + r.amount, 0)}
//           </NavLink>
//         </span>
//       ),
//       minWidth: '150px',
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Expenses',
//       selector: row => (
//         <span
//           onClick={() => {
//             getDetailsIntoPayrollRun(PAYROLL_DETAILS.EXPENSE, row);
//           }}
//         >
//           <NavLink active href="#">
//             {row?.expenses?.reduce((totalAmount, r) => totalAmount + r.amount, 0)}
//           </NavLink>
//         </span>
//       ),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Taxes',
//       selector: row => (
//         <span
//           onClick={() => {
//             getDetailsIntoPayrollRun(PAYROLL_DETAILS.TAX, row);
//           }}
//         >
//           <NavLink active href="#">
//             {row.taxes.current_tax_deduction}
//           </NavLink>
//         </span>
//       ),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Net Salary',
//       selector: row => (
//         <NumberFormat
//           value={
//             row?.gross_salary +
//             row?.reimbursement?.reduce((totalAmount, r) => totalAmount + r.amount, 0) +
//             row?.expenses?.reduce((totalAmount, r) => totalAmount + r.amount, 0) +
//             get(row?.resource, 'fixed_amount', 0) +
//             (get(row?.resource, 'profit_share', 0) / 100) * get(row?.profit, 'amount', 0) -
//             row?.taxes.current_tax_deduction
//           }
//           displayType={'text'}
//           thousandSeparator={true}
//           prefix={`${toUpperCase(get(row, 'currency', ''))} `}
//           decimalScale={2}
//         ></NumberFormat>
//       ),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Exchange Rates',
//       selector: row => (
//         <span
//           onClick={() => {
//             getDetailsIntoPayrollRun(PAYROLL_DETAILS.EXCHANGE_RATE, {
//               grossSalary: row?.gross_salary,
//               reimbursement: row?.reimbursement?.reduce((totalAmount, r) => totalAmount + r.amount, 0),
//               expenses: row?.expenses?.reduce((totalAmount, r) => totalAmount + r.amount, 0),
//               taxes: row?.taxes.current_tax_deduction,
//               profit: (get(row?.resource, 'profit_share', 0) / 100) * get(row?.profit, 'amount', 0),
//               usdToPkr: exchangeRate.usd_to_pkr,
//               euroToPkr: exchangeRate.euro_to_pkr
//             });
//           }}
//         >
//           <NavLink active href="#">
//             Details
//           </NavLink>
//         </span>
//       ),
//       sortable: true,
//       wrap: true
//     }
//   ];
//   return cols;
// };

// //////////// Modal Colunms ///////////////////

// export const expenseModalColumns = (): any => {
//   const cols: any = [
//     {
//       name: 'Amount', //selector: row => `${toUpperCase(get(row, 'currency', ''))} ${row?.amount}`,
//       selector: row => `${Currency[toUpperCase(row?.currency)]}${row?.amount}`,
//       sortable: true,
//       wrap: true
//     },

//     {
//       name: 'Expense Type',
//       selector: row => row?.type,
//       sortable: true,
//       wrap: true,
//       minWidth: '160px'
//     },
//     {
//       name: 'Status',
//       cell: row => (
//         <Badge
//           className={`font-size-12 text-capitalize  badge-soft-${STATUS[toUpperCase(get(row, 'status', ''))]}`}
//           color={STATUS[toUpperCase(get(row, 'status', ''))]}
//           pill
//         >
//           {get(row, 'status', '')}
//         </Badge>
//       ),
//       maxWidth: '175px'
//     },
//     {
//       name: 'Description',
//       selector: row => row?.description,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Created Date',
//       selector: row => (row?.created_at ? moment(row.created_at).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true,
//       minWidth: '160px'
//     }
//   ];
//   return cols;
// };

// export const reimbursementModalColumns = (): any => {
//   const cols: any = [
//     {
//       name: 'Amount', //selector: row => `${toUpperCase(get(row, 'currency', ''))} ${row?.amount}`,
//       selector: row => `${Currency[toUpperCase(row?.currency)]}${row?.amount}`,
//       sortable: true,
//       wrap: true
//     },

//     {
//       name: 'Perk',
//       selector: row => row?.perk,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Resource',
//       selector: row => row?.resource,
//       sortable: true,
//       wrap: true
//     },

//     {
//       name: 'Status',
//       cell: row => (
//         <Badge
//           className={`font-size-12 text-capitalize  badge-soft-${STATUS[toUpperCase(get(row, 'status', ''))]}`}
//           color={STATUS[toUpperCase(get(row, 'status', ''))]}
//           pill
//         >
//           {get(row, 'status', '')}
//         </Badge>
//       ),
//       maxWidth: '175px'
//     },
//     {
//       name: 'Description',
//       selector: row => row?.description,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Created Date',
//       selector: row => (row?.created_at ? moment(row.created_at).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true,
//       minWidth: '160px'
//     }
//   ];
//   return cols;
// };
// export const financialHistoryColumns = (): any => {
//   const cols: any = [
//     {
//       name: 'Source',
//       selector: row => row?.source,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Amount', //selector: row => `${toUpperCase(get(row, 'currency', ''))} ${row?.amount}`,
//       selector: row => `${Currency[toUpperCase(row?.currency)]}${row?.amount}`,
//       sortable: true,
//       wrap: true
//     },

//     {
//       name: 'Status',
//       cell: row => (
//         <Badge
//           className={`font-size-12 text-capitalize  badge-soft-${STATUS[toUpperCase(get(row, 'status', ''))]}`}
//           color={STATUS[toUpperCase(get(row, 'status', ''))]}
//           pill
//         >
//           {get(row, 'status', '')}
//         </Badge>
//       ),
//       maxWidth: '175px'
//     },
//     {
//       name: 'Action',
//       selector: row => row?.action,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Created Date',
//       selector: row => (row?.created_at ? moment(row.created_at).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true,
//       minWidth: '160px'
//     }
//   ];
//   return cols;
// };

// ///////////// End Modal Columns ////////////////////
// export const payrollColumns = (addEditPayrollAction, deletePayrollAction): any => {
//   const cols: any = [
//     {
//       name: 'Name',
//       selector: row => row?.resource?.first_name + ' ' + row?.resource?.last_name,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Employee type',
//       cell: row => <span className="text-capitalize">{row?.resource?.employee_type}</span>,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Gross Salary',
//       selector: row => <span className="text-capitalize">{row?.gross_salary}</span>,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Currency',
//       selector: row => <span>{toUpperCase(row?.currency)}</span>,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Status',
//       cell: row => (
//         <Badge
//           className={`font-size-12 text-capitalize  badge-soft-${STATUS[toUpperCase(get(row, 'status', ''))]}`}
//           color={STATUS[toUpperCase(get(row, 'status', ''))]}
//           pill
//         >
//           {get(row, 'status', '')}
//         </Badge>
//       ),
//       maxWidth: '175px'
//     },
//     {
//       name: 'Action',
//       cell: row => (
//         <ActionMenu
//           row={row}
//           handleEdit={row => addEditPayrollAction({ showForm: true, payrollId: row._id })}
//           handleDelete={row => deletePayrollAction({ payrollId: row._id })}
//         />
//       ),
//       sortable: true,
//       wrap: true,
//       maxWidth: '75px'
//     }
//   ];
//   return cols;
// };

// export const reimbursementColumns = (addEditReimbursementAction, deleteReimbursementAction) => {
//   const handleReimbursementDelete = (action, row) => {
//     if (action === 'yes') deleteReimbursementAction({ reimbursementId: row._id });
//   };
//   const cols: any = [
//     {
//       name: 'Name',
//       selector: row => row?.resource?.first_name + ' ' + row?.resource?.last_name,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Email',
//       selector: row => row?.resource?.email,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Amount',
//       selector: row => `${toUpperCase(get(row, 'currency', ''))} ${row?.amount}`,
//       sortable: true,
//       wrap: true,
//       maxWidth: '150px'
//     },
//     {
//       name: 'Submission date',
//       selector: row => (row?.created_at ? moment(row.created_at).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true,
//       maxWidth: '180px'
//     },
//     {
//       name: 'Perk',
//       cell: row => (
//         <span>
//           <i
//             className={
//               row?.perk?.type === 'gym'
//                 ? 'bx bx-dumbbell f-13'
//                 : row?.perk?.type === 'medical'
//                 ? 'bx bx-plus-medical'
//                 : row?.perk?.type === 'dinner'
//                 ? 'bx bx-restaurant'
//                 : row?.perk?.type === 'entertainment'
//                 ? 'bx bx-video-plus'
//                 : ''
//             }
//           ></i>
//           <span className="text-capitalize">{get(row, 'perk.type', '')}</span>
//         </span>
//       ),
//       sortable: true,
//       wrap: true,
//       maxWidth: '100px'
//     },
//     {
//       name: 'Status',
//       cell: row => (
//         <Badge
//           className={`font-size-12 text-capitalize width-fitContent full-width badge-soft-${STATUS[toUpperCase(get(row, 'status', ''))]}`}
//           color={STATUS[toUpperCase(get(row, 'status', ''))]}
//           pill
//         >
//           {get(row, 'status', '')}
//         </Badge>
//       ),
//       maxWidth: '175px'
//     },
//     {
//       name: 'Description',
//       selector: row => row?.description,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Action',
//       cell: row => (
//         <ActionMenu
//           row={row}
//           handleEdit={row => addEditReimbursementAction({ showForm: true, reimbursementId: row._id })}
//           handleDelete={row => confirmationAlert(handleReimbursementDelete, row, alertText, alertTitle('Reimbursment'))}
//         />
//       ),
//       sortable: true,
//       wrap: true,
//       maxWidth: '75px'
//     }
//   ];
//   return cols;
// };

// export const employeeColumns = (addEditEmployeeAction, deleteEmployeeAction) => {
//   const handleEmployeeDelete = (action, row) => {
//     if (action === 'yes') deleteEmployeeAction({ employeeId: row._id });
//   };
//   const cols: any = [
//     {
//       name: 'Name',
//       selector: row => get(row, 'first_name', '') + ' ' + get(row, 'last_name', ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Email',
//       selector: row => row?.email,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Type',
//       cell: row => <span className="text-capitalize">{get(row, 'employee_type', '')}</span>,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Roles',
//       selector: row => (row?.role ? row.role.map(r => r).join(' | ') : ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Joining date',
//       selector: row => (row?.joining_date ? moment(row.joining_date).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Office Branch',
//       selector: row => row?.office_branch,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Last Updated',
//       selector: row => (row?.updated_at ? moment(row.updated_at).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Status',
//       cell: row => (
//         <Badge
//           className={`font-size-12 text-capitalize width-fitContent full-width badge-soft-${STATUS[toUpperCase(get(row, 'status', ''))]}`}
//           color={STATUS[toUpperCase(get(row, 'status', ''))]}
//           pill
//         >
//           {get(row, 'status', '')}
//         </Badge>
//       )
//     },
//     {
//       name: 'Action',
//       cell: row => (
//         <ActionMenu
//           row={row}
//           handleEdit={row => addEditEmployeeAction({ showForm: true, employeeId: row._id })}
//           handleDelete={row => confirmationAlert(handleEmployeeDelete, row, alertText, alertTitle('Employee'))}
//         />
//       ),
//       sortable: true,
//       wrap: true,
//       maxWidth: '75px'
//     }
//   ];
//   return cols;
// };

// export const financialColumns = (addEditFinancialAction, getFinancialHistoryAction, deleteFinancialAction) => {
//   const handleFinancialDelete = (action, row) => {
//     if (action === 'yes') deleteFinancialAction({ financialId: row._id });
//   };
//   const cols: any = [
//     {
//       name: 'Source',
//       selector: row => toUpperCase(row?.source),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Currency',
//       selector: row => `${toUpperCase(get(row, 'currency', ''))}`,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Amount',
//       selector: row => `${get(row, 'amount', '')}`,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Added By',
//       selector: row => get(row, 'created_by.first_name', '') + ' ' + get(row, 'created_by.last_name', ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Creation date',
//       selector: row => (row?.created_at ? moment(row.created_at).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Last Updated',
//       selector: row => (row?.updated_at ? moment(row.updated_at).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Status',
//       cell: row => (
//         <Badge
//           className={`font-size-12 text-capitalize width-fitContent full-width badge-soft-${
//             get(row, 'status', '') === 'active' ? 'success' : get(row, 'status', '') === 'deleted' ? 'danger' : 'warning'
//           }`}
//           color={get(row, 'status', '') === 'active' ? 'success' : get(row, 'status', '') === 'deleted' ? 'danger' : 'warning'}
//           pill
//         >
//           {get(row, 'status', '')}
//         </Badge>
//       )
//     },
//     {
//       name: 'Action',
//       cell: row => (
//         <ActionMenu
//           row={row}
//           handleEdit={row => addEditFinancialAction({ showForm: true, financialId: row._id })}
//           showHistory={row => getFinancialHistoryAction({ financialId: row._id })}
//           handleDelete={row => confirmationAlert(handleFinancialDelete, row, alertText, alertTitle('Financial'))}
//         />
//       ),
//       sortable: true,
//       wrap: true,
//       maxWidth: '75px'
//     }
//   ];
//   return cols;
// };

// export const expenseColumns = (addEditExpenseAction, deleteExpenseAction) => {
//   const handleExpenseDelete = (action, row) => {
//     if (action === 'yes') deleteExpenseAction({ expenseId: row._id });
//   };
//   const cols: any = [
//     {
//       name: 'Added By',
//       selector: row => row?.created_by?.first_name + ' ' + row?.created_by?.last_name,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Paid By',
//       selector: row => get(row, 'paid_by.first_name', '') + ' ' + get(row, 'paid_by.last_name', ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Description',
//       selector: row => `${get(row, 'description', '')}`,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Creation date',
//       selector: row => (row?.created_at ? moment(row.created_at).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Last Updated',
//       selector: row => (row?.updated_at ? moment(row.updated_at).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Amount',
//       selector: row => `${get(row, 'amount', '')}`,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Currency',
//       selector: row => `${toUpperCase(get(row, 'currency', ''))}`,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Status',
//       cell: row => (
//         <Badge
//           className={`font-size-12 text-capitalize width-fitContent full-width badge-soft-${STATUS[toUpperCase(get(row, 'status', ''))]}`}
//           color={STATUS[toUpperCase(get(row, 'status', ''))]}
//           pill
//         >
//           {get(row, 'status', '')}
//         </Badge>
//       )
//     },
//     {
//       name: 'Action',
//       cell: row => (
//         <ActionMenu
//           row={row}
//           handleEdit={row => addEditExpenseAction({ showForm: true, expenseId: row._id })}
//           handleDelete={row => confirmationAlert(handleExpenseDelete, row, alertText, alertTitle('Expense'))}
//         />
//       ),
//       sortable: true,
//       wrap: true,
//       maxWidth: '75px'
//     }
//   ];
//   return cols;
// };

// export const transactionColumns = () => {
//   const cols: any = [
//     {
//       name: 'Name',
//       selector: row => `${get(row, 'resource.first_name', '')} ${get(row, 'resource.last_name', '')}`,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Reimbursements',
//       selector: row => (
//         <NumberFormat
//           value={row?.reimbursement?.reduce((totalAmount, r) => totalAmount + r.amount, 0)}
//           displayType={'text'}
//           thousandSeparator={true}
//           prefix={`${toUpperCase(get(row, 'currency', ''))} `}
//           decimalScale={2}
//         ></NumberFormat>
//       ),
//       minWidth: '150px',
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Expenses',
//       selector: row => (
//         <NumberFormat
//           value={row?.expenses?.reduce((totalAmount, r) => totalAmount + r.amount, 0)}
//           displayType={'text'}
//           thousandSeparator={true}
//           prefix={`${toUpperCase(get(row, 'currency', ''))} `}
//           decimalScale={2}
//         ></NumberFormat>
//       ),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Paid From',
//       selector: row => toUpperCase(row?.paid_from?.source),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Taxes',
//       selector: row => row.taxes,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Gross Salary',
//       selector: row => (
//         <NumberFormat
//           value={get(row, 'gross_salary', 0)}
//           displayType={'text'}
//           thousandSeparator={true}
//           prefix={`${toUpperCase(get(row, 'currency', ''))} `}
//           decimalScale={2}
//         ></NumberFormat>
//       ),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Profit Share',
//       selector: row => (
//         <NumberFormat
//           value={get(row, 'profit', 0)}
//           displayType={'text'}
//           thousandSeparator={true}
//           prefix={`${toUpperCase(get(row, 'currency', ''))} `}
//           decimalScale={2}
//         ></NumberFormat>
//       ),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Status',
//       cell: row => (
//         <Badge
//           className={`font-size-12 text-capitalize full-width badge-soft-${STATUS[toUpperCase(get(row, 'status', ''))]}`}
//           color={STATUS[toUpperCase(get(row, 'status', ''))]}
//           pill
//         >
//           {get(row, 'status', '')}
//         </Badge>
//       )
//     },
//     {
//       name: 'Net Salary',
//       selector: row => (
//         <NumberFormat
//           value={get(row, 'net_salary', 0)}
//           displayType={'text'}
//           thousandSeparator={true}
//           prefix={`${toUpperCase(get(row, 'currency', ''))} `}
//           decimalScale={2}
//         ></NumberFormat>
//       ),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'IN $',
//       selector: row => <NumberFormat value={row?.amount_in_dollar} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}></NumberFormat>,
//       sortable: true,
//       wrap: true
//     }
//     // {
//     //   name: 'Action',
//     //   cell: row => (
//     //     <ActionMenu
//     //       row={row}
//     //       handleEdit={row => addEditTransactionAction({ showForm: true, transactionId: row._id })}
//     //       handleDelete={row => deleteTransactionAction({ transactionId: row._id })}
//     //     />
//     //   ),
//     //   sortable: true,
//     //   wrap: true,
//     //   maxWidth: '75px'
//     // }
//   ];
//   return cols;
// };

// export const rolesColumns = (addEditRolesAction, deleteRolesAction) => {
//   const handleRolesDelete = (action, row) => {
//     if (action === 'yes') deleteRolesAction({ rolesId: row._id });
//   };
//   const cols: any = [
//     {
//       name: 'Role',
//       selector: row => row?.role_name,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Modules',
//       selector: row => (row?.permissions ? Array.from(new Set(row?.permissions.map(item => toUpperCase(item?.resource)))).join(' | ') : ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Created At',
//       selector: row => (row?.createdAt ? moment(row.createdAt).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Action',
//       cell: row => (
//         <ActionMenu
//           row={row}
//           handleEdit={row => addEditRolesAction({ showForm: true, rolesId: row._id })}
//           handleDelete={row => confirmationAlert(handleRolesDelete, row, alertText, alertTitle('Role'))}
//         />
//       ),
//       sortable: true,
//       wrap: true,
//       maxWidth: '75px'
//     }
//   ];
//   return cols;
// };

// export const perksColumns = () => {
//   const cols: any = [
//     {
//       name: 'Status',
//       selector: row => row?.status,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Type',
//       selector: row => row?.type,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'description',
//       selector: row => row?.description,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Limit',
//       selector: row => row?.limit,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Employee type',
//       selector: row => row?.employee_type,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Perk Cycle',
//       selector: row => row?.perk_cycle,
//       sortable: true,
//       wrap: true
//     },
//     {
//       name: 'Created At',
//       selector: row => (row?.created_at ? moment(row.createdAt).format('DD-MMM-YYYY HH:mm:ss') : ''),
//       sortable: true,
//       wrap: true
//     },
//   ];
//   return cols
// }

import React from "react";

const TestComponet = () => {
  return <div>Test Component</div>;
};
export default TestComponet;

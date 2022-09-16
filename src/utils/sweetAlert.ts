import Swal from 'sweetalert2';
export const confirmationAlert = (onAction, obj = {}, title, text) => {
  Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#556ee6',
    cancelButtonColor: '#74788d',
    confirmButtonText: 'Yes !'
  }).then(value => {
    value.isConfirmed ? onAction('yes', obj) : onAction('no', obj);
  });
};

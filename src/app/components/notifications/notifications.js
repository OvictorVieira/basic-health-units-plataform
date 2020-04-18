import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/scss/notification.scss';

export const createSuccessNotification = (message = 'Sucesso.') => {
  let notifications =  {
    title: 'Sucesso!',
    message: message,
    type: 'success',
  };

  _showNotification(notifications);
};

export const createDangerNotification = (message = 'Ocorreu algum erro inesperado.') => {
  let notifications =  {
    title: 'Erro!',
    message: message,
    type: 'danger',
  };

  _showNotification(notifications);
};

export const createInfoNotification = (message) => {
  let notifications =  {
    title: 'Informação!',
    message: message,
    type: 'info',
  };

  _showNotification(notifications);
};

export const createWarningNotification = (message) => {
  let notifications =  {
    title: 'Atenção!',
    message: message,
    type: 'warning',
  };

  _showNotification(notifications);
};

function _showNotification(notifications) {
  store.addNotification({
    ...notifications,
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 2000,
      pauseOnHover: true
    }
  })
}

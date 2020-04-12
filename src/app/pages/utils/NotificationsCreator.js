import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

class NotificationsCreator {

  CreateSuccessNotification(message = 'Sucesso.') {
    let notifications =  {
      title: 'Sucesso!',
      message: message,
      type: 'success',
    };

    this.ShowNotification(notifications);
  }

  CreateDangerNotification(message = 'Ocorreu algum erro inesperado.') {
    let notifications =  {
      title: 'Erro!',
      message: message,
      type: 'danger',
    };

    this.ShowNotification(notifications);
  }

  CreateInfoNotification(message) {
    let notifications =  {
      title: 'Informação!',
      message: message,
      type: 'info',
    };

    this.ShowNotification(notifications);
  }

  CreateWarningNotification(message) {
    let notifications =  {
      title: 'Atenção!',
      message: message,
      type: 'warning',
    };

    this.ShowNotification(notifications);
  }

  ShowNotification(notifications) {
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

}

export default NotificationsCreator;
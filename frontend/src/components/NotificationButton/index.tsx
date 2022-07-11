import icon from '../../assets/img/notification-icon.svg';
import './styles.css' // mesma pasta é ponto. Pasta anterior é ponto ponto

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;

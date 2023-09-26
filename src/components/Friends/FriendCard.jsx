import PropTypes from 'prop-types';
import css from "./FriendCard.module.css"


export default function FriendCard({ avatar, name, isOnline }) {
    
    return (
  <li className={css.item}>
            <span className={`${css.indicator} ${isOnline ? css.online : css.offline }`}></span>
  <img className="avatar" src={avatar} alt= "User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li> 

    )
} 


FriendCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}
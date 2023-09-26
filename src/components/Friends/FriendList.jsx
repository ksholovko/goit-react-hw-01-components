import PropTypes from 'prop-types';
import FriendCard from './FriendCard';
import css from "./FriendList.module.css"


export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
        <FriendCard key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
      ))}
     </ul>
    )
} 

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
            id:PropTypes.number.isRequired
    })
    )
}
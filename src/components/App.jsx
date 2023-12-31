import Profile from "./Profile/Profile"
import Statistics from "./Statictics/Statistics";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./Transactions/TransactionHistory";
import user from "../user.json";
import data from "../data.json";
import friends from '../friends.json';
import transactions from "../transactions.json";


export const App = () => {
  return (
    <div    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
        
      />
      <Statistics title="Upload stats" stats={data} />


  <FriendList friends={friends}/>
    
  
<TransactionHistory items={transactions} />;
      
    </div>
  );
};

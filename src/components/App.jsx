import Profile from 'components/Profile'
import Statistics from './Statistics'
import user from '../user'
import data from '../data'

export default function App (){
    return <div>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />

        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
    </div>
}
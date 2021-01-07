import contacts from '../data/contacts.json'
import Contact from './Contact'

const Main = () => {
    console.log(contacts.results)
    return (
        <div>
            {contacts.results.map((contact, idx)=>{
                return <Contact contact={contact} idx={idx}/>
            })}
        </div>
    )
}

export default Main;
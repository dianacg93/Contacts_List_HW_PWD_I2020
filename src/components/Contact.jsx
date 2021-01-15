import '../App.css'

const Contact = ({contact, idx}) => {

    return (
        <div key={idx.toString()} className="contact-card">
            <div className="contact-image-container">
                <img src={contact.picture.large} alt="contact_image" className="contact-image" />
            </div>
            <div className="contact-details-container">
                <h3 className="contact-name">{contact.name.title} {contact.name.first} {contact.name.last}</h3>
                <p className="contact-phone">Home: {contact.phone}</p>
                <p className="contact-cell">Mobile: {contact.cell}</p>
            </div>
        </div>
    )
}

export default Contact
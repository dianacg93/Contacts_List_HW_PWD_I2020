const Contact = (props) => {
    console.log("props: ", props)
    const {contact} = props;
    // console.log("Contact", contact)

    return (
        <div id={props.idx}>
            <img src={contact.picture.thumbnail}/>
            <h3>{contact.name.title} {contact.name.first} {contact.name.last}</h3>
            <p>Home: {contact.phone}</p>
            <p>Mobile: {contact.cell}</p>
        </div>
    )
}

export default Contact
const Contact = (props) => {
    console.log("props: ", props)
    const {contact} = props;
    // console.log("Contact", contact)

    return (
        <div id={props.idx}>
            <h3>{contact.name.title} {contact.name.first} {contact.name.last}</h3>
            <p>Gender: {contact.gender}</p>
            <p></p>
            <p></p>
        </div>
    )
}

export default Contact
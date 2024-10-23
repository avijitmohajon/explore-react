export default function Friend({ props }) {
    const { name, id, email, phone } = props;

    return (
        <div className="element">
            <p>ID: {id}</p>
            <h3>Name: {name} </h3>
            <h4>Email: {email}</h4>
            <h5>Phone: {phone}</h5>
            <p></p>
        </div>
    )
}
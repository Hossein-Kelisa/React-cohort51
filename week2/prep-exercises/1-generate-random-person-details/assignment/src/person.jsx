function Person ({person}) {
    if (!person) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h1>Random Person</h1>
            <ul>
                <li>First Name: {person.name.first}</li>
                <li>Last Name: {person.name.last}</li>
                <li>Email: {person.email}</li>
            </ul>
        </div>
    )
}
export default Person
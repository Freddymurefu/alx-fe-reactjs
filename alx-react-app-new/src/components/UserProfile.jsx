function UserProfile(props) {
return(
    <div style={{ border: '1px solid grey', padding: '10px', fontFamily: 'Trebuchet', fontSize: '16px', margin: '10px'}}>
        <h2 style={{ color: 'skyblue'}}>{props.name}</h2>
        <p>Age: <span style={{ fontWeight: 'bold' }}>  {props.age} </span></p>
        <p>Bio: {props.bio}</p>
    </div>
)
}

export default UserProfile
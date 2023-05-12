export function Greeting(props) {
  return <h1>{props.title}</h1>;
}

export function UserCard({
  name,
  points,
  email,
  amount,
  married,
  address,
  greet,
}) {
  console.log("hola", name, points, email, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>{points}</p>
      <p>{email}</p>
      <p>${amount}</p>
      <p>{married ? "Esta Casado" : "Esta Soltero"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Street: {address.street}</li>
        <li>Number:{address.number}</li>
      </ul>
    </div> 
  );
}

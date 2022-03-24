export const Item = ({ element }) => (
  <li
    key={element.id}
    style={{ border: "1px solid black", marginBottom: "1rem" }}
  >
    <b>{`${element.first_name} ${element.last_name}`}</b>
    <span>{` - ${element.email} - ${element.gender}`}</span>
    <pre>{element.ipAddress}</pre>
  </li>
);

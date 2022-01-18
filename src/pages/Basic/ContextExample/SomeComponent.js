import { useMyContext } from "./MyContext";

export const SomeComponent = () => {
  const contextData = useMyContext();
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
    >
      <table>
        {Object.keys(contextData).map((key) => {
          return (
            <tr key={key}>
              <td>{key}: </td>
              {typeof contextData[key] === "function" ? (
                <td>[Function]</td>
              ) : (
                <td>{JSON.stringify(contextData[key], null, 2)}</td>
              )}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

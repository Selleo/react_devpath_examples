import { memo, useCallback, useMemo, useState } from "react";
import MOCK_DATA from "../MOCK_DATA";
import { getNewElement } from "../helpers";
import { Item } from "../Item";

function List() {
  const [list, setList] = useState(MOCK_DATA);

  const filteredListElements = useMemo(
    () => list.filter((_, index) => index % 24),
    [list]
  );

  const addElementToList = useCallback(
    () => setList((currentList) => [getNewElement(), ...currentList]),
    []
  );

  return (
    <div>
      <h3>Some big list</h3>
      <button onClick={addElementToList}>Add element to list</button>
      <ol style={{ width: "40%", margin: "0 auto" }}>
        {filteredListElements.map((element) => (
          <Item element={element} />
        ))}
      </ol>
    </div>
  );
}

export default memo(List);

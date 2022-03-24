import { memo } from "react";
import { Item } from "../Item";

function List({filteredListElements, addElementToList}) {
  return (
    <div>
      <h3>Some big list</h3>
      <button onClick={addElementToList}>Add element to list</button>
      <ol style={{width: "40%", margin: '0 auto'}}>
        {filteredListElements.map((element) => (
          <Item element={element} />
        ))}
      </ol>
    </div>
  );
}

export default memo(List)

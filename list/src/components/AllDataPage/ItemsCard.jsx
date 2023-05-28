import React from "react";

function ItemsCard({ list }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "2em",
      }}
    >
      <div>
        {list[0]?.data.results.map((item) => (
          <div key={item.url}>
            <strong>{item.name}</strong>
          </div>
        ))}
      </div>
      <div>
        {list[1].data.results.map((item) => (
          <div key={item.url}>
            <strong>{item.name}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsCard;

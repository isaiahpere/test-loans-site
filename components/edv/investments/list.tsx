import React from "react";
import ListItem from "./list-item";

import lenders from "../../../public/data/edv/lenderList.json";

const List = () => {
  return (
    <section className="flex items-center justify-center flex-col gap-y-4 p-4">
      {lenders.lenders.map((lender) => (
        <ListItem
          key={lender.id}
          name={lender.name}
          image={lender.image}
          url={lender.url}
          isFeatured={lender.isFeatured}
        />
      ))}
    </section>
  );
};

export default List;

import React from "react";
import { people } from "../../../data";
import Person from "./Person";

const List = () => {
  return (
    <div>
      {people.map((people) => {
        console.log(people);
        return <Person key={people.id} {...people}></Person>;
      })}
    </div>
  );
};

export default List;

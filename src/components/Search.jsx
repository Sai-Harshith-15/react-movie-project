import React from "react";

// destructuring

// const person = {
//   name: "sai",
//   age: "25",
//   location: "hyderabad",
// };

// we want to return we need to written like this person.name, person.age, person.location

// by doing the destructuring

// const { name, age, location } = person;

// we can use directly the name

// console.log(name)

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;

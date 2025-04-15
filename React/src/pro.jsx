import React, { useState } from "react";

const list = [
    {
      title: "React ",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux ",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  
  
const getTitle = (title) => title;
const List = () => (
        <ul>
            {list.map((item) => (
                    <li key={item.objectID}>
                    <span>
                    <a href={item.url}>{item.title}</a> 
                    </span> 
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                    </li>
            ))}
        </ul>
);

const Search = () => {
    const [query, setQuery] = useState("");
    const handleChange = (event) => {
      console.log(event); 
      console.log(event.target.value); 
      setQuery(event.target.value); 
    };
  
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          type="text"
          value={query} 
          onChange={handleChange}
        />
      </div>
    );
  };
  
const Pro = () => (
    <div>
      <h1>Hello {getTitle("React")}</h1>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List />
    </div>
  );
export default Pro ;

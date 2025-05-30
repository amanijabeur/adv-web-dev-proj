import React, { useState } from "react";
const getTitle = (title) => title;
const List = (props) => (
        <ul>
            {props.list.map((item) => (
                    <Item key={item.objectID} item={item} />
            ))}
        </ul>
);
const Item = (props) => (
  <li>
  <span>
  <a href={props.item.url}>{props.item.title}</a> 
  </span> 
  <span>{props.item.author}</span>
  <span>{props.item.num_comments}</span>
  <span>{props.item.points}</span>
  </li>
);

const Search = (props) => {
    console.log("Search renders");
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={props.onSearch} />
        <p>
          Searching for <strong>{props.searchTerm}</strong>.
        </p>
      </div>
    );
  };
  
const Pro = () => {
  const stories = [
    {
      title: "React ",
      url: "https://reactjs.org/",
      author: "Jordan Walke ",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux ",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark ",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value); 
  };
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
    );
};
export default Pro ;

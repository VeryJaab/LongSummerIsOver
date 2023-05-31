import { FC } from "react";
import React from "react";
import {AiOutlineSearch,AiOutlineClose} from "react-icons/ai";
import "./SearchBar.css";

const Search: FC = () =>{
    const [input, setInput] = React.useState('');
    return <div className="search">
    <div className="search-from-wrapper">
        <AiOutlineSearch id="search-icon"/>
        <input 
        placeholder="Search for course(course no., course title)"
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => {
            if (e.key !== "Enter") return;
        }}
        />
    </div>
       
    </div>;
    
}

export default Search;

import { FC } from "react";
import React from "react";
import {AiOutlineSearch} from "react-icons/ai";

const Search: FC = () =>{
    // Test
    const [text, setText] = React.useState('');
    return <div className="search">
        <input 
        type="text" 
        placeholder="Search for course in semester(course no., course title)" 
        value={text} 
        onChange={e => setText(e.target.value)}
        />
        <button><AiOutlineSearch/></button>
    </div>;
}

export default Search;
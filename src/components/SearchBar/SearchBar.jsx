import { useState } from "react";



const StyledImput ={ 
marginRight: "15px",
padding:"10px",
borderRadius:"5px",
}

const StyledBarra = {
backgroundColor: "#d600ed",
border:"0px",
color: "black",
borderRadius: "5px",
fontWeight: "5px",
fontSize:"15px",
padding:"10px",
margin: "25px 5px 25px 5px",

}

export default function SearchBar(props) {
  const [character, setCharacter]= useState(0);
  
  const handleSearch = (event) => {
   let {value} = event.target;
   setCharacter(value);
  };


   return (
      <div>
         
          <input style={StyledImput} type='search' onChange={handleSearch} />

      <button style={StyledBarra} onClick={() => props.onSearch(character)}>
         Agregar
         </button>
         <button style={StyledBarra} onClick={props.random}>Random</button>
      </div>
   );
}

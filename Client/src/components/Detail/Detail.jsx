import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const texto = { color: "violet" };
const info = { textAlign: "left", fontSize: "24px" };
const image = { borderRadius: "10px", border: "2px solid darkslateblue" };
const divPrincipal = {
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
    margin: "auto",
    marginTop: "auto",
};
const styleButton = {
    backgroundColor: "black",
    color: "purple",
    border: "0px",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "15px",
    padding: "10px",
    marginTop: "35px",
    cursor: "pointer",
};

export default function Detail() {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({
        name: "",
        status: "",
        species: "",
        gender: "",
        origin: "",
        image: "",
    });

    const navigate = useNavigate();
    
    
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter({
                        name: char.name,
                        status: char.status,
                        species: char.species,
                        gender: char.gender,
                        origin: char.origin.name,
                        image: char.image,
                    });
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
    }, [detailId]);

    return (
        <div>
            <div style={divPrincipal}>
                <div style={info}>
                   { character.name && (<p>
                        <b style={texto}>Name:</b>
                        {character.name}
                    </p>)}
                    {character.status && (<p>
                        <b style={texto}>Status:</b>
                        {character.status}
                    </p>)}
                    {character.species && (<p>
                        <b style={texto}>Species:</b>
                        {character.species}
                    </p>)}
                    {character.gender && ( <p>
                        <b style={texto}>Gender:</b>
                        {character.gender}
                    </p>)}
                    {character.origin && (<p>
                        <b style={texto}>Origin:</b>
                        {character.origin.name}
                    </p>)}
                </div>
                <img style={image} src={character.image} alt={character.name} />
            </div>
            <button style={styleButton} onClick={()=> navigate(`/home`)}>back to home</button>
        </div>
    );
}
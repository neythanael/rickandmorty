import Card from '../Card/Card.jsx';
import styled from 'styled-components';


const DivCard = styled.div`
display: flex;
justify-content: space-evenly;
`;


export default function Cards(props) {
   const { characters } = props;
   return (<DivCard>
      {characters.length === 0 ?
      (<p style={{color:"violet", marginTop:"190px", fontSize:"45px"}}>
         Busca un personaje!
      </p>)
      :
      (characters.map((e)=>{
         return <Card
         id={e.id}
         name={e.name}
         species={e.species}
         gender={e.gender}
         image={e.image}
         onClose={() => props.onClose(e.id)}
         key={e.id}
       />
      }))}
   </DivCard>);
}

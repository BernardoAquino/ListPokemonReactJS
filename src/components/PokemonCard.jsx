import React from "react";
import styled from "styled-components";

const PokemonCard = ({ pokemon: { name }, index}) => {
    return ( 
    <StyledCard>
        <StyledName>{name}</StyledName>
        <StyledImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        />
    </StyledCard>
    );
}

const StyledCard = styled.div`    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: #182634;
    text-align: center;
    transition: 0.3s;
    min-width: 18%;
    height: 200px
    border-radius: 2px;
    display: inline-block;
    margin: 1rem;
    position: relative`; 

const StyledName = styled.p`
    font-size: 18;
    font-family: 'Bangers', cursive;
    padding: 2px 16px;
    color: white
`;

const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    padding: 20px
`;
export default PokemonCard
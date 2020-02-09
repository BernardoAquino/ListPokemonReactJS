import React, { useState, useEffect } from "react";  
import styled, { keyframes } from "styled-components";
import { getPokemons } from "./../requests/poke";
import PokemonCard from "./PokemonCard";
import PokemonLogo from "../assets/poke_logo.png"

const Lista = () => {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const proximo = () => setPage(page + 1);
  const anterior = () => {
    if(page === 0) {
      alert("Não é possível voltar!")
    }else {
      setPage(page - 1)
    }
  };

  useEffect(() => {
    getPokemons(page, (result) => setPokemons(result));
  },[page]);

  return (
    <StyledContainer>
    <StyledImage src={PokemonLogo}/>
    <StyledButton onClick={proximo}>Próximo</StyledButton>
    <StyledButton onClick={anterior}>Anterior</StyledButton>
      {pokemons.map((poke, index) => {
       return <PokemonCard pokemon={poke} index={page * 20 + (index + 1)} />
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background: #e2e1e0;
  text-align: center;
`;

const StyledButton = styled.button`
  margin-left: 40%;
  margin-right: 40%;
  margin-top: 20px;
  background-color: #282c34;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
`;

const StyledImage = styled.img`
  width: 200px;
`;

export default Lista;
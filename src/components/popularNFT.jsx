import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  width: 40%;
  height: 40%;
  margin: 5px;
  max-height: 50vh;
  max-width: 40vh;
  border: none;
  border-radius: 10px;
  padding: 8px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  width: 100%; 
`;

const ImageContainer = styled.div`
  width: 100%;
  min-width: 13vh;
  overflow: hidden; 
  border: none;
  border-radius: 10px 10px 0px 0px;

`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; 
`;

const ProjectInfo = styled.div`
  background-color: #f0f0f3;
  border: none;
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
  
`;

const CardContainerHovered = styled(CardContainer)`
  &:hover {
    transform: scale(1.05); 
       ${ProjectInfo} {
      display: block;
    }
  }
`;

const NFTName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 2px;
`;

const Price = styled.div`
  font-size: 10px;
  color: gray;
  
`;

const Author = styled.div`
  font-size: 10px;
  margin-bottom: 2px;
  color: #1ED760;
`;



function Popular({ nft, onClick }) {
  const navigate = useNavigate();

  const handleNFTClick = () => {
    navigate(`/detail`);
  };

  const [hovered, setHovered] = useState(false);

  return (
    <CardContainerHovered
      onClick={ handleNFTClick }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ImageContainer>
        <Image src={nft.image} alt={nft.name} />
      </ImageContainer>
      <ProjectInfo>
        <NFTName>{nft.name}</NFTName>
        <Box>
            <Price>{nft.price}</Price>
            <Author>{nft.author}</Author>
        </Box>
      </ProjectInfo>
    </CardContainerHovered>
  );
}

export default Popular;

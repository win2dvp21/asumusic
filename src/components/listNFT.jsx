import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NFTContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 10px;
  border-bottom: 1px solid lightgrey;
`;

const NFTImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  text-align: center;
  width: 100%;
  
`;

const Text1 = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
  align-self: flex-start; 
`;

const Text2 = styled.div`
  font-size: 14px;
  color: grey;
  align-self: flex-end; 
`;

const Text3 = styled.div`
  font-size: 14px;
  text-align: left;
`;

const Text4 = styled.div`
  font-size: 14px;
  color: #1ED760;
  text-align: right; 
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ListNFT = ({ nft, onClick }) => {
  const navigate = useNavigate();

  const handleNFTClick = () => {
    navigate(`/detail`);
  };


  return (
    <NFTContainer onClick={handleNFTClick}>
      <NFTImage src={nft.image} alt={nft.name} />
      <TextContainer>
        <Box>
          <Text1>{nft.name}</Text1>
          <Text2>{nft.time}</Text2>
        </Box>
        <Text3>{nft.detail}</Text3>
        <Text4>{nft.genre}</Text4>
      </TextContainer>
    </NFTContainer>
  );
};

export default ListNFT;

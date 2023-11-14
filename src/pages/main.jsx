import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Popular from '../components/popularNFT';
import ListNFT from '../components/listNFT';

import imagee from '../images/nft1.jpg';
import cake from '../images/cake.jpg';
import mozart from '../images/mozart.jpg';
import kpop from '../images/kpop.jpg';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import ewhachainer from '../images/demoimg.png';

const Container = styled.div`
  padding: 80px 10px 10px 10px;
`;

const iconStyle = {
  color: 'white',
  fontSize: '30px',
};

const SearchbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Searchbar = styled.input.attrs({
  placeholder: "Search",
})`
  width: 90%;
  height: 20px;
  padding: 10px 10px 10px 20px;
  border: 1px solid lightgrey;
  background-color: #f0f0f4;
  border-radius: 20px;
  margin-right: 15px;
  margin-left: 10px;
`;

const SearchIconButton = styled(IconButton)`
  && {
    color: #1ED760;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Text1 = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Text2ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Text2 = styled.div`
  color: grey;
  font-size: 13px;
`;

const TextButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: grey;
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 10px;
`;

const TextButton2 = styled.button`
  font-size: 18px;
  font-weight: bold;
  background: ${({ clicked }) => (clicked ? '#eafef0' : 'none')};
  border: none;
  border-radius: 6px;
  margin: 10px;
  padding: 5px;
  margin-bottom: 0px;
`;

const TextButton3 = styled.button`
  font-size: 16px;
  color: grey;
  background: ${({ clicked }) => (clicked ? '#eafef0' : 'none')};
  border: none;
  border-radius: 6px;
  margin: 10px;
  padding: 5px;
`;

const nfts = [
  {
    id: 0,
    name: "EwhaChainer",
    price: '0.007 ETH',
    author: 'Team01',
    image: ewhachainer,
  },
  {
    id: 1,
    name: "EwhaChain",
    price: '0.005 ETH',
    author: 'artist1',
    image: imagee,
  },
  {
    id: 2,
    name: "Asumusic",
    price: '0.003 ETH',
    author: 'artist2',
    image: imagee,
  },
  {
    id: 3,
    name: "Bootcamp",
    price: '0.002 ETH',
    author: 'artist3',
    image: imagee,
  },
];

const nftLists = [
  {
    id: 0,
    name: "EwhaChainer",
    detail: 'Ewha-Chain\'s NFT',
    genre: '#melody',
    time: '2m ago',
    image: ewhachainer,

  },
  {
    id: 1,
    name: "EwhaChain",
    detail: 'welcome to web3',
    genre: '#melody',
    time: '8m ago',
    image: imagee,
  },
  {
    id: 2,
    name: "Cakebeat_jazz03",
    detail: 'cozy jazz hiphop mix',
    genre: '#rhythm',
    time: '10m ago',
    image: cake,
  },
  {
    id: 3,
    name: "Requiem#666",
    detail: '"E" Minor Melodic Piano Scale',
    genre: '#melody',
    time: '11m ago',
    image: mozart,
  },
  {
    id: 4,
    name: "Enhypen Outro",
    detail: 'k-pop group',
    genre: '#melody',
    time: '15m ago',
    image: kpop,
  },
  {
    id: 5,
    name: "bitcoin beat",
    detail: 'hiphop mixtape',
    genre: '#rhythm',
    time: '20m ago',
    image: img1,
  },
  {
    id: 6,
    name: "MELODY example",
    detail: 'classic sampling',
    genre: '#melody',
    time: '23m ago',
    image: img2,
  },
  {
    id: 7,
    name: "doremi",
    detail: 'Basic piano chord',
    genre: '#rhythm',
    time: '31m ago',
    image: img3,
  },
];

const NFTItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: row;
  overflow-x: auto;
`;

const Main = () => {
  const [clickedButtons, setClickedButtons] = useState([false, false, false, false, false, false]);

  const handleClick = (index) => {
    const newClickedButtons = [...clickedButtons];
    newClickedButtons[index] = !newClickedButtons[index];
    setClickedButtons(newClickedButtons);
  };

  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/create');
  };

  return (
    <Container>
      <SearchbarContainer>
        <Searchbar />
        <SearchIconButton>
          <SearchIcon />
        </SearchIconButton>
      </SearchbarContainer>
      <TextContainer>
        <Text1>Popular NFT: TOP 20</Text1>
        <Text2ButtonContainer>
          <Text2>Best-selling NFTs on AsuMusic on this week</Text2>
          <TextButton>Show All</TextButton>
        </Text2ButtonContainer>
      </TextContainer>
      <NFTItemContainer>
        {nfts.map((nft) => (
          <Popular
            key={nft.id}
            nft={nft}
          />
        ))}
      </NFTItemContainer>
      <div>
        <TextButton2 clicked={clickedButtons[1]} onClick={() => handleClick(1)}>
          Composition
        </TextButton2>
        <TextButton2 clicked={clickedButtons[2]} onClick={() => handleClick(2)}>
          Lyrics
        </TextButton2>
        <TextButton2 clicked={clickedButtons[3]} onClick={() => handleClick(3)}>
          Vocal
        </TextButton2>
      </div>
      <div>
        <TextButton3 clicked={clickedButtons[4]} onClick={() => handleClick(4)}>
          All
        </TextButton3>
        <TextButton3 clicked={clickedButtons[5]} onClick={() => handleClick(5)}>
          Rhythm
        </TextButton3>
        <TextButton3 clicked={clickedButtons[6]} onClick={() => handleClick(6)}>
          Melody
        </TextButton3>
      </div>
      <div>
        {nftLists.map((nft) => (
          <ListNFT
            key={nft.id}
            nft={nft}
          />
        ))}
      </div>
      <Fab
          aria-label="add"
          style={{ position: 'fixed', bottom: 0, right: 0, margin: '16px', backgroundColor: '#1ED760' }
          } onClick={handleCreateClick}
        >
        <AddIcon style={iconStyle} />
      </Fab>
      
    </Container>
    
  );
};

export default Main;

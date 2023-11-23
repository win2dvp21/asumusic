import React from 'react';
//import IPFS from 'ipfs-http-client';
import { create } from 'ipfs-http-client';

import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Fab from '@mui/material/Fab';
import SmsIcon from '@mui/icons-material/Sms';

import axios from 'axios';

// IPFS server configuration
const pinataApiKey = 'a4a5c571e485cea1df8f';
const pinataSecretKey = 'f9a175aeca4c031578f93ae303ab0521b09476d0ebaec634b55e52c257d84b46'
const pinataAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmZjYwMzBiNi1hNjRjLTRhNjUtOWE2MC1lNDE1YWUyZjQ3MjgiLCJlbWFpbCI6InN1dXN1dTE2QGV3aGFpbi5uZXQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYTRhNWM1NzFlNDg1Y2VhMWRmOGYiLCJzY29wZWRLZXlTZWNyZXQiOiJmOWExNzVhZWNhNGMwMzE1NzhmOTNhZTMwM2FiMDUyMWIwOTQ3NmQwZWJhZWM2MzRiNTVlNTJjMjU3ZDg0YjQ2IiwiaWF0IjoxNzAwNTkzNDQyfQ.lfuIFGuGPbA10DfgP6TPylY_T2WxtZcHXvNvqtLOzps';

const ipfs = create({
    host: 'api.pinata.cloud',
    port: 443,
    protocol: 'https',
    headers: {
      authorization: `Bearer ${pinataAccessToken}`,
    },
  });
let userAddress ='0xB33422AB07e27AAB906f1195110050f8DC5aF02e'; // 적절한 방법으로 userAddress를 설정해주세요.
let ipfsCid;

// Function to upload metadata to IPFS
const uploadMetadataToIPFS = async (metadata) => {
    try {
        const metadataBuffer = new TextEncoder().encode(JSON.stringify(metadata));

        // Upload metadata to IPFS using Pinata API
        const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', metadataBuffer, {
            headers: {
                'Content-Type': 'application/json',
                'pinata_api_key': pinataApiKey, // Pinata에서 발급받은 API 키로 교체
                'pinata_secret_api_key': pinataSecretKey,      
            },
        });
        ipfsCid = response.data.IpfsHash;
        console.log('Metadata uploaded to IPFS with CID:', ipfsCid);
        
        return ipfsCid;
        
    } catch (error) {
        console.error('Error uploading metadata to IPFS:', error);
        throw error;
    }
};


const Create = () => {
    const iconStyle = {
        color: '#1ED760',
        fontSize: '30px',
    };

    const containerStyle = {
        margin: '80px 30px 30px 30px',
    };

    const titleStyle = {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '28px',
    };

    const textStyle = {
        margin: '15px 0px 5px 0px',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '18px',
    };

    const descriptionStyle = {
        margin: '0px 0px 10px 0px',
        color: 'black',
        fontSize: '8px',
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const StyledButton = styled(Button)({
        height: 100,
        margin: '0px 0px 0px 0px',
        border: '1px dashed',
        backgroundColor: 'white',
        width: '100%',
        color: 'gray',
    });

    const [Category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const handleUpload = () => {
        console.log('Handle Upload with IPFS CID:', ipfsCid);
    };

    const handleSubmission = async () => {
        // Create metadata JSON
        const metadata = {
            name: document.getElementById('outlined-basic').value,
            description: document.getElementById('outlined-multiline-static').value,
            melodyNftId: document.getElementById('outlined-basic-melody').value,
            lyricsNftId: document.getElementById('outlined-basic-lyrics').value,
            category: Category,
            supply: document.getElementById('outlined-basic-supply').value,
        };

        // Log the metadata to the console (you can replace this with your actual logic)
        console.log(metadata);

        try {
            // Upload metadata to IPFS
            const ipfsCid = await uploadMetadataToIPFS(metadata);

            // Call the function to handle IPFS upload and contract call
            handleUpload(ipfsCid);
        } catch (error) {
            console.error('Error handling submission:', error);
        }

    };

    return (
        <div>
            <div style={containerStyle}>
                <div>
                    <div style={titleStyle}>Create New Item</div>
                    <div style={textStyle}>Image, Video, or 3D Model</div>
                    <div style={descriptionStyle}>
                        File types supported: JPG, PNG, GIF, MP4, SVG, WEBM, OGG, GLB, GLTF. Max size: 100MB
                    </div>
                </div>

                <StyledButton component="label" variant="contained" startIcon={<CloudUploadIcon color="inherit" />} >
                    Upload file
                    <VisuallyHiddenInput type="file" />
                </StyledButton>

                <div>
                    <div style={textStyle}>Name</div>
                    <TextField id="outlined-basic" size="small" label="Item name" variant="outlined" fullWidth />
                </div>

                <div>
                    <div style={textStyle}>Description</div>
                    <div style={descriptionStyle}>
                        The description will be included on the item's detail page underneath its image.
                    </div>
                    <TextField id="outlined-multiline-static" label="Provide a detailed description of your item" variant="outlined" fullWidth multiline rows={4} />
                </div>

                <div>
                    <div style={textStyle}>Music</div>
                    <div style={descriptionStyle}>
                        File types supported: MP3, WAV, FLAC Max size: 100MB
                    </div>
                </div>

                <StyledButton component="label" variant="contained" startIcon={<CloudUploadIcon color="inherit" />} >
                    Upload Music
                    <VisuallyHiddenInput type="file" />
                </StyledButton>

                <div>
                    <div style={textStyle}>Selected Melody</div>
                    <TextField id="outlined-basic-melody" size="small" label="Melody NFT id" variant="outlined" fullWidth />
                </div>

                <div>
                    <div style={textStyle}>Selected Lyrics</div>
                    <TextField id="outlined-basic-lyrics" size="small" label="Lyrics NFT id" variant="outlined" fullWidth />
                </div>

                <div>
                    <div style={textStyle}>Category</div>
                    <div style={descriptionStyle}>
                        This is the category where your item will appear.
                    </div>
                </div>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Category}
                        label="Select Category"
                        onChange={handleChange}
                    >
                        <MenuItem value="Composition">Composition</MenuItem>
                        <MenuItem value="Lyrics">Lyrics</MenuItem>
                        <MenuItem value="Vocal">Vocal</MenuItem>
                    </Select>
                </FormControl>

                <div>
                    <div style={textStyle}>Supply</div>
                    <div style={descriptionStyle}>The number of items that can be minted. No gas cost to you.</div>
                    <TextField id="outlined-basic-supply" size="small" label="Number of items" variant="outlined" fullWidth />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px 0px 0px 0px' }}>
                    <Button variant="contained" style={{ backgroundColor: '#1ED760', height: '50px', fontSize: '20px', fontWeight: 'bold' }} fullWidth onClick={handleSubmission}>
                        Submit
                    </Button>
                </div>

                <Fab
                    aria-label="chat"
                    style={{ position: 'fixed', bottom: 0, right: 0, margin: '16px', backgroundColor: '#FFFFFF' }}
                >
                    <SmsIcon style={iconStyle} />
                </Fab>
            </div>
        </div>
    );
};

export default Create;

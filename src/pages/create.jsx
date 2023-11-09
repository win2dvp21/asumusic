import React from 'react';

import { styled } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Fab from '@mui/material/Fab';
import SmsIcon from '@mui/icons-material/Sms';

const Create = () => {
    const iconStyle = {
        color: '#1ED760',
        fontSize: '30px',
    };

    const headerStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '60px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
    };

    const headertextStyle = {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '24px',
    }

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

    return (
        <div>
            <div style={headerStyle}>
                <MenuIcon style={{ ...iconStyle, paddingLeft: '20px' }} />
                <div style={headertextStyle}>Together Music Town</div>
                <AccountCircleIcon style={{ ...iconStyle, paddingRight: '20px' }} />
            </div>

            <div style={containerStyle}>
                <div>
                    <div style={titleStyle}>Create New Item</div>
                    <div style={textStyle}>Image, Video, or 3D Model</div>
                    <div style={descriptionStyle}>
                        File types supported: JPG, PNG, GIF, MP4, SVG, WEBM, OGG, GLB, GLTF. Max size: 100MB
                    </div>
                </div>

                <StyledButton component="label" variant="contained" startIcon={<CloudUploadIcon color="inherit" />}>
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

                <StyledButton component="label" variant="contained" startIcon={<CloudUploadIcon color="inherit" />}>
                    Upload Music
                    <VisuallyHiddenInput type="file" />
                </StyledButton>

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
                        <MenuItem value="Jazz">Jazz</MenuItem>
                        <MenuItem value="Pop">Pop</MenuItem>
                        <MenuItem value="Classic">Classic</MenuItem>
                    </Select>
                </FormControl>

                <div>
                    <div style={textStyle}>Supply</div>
                    <div style={descriptionStyle}>The number of items that can be minted. No gas cost to you.</div>
                    <TextField id="outlined-basic" size="small" label="Number of items" variant="outlined" fullWidth />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px 0px 0px 0px' }}>
                    <Button variant="contained" style={{ backgroundColor: '#1ED760', height: '50px', fontSize: '20px', fontWeight: 'bold' }} fullWidth>
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
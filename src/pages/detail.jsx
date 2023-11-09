import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ShareIcon from '@mui/icons-material/Share';

import Fab from '@mui/material/Fab';
import SmsIcon from '@mui/icons-material/Sms';

const Detail = () => {
    const iconStyle = {
        color: '#1ED760',
        fontSize: '30px',
    };

    const squareiconStyle = {
        fontSize: '30px',
        margin: '0px 10px 0px 10px',
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

    const contentStyle = {
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
    };

    const squareStyle = {
        width: '100%',
        paddingTop: '100%',
        position: 'relative',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        objectFit: 'cover',
    };

    const textContainerStyle = {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        backgroundColor: 'white',
        paddingTop: '1px',
        textAlign: 'center',
    };

    const textStyles = {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '18px',
    };

    const titleStyle = {
        color: 'black',
        fontSize: '28px',
        fontWeight: 'bold',
        verticalAlign: 'bottom', // 수정된 부분
    };

    const semititleStyle = {
        color: 'black',
        fontSize: '22px',
        fontWeight: 'bold',
        verticalAlign: 'bottom', // 수정된 부분
    };

    const textStyle = {
        color: 'black',
        fontSize: '18px',
        verticalAlign: 'bottom', // 수정된 부분
    };

    const descriptionStyle = {
        color: 'black',
        fontSize: '12px',
        verticalAlign: 'bottom', // 수정된 부분
    };

    const infoContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline', // 수정된 부분
        padding: '0px',
        margin: '20px 0px 10px 0px',
    };

    const stemsCountStyle = {
        color: 'black',
        fontSize: '18px',
    };

    const lengthContainerStyle = {
        color: 'black',
        fontSize: '18px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center', // 수정된 부분
    };

    const lengthStyle = {
        display: 'inline-block', // 수정된 부분
    };


    return (
        <div>
            <div style={headerStyle}>
                <MenuIcon style={{ ...iconStyle, paddingLeft: '20px' }} />
                <div style={headertextStyle}>Together Music Town</div>
                <AccountCircleIcon style={{ ...iconStyle, paddingRight: '20px' }} />
            </div>

            <div style={containerStyle}>
                <div style={contentStyle}>
                    <div style={squareStyle}>

                        <img
                            src={require('../images/demoimg.png')}
                            alt="demo"
                            style={imageStyle}
                        />
                        <PlayArrowIcon style={{ ...squareiconStyle, position: 'absolute', top: 10, right: 0 }} />
                        <div style={textContainerStyle}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <HeadphonesIcon style={squareiconStyle} />
                                    <p style={textStyles}>23726</p>
                                </div>
                                <ShareIcon style={squareiconStyle} />
                            </div>

                        </div>

                    </div>
                </div>

                <div style={{ ...infoContainerStyle, marginTop: '30px' }}>
                    <div style={titleStyle}>EwhaChainer</div>
                    <div style={descriptionStyle}>Created <b>29 Jul 2023</b></div>
                </div>

                <div style={textStyle}>
                    By <b>Team01</b>
                </div>

                <div style={textStyle}>
                    Category <b>Composition - All</b>
                </div>

                <div style={{ ...textStyle, marginTop: '20px' }}>
                    Artists
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <img
                        src={require('../images/circle.png')}
                        alt="artists"
                        style={{ height: '30px' }}
                    />
                    <div style={{ marginLeft: '10px' }}>24 Artists</div>
                </div>

                <div style={infoContainerStyle}>
                    <div style={stemsCountStyle}>Stems Count <b>20</b></div>
                    <div style={lengthContainerStyle}>
                        <span style={lengthStyle}>Length <b>3:56</b></span>
                    </div>
                </div>

                <div style={{ ...semititleStyle, marginTop: '20px' }}>
                    Details
                </div>

                <div style={textStyle}>
                    History is a miracle of God's providence beyond human will, and each and every tast that has be and built Ewha ...
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

export default Detail;
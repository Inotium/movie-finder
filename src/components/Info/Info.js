import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { img_500, unavailable } from '../../config/config';
import './Info.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'grey',
    border: '4px solid #000',
    boxShadow: 24,
    p: 2,
};

const Info = ({children , media_type, id}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [content, setContent] = useState();


    const getInfo =  async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        setContent(data)
    }

    useEffect(() => {
        getInfo();
        
    });
    return (
        <div>
            <div className='media' onClick={handleOpen}>{children}</div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
                >
            <Fade in={open}>
                <Box sx={style}>
                    {content && (
                        <div>
                            <div className='ContentInfoPoster'>
                                <img className='ContentPoster' 
                                    alt={content.name || content.title}
                                    src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable}>
                                </img>  
                            </div>  
                            <div className='ContentInfoAbout'>
                                <span className='ContentInfoTitle'>
                                    {content.name || content.title} (
                                        {(
                                            content.first_air_date ||
                                            content.release_date
                                        )}
                                    )
                                </span>
                                <span className='ContentInfoDescription'>
                                    {content.overview}
                                </span>
                            </div>
                        </div>
                    )}
                </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default Info;

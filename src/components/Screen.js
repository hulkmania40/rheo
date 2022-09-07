import React from 'react';
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined';
import './Screen.scss';

const Screen=()=>{

    return(
        <div className='footer'>
            <div className='screen'>
                Screen This Way
            </div>
            <span><EventSeatOutlinedIcon  className='seat1'/> Available</span>
            <span><EventSeatOutlinedIcon  className='seat2'/> Taken</span>
        </div>
    )
}

export default Screen;
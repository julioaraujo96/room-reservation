import React from 'react';
import styles from './room.module.css';

const Room = (props) => {

    const getRoomLocation = (room) => {
        return `${room['location'].orientation} at ${room['location'].floor} floor`;
    }

    const getBathroomAccomodations = (room) => {
       return `${room['bathroom'].jacuzzi ? `${room['bathroom'].jacuzzi} jacuzzi` : ' Jacuzzi not included'} |  ${room['bathroom'].bidet ? `${room['bathroom'].bidet} bidet` : ' Bidet not included'}`;
    }

    const getBedSizeAndSheets = (room) => {
        return `${props.rooms['bed'].size} size and ${props.rooms['bed'].sheets} sheets`;
    }

   const getDeskInfo = (room) => {
        return `${props.rooms['desk'].quantity > 0 ? props.rooms['desk'].quantity : 'Not included'}`;
    }

    return (
        <div className={styles.Room}>
           <div className="card-header">
                {props.rooms.id}
           </div>
            <div className="card-body">
                <p>Location: {getRoomLocation(props.rooms)}</p>
                <p>Bathroom: {getBathroomAccomodations(props.rooms)}</p>
                <p>Bed: {getBedSizeAndSheets(props.rooms)}</p>
                <p>Desk: {getDeskInfo(props.rooms)}</p>
            </div>
            <div className="card-footer">
                <button type='submit'>Reserve</button>
            </div>
        </div>
    );
};

export default Room;
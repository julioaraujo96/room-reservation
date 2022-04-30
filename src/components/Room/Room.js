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
        <article className={styles.Room}>
           <div className="card-header">
                {props.rooms.id}
           </div>
            <div className="card-body">
                <ul>
                    <li><span className={styles.listItem}>Location:</span> {getRoomLocation(props.rooms)}</li>
                    <li><span className={styles.listItem}>Bathroom:</span> {getBathroomAccomodations(props.rooms)}</li>
                    <li><span className={styles.listItem}>Bed:</span> {getBedSizeAndSheets(props.rooms)}</li>
                    <li><span className={styles.listItem}>Desk:</span> {getDeskInfo(props.rooms)}</li>
                </ul>
            </div>
            <div className="card-footer">
                <button type='submit'>Reserve</button>
            </div>
        </article>
    );
};

export default Room;
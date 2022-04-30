import React from 'react';
import styles from './room.module.css';

const Room = (props) => {

    return (
        <div className={styles.Room}>
           <div className="card-header">
                {props.rooms.id}
           </div>
            <div className="card-body">
                <p>Location: {`${props.rooms['location'].orientation} at ${props.rooms['location'].floor} floor`}</p>
                <p>Bathroom: {`${props.rooms['bathroom'].jacuzzi ? `${props.rooms['bathroom'].jacuzzi} jacuzzi` : ' Jacuzzi not included'} |  ${props.rooms['bathroom'].bidet ? `${props.rooms['bathroom'].bidet} bidet` : ' Bidet not included'}  `}</p>
                <p>Bed: {`${props.rooms['bed'].size} size and ${props.rooms['bed'].sheets} sheets`}</p>
                <p>Desk: {`${props.rooms['desk'].quantity > 0 ? props.rooms['desk'].quantity : 'Not included'}`}</p>
            </div>
            <div className="card-footer">
                <button type='submit'>Reserve</button>
            </div>
        </div>
    );
};

export default Room;
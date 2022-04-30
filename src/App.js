import {useEffect,useState} from "react"
import axios from 'axios';
import Room from './components/Room/Room';
import styles from './App.module.css'

function App() {
 const [data,setData] = useState([]);
 const [filteredData,setFilteredData] = useState([]);
 const [orientation,setOrientation] = useState('All');

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const response = await axios.get('rooms.json');
    const result = await response.data.rooms;
    setData(result);
    setFilteredData(result);
  }

  let output;

  if (data) {
     output = filteredData.map(room => <Room key={room.id} rooms={room}/>);
  }

  const handleChange = (e) =>{

      const selectedOrientation = e.target.value;
      if (selectedOrientation === 'All' ) {
        setFilteredData(data)
        setOrientation(selectedOrientation);
      } else{
        setOrientation(selectedOrientation);

        const filteredRooms = data.filter(room => room.location.orientation === selectedOrientation);
        setFilteredData(filteredRooms);
      };

     
  }

  return (
    <div className="App">
    
      <div className={styles.container}>
      <div className={styles.filterContainer}>
          <label>Orientation:</label>

          <select name="orientation" 
          value={orientation}
          onChange={(e)=> handleChange(e)}
          id="orientation"
          >
              <option value="All">All</option>
              <option value="sea side">Sea side</option>
              <option value="avenue side">Avenue side</option>
          </select>
        </div>
        {output}
      </div>
    </div>
  );
}

export default App;

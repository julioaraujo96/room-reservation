import {useEffect,useState} from "react"
import axios from 'axios';
import Room from './components/Room/Room';
import styles from './App.module.css'

function App() {
 const [data,setData] = useState([]);
 const [orientation,setOrientation] = useState('');

  useEffect(()=>{
    async function fetchData(){
      const response = await axios.get('rooms.json');
      const result = await response.data.rooms;
      setData(result);
    }
    fetchData();
  },[]);

  let output;

  if (data) {
     output = data.map(room => <Room key={room.id} rooms={room}/>);
  }

  const handleChange = (e) =>{

      const selectedOrientation = e.target.value;
      if (selectedOrientation === '' ) return;

      setOrientation(selectedOrientation);

      const filteredRooms = data.filter(room => room.location.orientation === selectedOrientation);
      setData(filteredRooms);
  }

  return (
    <div className="App">
      <label for="orientation">Orientation:</label>

      <select name="orientation" 
      value={orientation}
      onChange={(e)=> handleChange(e)}
      id="orientation"
      >
          <option value=""></option>
          <option value="sea side">Sea side</option>
          <option value="avenue side">Avenue side</option>
      </select>
      {orientation}
      <div className={styles.container}>
        {output}
      </div>
    </div>
  );
}

export default App;

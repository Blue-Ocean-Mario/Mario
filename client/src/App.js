// import axios from 'axios';
import Dropdown from '../src/components/Messages/Messages.js';

// const serverURL = 'http://localhost:3001';

export default function App() {
  // axios
  //   .get(serverURL)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  return (
    <div className='App'>
      <Dropdown />
    </div>
  );
}

import Jobs from "./Components/Jobs/Jobs";
import Employees from "./Components/Employees/Employees";


function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Jobs/>
      <Employees/>
    </div>
  );
}

export default App;

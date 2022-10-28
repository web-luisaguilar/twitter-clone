import CenterPanel from './modules/CenterPanel';
import LeftPanel from './modules/LeftPanel';
import RigthPanel from './modules/RigthPanel';
import './styles/App.css';

/* *
  TODO: Left Panel
  TODO: Center Panel
  TODO: Rigth Panel
  TODO: Message Box
*/

function App() {
  return (
    <div className="tracking-[0.02em]">
      <div className="flex justify-between md:justify-center lg:justify-around ">
        <LeftPanel />
        <CenterPanel />
        <RigthPanel />
      </div>
    </div>
  );
}

export default App;

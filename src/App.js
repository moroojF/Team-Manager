import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';
import All from './components/All';
import One from './components/One';
import AddForm from './components/AddForm';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#E8D0BC" }}>
        <div className="container" style={{ fontSize: '40px'}}>
          <h2 className="text-secondary textStyle"><Link to="/players/list" className="textStyle text-secondary">Manage Players</Link>|<Link to="/players/list" className="textStyle text-secondary"> Manage Players Status</Link></h2>
        </div>
      </nav>
      <div className="container">
        <Router>
          <All path="/players/list" />
          <AddForm path="/players/addplayer" />
          <One path="/view/:_id" />
        </Router>
      </div>
    </>
  );
}

export default App;

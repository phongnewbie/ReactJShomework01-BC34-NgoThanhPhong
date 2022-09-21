import logo from './logo.svg';
import './App.css';
import './baitapLayOut/style.css'
import HeaderpartComponent from './baitapLayOut/HeaderpartComponent';
import BodypartComponent from './baitapLayOut/BodypartComponent';
import SectionPart from './baitapLayOut/SectionPart';
import FooterpartComponent from './baitapLayOut/FooterpartComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <HeaderpartComponent/>
      <BodypartComponent/>
      <SectionPart/>
      <FooterpartComponent/>
    </div>
  );
}

export default App;

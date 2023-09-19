import "./App.css";
import Header from "./components/Header";
import IPAddress from "./components/IPAddress";
import MetricCard from "./components/MetricCard";

function App() {
  return (
    <div className="App">
    <Header title="Cisco Sextant Dashboard"/>
    <div className="cards">
    <MetricCard heading="IPv4" children={<IPAddress IPType="v4"/>}/>
    <MetricCard heading="IPv6" children={<IPAddress IPType="v6"/>}/>
    </div>
    </div>
  );
}

export default App;

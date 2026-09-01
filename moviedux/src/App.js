import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;

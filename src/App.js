import "./styles/styles.css";
import Header from "./components/Main/Header/Header";
import Content from "./components/Main/Content/Content";
import Footer from "./components/Main/Footer/Footer";

function App() {
  return (
    <div className="page container-fluid">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
export default App;

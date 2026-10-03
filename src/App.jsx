import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Register from "./components/Register";
// import Login from "./components/Login";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* <Home /> */}

      {/* <Register /> */}
      {/* <Login /> */}

      <Cart />

      <Footer />
    </div>
  );
}

export default App;
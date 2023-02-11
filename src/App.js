import './App.css';
import Title from "./components/Title";
import CartButton from "./components/CartButton";

function App() {
  return (
    <div className="App">
      <Title title="Shopping Cart" />
      <CartButton />
    </div>
  );
}

export default App;

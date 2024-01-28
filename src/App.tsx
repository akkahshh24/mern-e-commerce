import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Search from "./pages/Search"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </Router>
  )
}

export default App
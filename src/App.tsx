import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from 'react'
import Loading from "./components/Loading"

const Home = lazy(() => import("./pages/Home"))
const Search = lazy(() => import("./pages/Search")) 
const Cart = lazy(() => import("./pages/Cart"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
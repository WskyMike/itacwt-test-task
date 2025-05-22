import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import Products from "./components/Sheets/Products";
import PricePlans from "./components/Sheets/PricePlans";
import Pages from "./components/Sheets/Pages";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className="menu menu-horizontal gap-2">
          <li>
            <NavLink
              to="/products"
              className= {({ isActive }) =>
                (isActive ? "menu-active" : "")
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/price-plans"
              className={({ isActive }) =>
                (isActive ? "menu-active" : "")
              }
            >
              Price Plans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                (isActive ? "menu-active" : "")
              }
            >
              Pages
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/price-plans" element={<PricePlans />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

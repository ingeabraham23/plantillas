import { Link } from 'react-router-dom';
import "./Navbar.css"
import {
  fa0,
    faCarBurst,
    faCircleDollarToSlot,
    faCross,
    faMagnifyingGlass,
    faRoadBarrier,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigationItems = [
  { path: '/', icon: faCircleDollarToSlot, label: '' },
  { path: '/esquela', icon: faCross, label: '' },
  { path: '/extravio', icon: faMagnifyingGlass, label: '' },
  { path: '/viacerrada', icon: faRoadBarrier, label: '' },
  { path: '/aviso', icon: faTriangleExclamation, label: '' },
  { path: '/camionetas', icon: fa0, label: '' },
  { path: '/accidente', icon: faCarBurst, label: '' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navigationItems.map((item) => (
          <li className="nav-item" key={item.path}>
            <Link to={item.path} className="nav-link">
              <FontAwesomeIcon icon={item.icon} size="2x" style={{ fontSize: '24px' }}/> {/* Renderiza el icono de Font Awesome */}
              <span className="nav-label">{item.label}</span> {/* Agrega el span para mostrar la etiqueta */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
import "./PetsListNav.css";
import { Link } from 'react-router-dom';

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/pets">See All Cats ({cats.length})</Link>
        </li>
        <li>
          <Link to="/pets">See All Dogs ({dogs.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;

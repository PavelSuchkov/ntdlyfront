import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>

          <Link to="/">
            <span aria-hidden="true" role="img">
              &#127968;
              &nbsp;
              </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/mynotes">
              <span aria-hidden="true" role="img">
                &#128210;
                &nbsp;
              </span>
            My Notes</Link>
        </li>
        <li>
          <Link to="/favorites">
              <span aria-hidden="true" role="img">
                &#127775;
                &nbsp;
              </span>
            Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};
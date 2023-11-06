// import React from 'react';
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        delectus aliquid, ex minima hic illo dolor praesentium atque magni quia
        est quam enim. Corporis molestias suscipit praesentium sed, harum ea!
      </p>

      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;

import { Link, Outlet } from "react-router-dom";

const Loyout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="orders">Orders</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Loyout;

const Navbar = () => {
  const title = "Navigation bar";
  const array = ["Home", "Transactions"];
  return (
    <div className="Navbar">
      <h1>{title}</h1>
      <p>
        {array[0]} {array[1]}
      </p>
    </div>
  );
};

export default Navbar;

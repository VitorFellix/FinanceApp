const Navbar = () => {
  const title = "Navigation bar";
  const array = [
    { name: "Home", link: "http://localhost:3000/" },
    { name: "Transactions", link: "http://localhost:3000/transactions" },
  ];
  return (
    <div className="navbar">
      <h1>{title}</h1>
      <p>
        <a href={[array[0].link]}>{array[0].name} </a>
        <a href={[array[1].link]}>{array[1].name} </a>
      </p>
    </div>
  );
};

export default Navbar;

const Header = ({ title }) => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4 text-center">{title}</h1>
      </div>
    </>
  );
};

export default Header;

const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Contact: ravi@gmail.com</h4>
    </div>
  );
};

export default User;

//////////START: All Data function//////////
function AllData(){
  const ctx = React.useContext(UserContext);
  
  /////START: function to map data into a table row/////
  const UserData = ({users}) => {
    const newRow = users.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td className="text-center">{`$${item.balance}`}</td>
      </tr>
      )
    });
    return newRow;
  };
  /////END: function to map data into a table row/////

  return (
    <>
      <Card
      txtcolor="black"
      header="User Data"
      body={
      <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th className="text-success font-weight-bold">Name</th>
          <th className="text-success font-weight-bold">Email</th>
          <th className="text-success font-weight-bold">Password</th>
          <th className="text-success text-center font-weight-bold">Current Balance</th>
        </tr>
      </thead>
      <tbody>
      <UserData users={ctx.users} />
      </tbody>
    </table>}
    />  
      
    
    </>
  );
}
//////////END: All data function//////////

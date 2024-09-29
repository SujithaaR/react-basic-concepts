import { useEffect, useState } from "react";

export default function Users() {
  const [userList, setUserList] = useState([]);
  const [loading,setLoading]=useState(false);

  async function fetchAllUsers() {
    try {
      setLoading(true)
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();

      console.log(result);

      if (result?.users) {
        setUserList(result?.users);
        setLoading(false)
      } else {
        setUserList([]);
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  }

  // calling the function on page load
  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);
  

  console.log(userList);
  if(loading) return <h1>Fetching user</h1>


  // calling the fetch function using function
  // function handlefetchlistofusers(){
  //   fetchAllUsers();
  // }

  return (
    <div>
      <h1>List all Users</h1>
      {/* by using function for fetching */}
      {/* <button onClick={handlefetchlistofusers}>fetchuser list</button> */}
      {/* by using the function itself */}
      <button onClick={fetchAllUsers}>fetchuser list</button>
      <ul>
        {
          userList && userList.length >0?
          userList.map(useritem=> <li key={useritem.id}>
            <p>{useritem?.firstName}{useritem?.lastName}</p>
          </li>):
          <h1>No users found.Please try gain</h1>
        
      }
      </ul>
    </div>
  )
}

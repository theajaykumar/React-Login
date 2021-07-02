import React, { useState} from 'react';
import Loginform from './components/Loginform';


function App() {
 
 const adminUser = {
    email: "admin@admin.com",
    password: "admin123"

  }




const [user, setUser]=useState({name:"",email:""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email
      });
   } else {
     console.log("Detail do not Match!");
     setError("Detail do not Match!");
   }
  }
const Logout = () => {
 setUser({name: "", email: ""});
}


  return (
    <div className = "App">
     {(user.email != "") ? (
       <div className="welcome">
         <h2>welcome, <span>{user.name}</span></h2>
        {/* {/* //<button>welcome</button> */}
          
       </div>
     ) : (
       <Loginform Login={Login} error={error} />
     )}
      
    </div>
  );
     }

export default App


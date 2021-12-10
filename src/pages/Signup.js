import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

  const navigate = useNavigate();
  const url = "https://travel-blog-p4.herokuapp.com/auth/";

  //form state
  const blankForm = {
    username: "",
    password:""
  }
  const [formData, setFormData] = useState(blankForm);

  const handleChange = (event) => {
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    

    fetch(url+'signup', {
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({username:formData.username, password:formData.password})
    })
    navigate("/")
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="username"
          value={formData.username}
          placeholder="Username"
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
          placeholder="Password"
        />
        <input type="submit" value="Create Account"/>
      </form>
    </div>
  );
};
export default Signup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Form = ({ initialPost, handleSubmit, buttonLabel }) => {
  //set navigat hook
  const navigate = useNavigate()

  //form state
  const [formData, setFormData]=useState(initialPost)

  //handleChange on the form 
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  //Function to run when the form is submitted
  const handleSubmission = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    navigate("/")
  }

  
  return (
    <div className="form-div">
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={formData.name}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={handleChange}
          name="description"
          value={formData.description}
          placeholder="Description"
        />
        <input
          type="text"
          onChange={handleChange}
          name="image"
          value={formData.image}
          placeholder="Image Link"
        />
        
        <input type="submit" value={buttonLabel} />
      </form>
    </div>
  );
};

export default Form;

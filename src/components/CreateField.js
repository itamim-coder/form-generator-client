import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const CreateField = () => {
    
    const [formValues, setFormValues] = useState([{ name: ""}])
   
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
     }
        
    let addFormFields = () => {
        setFormValues([...formValues, { name: "" ,   type: "text"}])
     }
    let addNumberFields = () => {
        setFormValues([...formValues, { name: "" , type: "number"}])
     } 
    let addDateFields = () => {
        setFormValues([...formValues, { name: "" , type: "date"}])
     }
     let addTextAreaFields = () => {
        setFormValues([...formValues, { name: "" , type: "textarea"}])
     }
     let handleSubmit = (event) => {
         const formInfo ={
             ...formValues
         }
         fetch('http://localhost:5000/formInfo', {
             method: 'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(formInfo)
         })
         .then(res => res.json())
         .then(data => console.log(data))
         console.log(formInfo)
       
      
    }
    console.log(handleSubmit)
    return (
        <div className='row '>
        <form className='col-md-6' onSubmit={handleSubmit}>
        {formValues.map((element, index) => (
          <div className="form-inline" key={index}>
            <label>{element.type || "Form Name"}</label> <br />
            <input type="text"   name="name" value={element.name || ""} onChange={e => handleChange(index, e)} /> 
            
           
         
          </div>
        ))}
        <br />
       <Button className="button submit" variant="success" type="submit">Generate</Button>
    </form>
      <div className="button-section col-md-6">
      <Button className="button add" type="button" onClick={() => addFormFields()}>Text</Button>    <br /> <br />       
      <Button className="button add" type="button" onClick={() => addNumberFields()}>Number</Button> <br /> <br />
      <Button className="button add" type="button" onClick={() => addDateFields()}>Date</Button> <br /> <br />
      <Button className="button add" type="button" onClick={() => addTextAreaFields()}>Text-Area</Button>
     
  </div>
  </div>
    );
};

export default CreateField;
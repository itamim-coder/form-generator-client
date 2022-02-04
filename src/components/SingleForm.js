import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleForm = () => {
    const { id } = useParams();
    const [formData , setFormData] = useState({})
    const [formInput, setFormInput] = useState({})

    let handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...formInput};
        newInfo[field] = value;
        console.log(newInfo)
        setFormInput(newInfo);
       
     }

    
    useEffect( ()=>{
        fetch(`http://localhost:5000/forminfo/${id}`)
        .then(res=> res.json())
        .then(data => setFormData(data))
    }, [])
   console.log(formData)
   
   let handleFormSubmit = (event) => {
    const finalforminfo ={
        ...formInput
    }
    fetch('http://localhost:5000/finalforminfo', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(finalforminfo)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
  
 
}

   
    return (
        <div>
       <form onSubmit={handleFormSubmit}>
       <h2> Category :  {formData[0]?.name}</h2>
           
            <h5>  {formData[1]?.name}</h5>
            <input  className='w-50' type={formData[1]?.type} name='name' onBlur={handleOnBlur}/>
            <h5>  {formData[2]?.name}</h5>
            <input className='w-50' type={formData[2]?.type} name='number' onBlur={handleOnBlur} />
            <h5>  {formData[3]?.name}</h5>
            <input className='w-50' type={formData[3]?.type} name='date' onBlur={handleOnBlur} />
            <h5>  {formData[4]?.name}</h5>
            <textarea className='w-50' type={formData[4]?.type} name='about' onBlur={handleOnBlur}/>
            <br />
            <Button  className="button submit"  variant="success" type="submit">Submit</Button>
          
       </form>
         
          
           

            
        </div>
    );
};

export default SingleForm;
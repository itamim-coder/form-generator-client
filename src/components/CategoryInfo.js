import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CategoryInfo = () => {
    const [finalFormInfos , setFinalFormInfos] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/finalforminfo')
        .then(res => res.json())
        .then(data => setFinalFormInfos(data))
    },[])
    return (

        <div>
           
                     <div className="text-center  container">
              
              <Table striped bordered>
<thead>
<tr>

<th>#</th>
<th>Name</th>
<th>Amount</th>
<th>Date</th>
<th>About</th>


</tr>
</thead>
{finalFormInfos.map((info, index) =>(
    
    
<tbody>

<tr>

<td>{index+1}</td>
<td> {info.name} </td>
<td> {info.number} </td>
<td> {info.date} </td>
<td> {info.about} </td>
</tr>


</tbody>
))}

</Table>

</div>
        </div>
    );
};

export default CategoryInfo;
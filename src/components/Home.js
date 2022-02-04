import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    const [infos , setInfos] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/formInfo')
        .then(res => res.json())
        .then(data => setInfos(data))
    },[])
    return (

        <div>
           
                     <div className="text-center  container">
              
              <Table striped bordered>
<thead>
<tr>

<th>#</th>
<th>Form  Name</th>

<th>Action</th>
</tr>
</thead>
{infos.map((info, index) =>(
    
<tbody>

<tr>

<td>{index+1}</td>
<td> <Link to={`/forminfo/${info._id}`}>{info[0].name}</Link> </td>


<td> <Link to={`/categoryinfo`}>
<Button   variant="success" >Report</Button>
</Link>

</td>
</tr>


</tbody>
))}

</Table>

</div>
        </div>
    );
};

export default Home;
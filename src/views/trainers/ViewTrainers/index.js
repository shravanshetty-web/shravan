import React, { useEffect, useState } from 'react';
import {BsToggleOff,BsToggleOn} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import axios from 'axios';
import { Http } from '@material-ui/icons';

/**
* @author
* @function addMember
**/

export default function AddMember(){

  const [data, setData] = useState([]);

  useEffect(() =>{
    axios.get('http://127.0.0.1:8000/api/trainers')
    .then(response =>{
      setData(response.data);
    });
  },[])

  const submit2=(id)=> 
{
  console.log(id);
  confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='react-confirm-alert-body'>
            <h3>Are you sure you want to enable this category?</h3>
            <br/>
            <button onClick={onClose} style={{backgroundColor:'black',color:'white'}}>No</button>
            &nbsp;&nbsp;<button style={{backgroundColor:'black',color:'white'}}
              onClick={() => {
                onClickDisable(id);
                onClose();
              }}>Yes </button>
          </div>
        );
      }
    });
};

const submit=(id)=>
  {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='react-confirm-alert-body'>
            <h3>Are you sure you want to disable this category?</h3>
            <br/>
            <button onClick={onClose} style={{backgroundColor:'black',color:'white'}}>No</button>
            &nbsp;&nbsp;<button style={{backgroundColor:'black',color:'white'}}
              onClick={() => {
                onClickDisable(id);
                onClose();
              }}>Yes </button>
          </div>
        );
      }
    });
  };

  const onClickDisable=(id)=>
{
axios.put('http://127.0.0.1:8000/trainers/updatestatus/'+id)
  .then(res => 
  { 
//this method is temporary solution for reloading content without refreshing page. if better way found just replace dofetch() with the solution.
      const doFetch = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/trainer');
        const body = await response.json();
        const data = body.results;
        console.log(data);
        setData(data);
      };
      doFetch();
   
  }).catch(error => {
    
  })


};

  return(
    <div>
        <table class="table">
          <thead>
            <tr>
            <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Profile Image</th>
              <th scope="col">Contact</th>
              <th scope="col">User Name</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(row=>{
             
                return(
                 
                  <tr key={row.id}>
                  <th scope="row">{row.id}</th>
                  <td>{row.fullname}</td>
                  
                  <td><img src={"http://127.0.0.1:8000/img/"+row.file_upload} width="100px" height="100px" alt="image"></img></td> 
                  <td>{row.contact}</td>
                  <td>{row.username}</td>
                  {/* <td>{row.t_status==1?("Active"):("Inactive")}</td> */}
                  <td>
                    {/* {row.t_status}   */}
                    &nbsp;&nbsp;{row.t_status==0?<a href='#'><BsToggleOn  size='3em' color='red' className="addMore" title="Disable Status" 
                  onClick={()=>console.log("pressed")}
                  /></a>
             :<a href='#'><BsToggleOff  size='3em' color='blue' className="addMore" title="Enable Status" 
             onClick={()=>console.log("pressed")}
             /></a>
              }</td>

                  {/* <td><a href='#' 
                  // onClick={this.onDelete.bind(this,category.id)}
                  >Delete</a></td> */}
                  <td>
                    <Link 
                    // to={"update/"+row.id} 
                    >
                      <span className="update">Edit</span> </Link>
                    {/* <Link  */}
                    {/* // to={`/categories/edit_category/${category.id}`} */}
                    {/* >
                      Edit</Link>  */}
                  </td>
                
                </tr>
                );
              })
            }
            
            
          </tbody>
      </table>
    </div>  
   )

 }


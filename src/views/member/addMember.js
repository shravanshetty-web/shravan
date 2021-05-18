import React,{useState}from 'react'
import Axios from 'axios';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CButton,
  CInputFile
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


const Home = () => {
 const url="http://127.0.0.1:8000/api/trainer";
 const [data,setData] = useState({
     fullname:"",
     file:"",
     contact:"",
     username:"",
     password:"",

   
 });

 function handle(e){
    
    
    const newData={...data}
   if((newData[e.target.id]) == 'file'){
    newData[e.target.id] = e.target.files;

   }else{
    newData[e.target.id] = e.target.value
    
   }
    // const formData = new FormData();
    //     for (let i in e) {
    //         if(i === 'file'){
    //             for(let file of e[i]){
    //                 formData.append('file',file[0]);
    //                 console.log(file[0])
    //             }

    //         }else{
    //             formData.append(i, e[i])
                
    //         }  

    //     }
    
    setData(newData)
   
 }
 function submit(e){
     e.preventDefault();
   

    
        // data.picture = imgs; here I tried changing the picture to event.target.files from the file input, didn't work either.
        // axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        // Axios
        //     .post(url, formData, {})
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => console.log(err));

    //  Axios.post(url,{
    //      fullname:data.fullname,
    //      contact:data.contact,
    //      username:data.username,
    //      password:data.password,
    //      file:data.file,

    //  }) 
    //  .then(res=>{
    //      console.log(res.data)
    //      if(res.data == "sucess"){
    //          alert("Trainer Added Successfully!!!");
    //      }
    //      else{
    //          alert("Error 404");
    //      }
    //  })
    
 }
//  
  return (
    <>
    <form onSubmit={(e) =>submit(e)}>
      <CRow>
        <CCol xs="9">
          <CCard>
            <CCardHeader>
             Add  Trainer
              {/* <small> Form</small> */}
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="name">Full Name</CLabel>
                <CInput id="fullname"  onChange={(e) =>handle(e)} value={data.fullname} placeholder="Enter your  name" />
              </CFormGroup>
              
              
              <CFormGroup row>
                  <CCol>
                      <h3> Upload Image</h3>
  <input id="file" type="file" onChange={(e) =>handle((e.target.files))}  value={data.file} />
                  </CCol>
                </CFormGroup>
              {/* <CFormGroup>
                <CLabel htmlFor="vat">E-mail</CLabel>
                <CInput id="vat" placeholder="DE1234567890" />
              </CFormGroup> */}
            
              <CFormGroup>
                <CLabel htmlFor="vat">Contact Number</CLabel>
                <CInput id="contact" onChange={(e) =>handle(e)} value={data.contact} placeholder="DE1234567890" />
              </CFormGroup>
              {/* <CFormGroup>
                <CLabel htmlFor="vat">Address</CLabel>
                <CInput id="vat" placeholder="DE1234567890" />
              </CFormGroup> */}
              <CFormGroup>
                <CLabel htmlFor="street">UserName</CLabel>
                <CInput id="username" onChange={(e) =>handle(e)} value={data.username} placeholder="Enter street name" />
              </CFormGroup>
             
               
                  <CFormGroup>
                    <CLabel htmlFor="city">Password</CLabel>
                    <CInput id="password" onChange={(e) =>handle(e)} value={data.password} placeholder="Enter your city" />
                  </CFormGroup>
                
                  <CFormGroup>
                  <CButton type="submit" size="sm" color="danger"><CIcon name="cil-scrubber" />Insert </CButton>
              </CFormGroup>
           
              
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </form>
    </>
  )
}

export default Home

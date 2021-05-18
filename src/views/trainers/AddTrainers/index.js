import React, { Component } from 'react';
import axios from 'axios';
// import SuccessAlert from 'src/views/SuccessAlert';
// import ErrorAlert from 'src/views/ErrorAlert';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


export default class AddTrainers extends Component {

    constructor() {
        super();
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangecontact = this.onChangecontact.bind(this);
        this.onChangeusername = this.onChangeusername.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            // category_name: '',
            // category_image:'',
            fullname:"",
            file:"",
            contact:"",
            username:"",
            password:"",
        //    alert_message: '',
        //    invalid_image:''
        }
    }


    
    onChangeName(e) {
      
        this.setState({
            // category_name: e.target.value
            fullname: e.target.value,
          
           
        });
        
       
       
        
    }
        onChangecontact(e) {
      
            this.setState({
                
                contact: e.target.value,
            });}
            onChangeusername(e) {
      
                this.setState({
                    
                    username: e.target.value,
                });}
                onChangepassword(e) {
      
                    this.setState({
                        
                        password: e.target.value,
                    });
                }

    onChangeImage(file) {
      console.log(file);
      let image=file[0];
      console.log(file[0]);
      this.setState({
          file: file[0]
          
      });

      if (!image) {
        this.setState({ invalid_image: 'Please select image.' });
        return false;
      }
     
      if (!image.name.match(/\.(jpg|jpeg|png|jfif)$/)) {
        this.setState({ invalid_image: 'Please select valid image. Only jpg, jpeg, png and jfif formats are allowed.' });
        return false;
      }

this.setState({invalid_image:null});
return false;
      }
    
     
  

    onSubmit(e) {
        e.preventDefault();
        console.log(e);
        const fd = new FormData();
        fd.append('fullname', this.state.fullname);
        console.log(this.state.fullname);
        fd.append('file', this.state.file);
        fd.append('contact', this.state.contact);
        fd.append('username', this.state.username);
        fd.append('password', this.state.password);
        // const category = {
        //     category_name: this.state.category_name,
        //     category_image: this.state.category_image
        // }

        if(this.state.invalid_image==null)
             {
              
        axios.post('http://127.0.0.1:8000/api/trainer', fd)
            .then(res => 
            { 
               alert('s');
            }).catch(error => {
                alert('Error');
                // this.myFormRef.reset();
               
            })  
            // this.setState({
            //   category_image:'',
            //   category_name:''
            // })
    }
  }
    onReset(e) {
      e.preventDefault();
     
    this.setState(
      {
        // category_name:'',
        // category_image:''
        fullname:"",
        file:"",
        contact:"",
        username:"",
        password:"",
      }
    );
    }

    render() {
        return (
            <div>
                <hr />
                {/* {this.state.alert_message == "success" ? <SuccessAlert message={"Category added successfully."} /> : null}
                {this.state.alert_message == "error" ? <ErrorAlert message={"Error occured while adding the category."} /> : null} */}

                <form 
                onSubmit={this.onSubmit} 
                encType="multipart/form-data">
                <div>
    <CCol xs="9">
        <CCard>
        <CCardHeader>
            <h4>Add Trainer</h4>
           
          </CCardHeader>
          <CCardBody>
          
       
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel >Name</CLabel>
                  <CInput  id="name"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            placeholder="Enter category name" required />
                              
                </CFormGroup>
              </CCol>
            </CRow>

     {/* CODE FOR FILE UPLAOD       */}
            <CRow>
             
              <CCol xs="4">
                <CFormGroup>
                <label >Profile Iamge</label>
  <input type="file" name='file'  id="image" style={{width:'100em'}} 
         onChange={(e)=>this.onChangeImage(e.target.files)}  />
                           
                             {/* {this.state.invalid_image && <p>{this.state.invalid_image}</p>} */}
                             <p style={{color:"red",width:"500px"}}>
                                 {this.state.invalid_image}
                                 </p>
                  </CFormGroup>
                  
              </CCol>
             
            </CRow>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel >Contact</CLabel>
                  <CInput  id="contact"
                            value={this.state.contact}
                            onChange={this.onChangecontact} 
                            placeholder="Enter category name" required />
                            
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel>UserName</CLabel>
                  <CInput  id="username"
                            value={this.state.username}
                            onChange={this.onChangeusername} 
                            placeholder="Enter category name" required />
                         
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel >Password</CLabel>
                  <CInput  id="password"
                            value={this.state.password}
                            onChange={this.onChangepassword}
                            placeholder="Enter category name" required />
                            
                </CFormGroup>
              </CCol>
            </CRow>
            <div >
                    <CButton type="submit" color="primary">Insert</CButton><span> </span>
                    <CButton color="secondary" 
                    // onClick={this.onReset.bind(this)}
                    >
                        Cancel</CButton>
                    
                  </div>
          </CCardBody>
        </CCard>
      </CCol>
</div>
                </form>
            </div>
        );
    }
}
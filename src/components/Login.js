import React , {useState}  from 'react'
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import SIgn_img from "./SIgn_img";

const Login = () => {

    const [inpval, setInpval] = useState({

        
        email:"",
    
        password:""
    })

    const [data,setData] = useState([])
    console.log(inpval)

    const getdata =(e)=>{
        // console.log(e.target.value)

        const {value,name}= e.target;
        // console.log(value,name)

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })

    }

    const addData = (e)=>{

        e.preventDefault();//stop default behaiveour
 
        const { name, email, date, password } = inpval;

        
     if (email === ""){
            alert("email field is requied");
        } else if(!email.includes("@")){
            alert("plz enter valid email address");
        } else if(password === ""){
            alert("password field is requied");
        }else if (password.length < 5){
            alert("password length greater then five");

        
        }else{
            console.log("data added successfully")
            localStorage.setItem("useryoutube", JSON.stringify([...data , inpval]));
        }
    
    }
  return (
    <>
    <div className="container mt-3">
    <section className="d-flex justify-content-between">
      <div className="left_data mt-3 p-3" style={{width:"100%"}}>
        <h3 className="text-center col-lg-6">Sign In</h3>
        <Form>
         
          <Form.Group className="mb-3 col-lg-6"  controlId="formBasicEmail">
            <Form.Control type="email" name='email' onChange={getdata}  placeholder="Enter Your Email" />
          </Form.Group>

          <Form.Group
            className="mb-3 col-lg-6"
            controlId="formBasicPassword"
          >
            <Form.Control type="password" name='password'  onChange={getdata} placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit" className="col-lg-6" onClick={addData}>
    Submit
  </Button>
        </Form>
        <p className="p-3">Already Have an Account Sign In</p>
      </div>
       
    <SIgn_img/>
     
    </section>
   
  </div>
  </>
  )
}

export default Login
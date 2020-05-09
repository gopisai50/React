import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useFormik} from 'formik';



const element=<h1 className="test">  Gopi..........................</h1>; //jsx

ReactDOM.render(element,document.getElementById("root"));

const element2 =(<div>

  <h1>Gopi1</h1>
  <h2>Gopi2</h2>
</div>)

ReactDOM.render(element2,document.getElementById("root")); //jsx  compile using babble compiler

const element3 = React.createElement("h1",null,"Welcome to React")

ReactDOM.render(element3,document.getElementById("root"));  //without jsx


const element4 = React.createElement("div",null,React.createElement("h1",null,"Welcome to React"),React.createElement("h1",null,"Gopi to React"))


ReactDOM.render(element4,document.getElementById("root"));  //without jsx



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Component

//1. template using html
//2. user interactivity using javascript
//3.applying styles using css

//entire react is formed with the help of components
// comp takes inputs as propertties(props) and returns  react elements.
// 2 types a function compoent or class componenet.

// functional component
function Gopi1(employee) // function name start with capital
{
  return <div>
    <p>

<label>EmployeeId: <b>{employee.id}</b></label>
    </p>

    <p>

<label>EmployeeName: <b>{employee.name}</b></label>
    </p>

    <p>

<label>EmployeeAddress: <b>{employee.address}</b></label>
    </p>


  </div>
}

var Gopi=(employee)=>
{
  return <div>
    <p>

<label>EmployeeId: <b>{employee.id}</b></label>
    </p>

    <p>

<label>EmployeeName: <b>{employee.name}</b></label>
    </p>

    <p>

<label>EmployeeAddress: <b>{employee.address}</b></label>
    </p>


  </div>
}

const element5 =<Gopi id ="1" name ="Gopi" address="Hyderabad"> </Gopi>

ReactDOM.render(element5,document.getElementById("root"));


// Class component    --- props are Readonly

// to create class component we need to extend the class form React.Component class
// output of any component class depends on return value of method called render
class Employee extends React.Component
{
  render()
  {
    return <div>

      <h2>employeedetails...</h2>
      <p>
  <label>Employee Id:{this.props.id}</label>
      </p>
      
      <p>
  <label>Employee Nmae:{this.props.name}</label>
      </p>
      
      <p>
  <label>Employee Salary:{this.props.salary}</label>
      </p>
    </div>
  }

}



const element7 = <Employee id="101" name="Gopi" salary="3214"></Employee>

ReactDOM.render(element4,document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------------------

//State in React

class Starter extends React.Component
{
  state={counter:0}

  addEmployee=()=>{
    this.setState({counter:this.state.counter+1})
  }

  render()
  {
    return <div>

      <p>Employee:</p>
      <p>
      <button onClick={this.addEmployee}>AddEmployee</button></p>

  <p><label>Add Employee Button is clicked : <b>{this.state.counter}</b></label></p>


    </div>
  }

}

class CharactersCount extends React.Component
{
    state={charcount:0};
    onMessageChange(text)
    {
      this.setState({charcount:text.length})
    }

  render()
  {
    return<div>

  <p>Enter Text Here <input type ="text" onChange={e=>this.onMessageChange(e.target.value)}></input> </p>
  <p>no of characters {this.state.charcount}</p>
    </div>
  }
}

const element8 = <CharactersCount></CharactersCount>

ReactDOM.render(element8,document.getElementById("root"));

//---------------------------------------------------------------------------------------------------------------------------------------


// interaction between components

class Salary extends React.Component
{
   constructor(props)
   {
     super(props);
     
       this.state={
         basic:this.props.basicSalary,
         HRA:this.props.HRA,
         sa:this.props.sa,
         total: null
       };
     
   }

   Update=()=>{
    let salary = parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+parseInt(this.refs.sa.value);
    alert (salary);
    
    this.props.onsalarychanged(salary);
    

   }

   render()
   {
      return <div>

    <p>
      <label>BASIC SALARY : <input type="textbox"  ref="basic" defaultValue={this.state.basic} ></input></label>

      <label>HRA : <input type="textbox"  ref="hra" defaultValue={this.state.HRA} ></input></label>


      <label>SA : <input type="textbox" ref="sa" defaultValue={this.state.sa} ></input></label>

      <label>Toatl : <input type="textbox"  defaultValue={this.state.total} ></input></label>


    </p>
    <button onClick={this.Update}>Update</button>

      </div>

   }
}

class Employee2 extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state={
      updatedsalary:null
    }
  

    }

    getupdatedsalary=(salary)=>{
      this.setState({updatedsalary:salary});

  }
  render()
  {
    return <div>

      <h2>employeedetails...</h2>
      <p>
  <label>Employee Id:{this.props.id}</label>
      </p>
      
      <p>
  <label>Employee Nmae:{this.props.name}</label>
      </p>
      
      <p>
  <label>Employee Salary:{this.props.salary}</label>
      </p>

      <label>updated Salary:{this.state.updatedsalary}</label>
   <Salary basicSalary={this.props.basicSalary} HRA={this.props.HRA} sa={this.props.sa} onsalarychanged={this.getupdatedsalary}></Salary>

    </div>
  }

}


const element9 =<Employee2 id="1"  name="gopi"  salary ="5000" basicSalary="3000" HRA="1000" sa="1000"  ></Employee2>


ReactDOM.render(element9,document.getElementById("root"));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//Context in React

//context provides a way to pass data  through component  tree without having to pass props down manually at every level

// context is primarly used when data needs to accessed by many components at different nesting levels.

// context provider allows consuming components to subscribe to context changes
//context providers accepts a value property  through which data can be passed to components  that are descendants of this provider
//Descendanats of a provider  will re-render whenever the providre value changes.

const employeecontext =React.createContext();

class App extends React.Component
{
 
    constructor(props)
    {
      super(props);
      this.state={
      id:101,
      name:Gopi,
      Salary:1000
    }
   
  }
  render()
  {
    return <div>

    <p>Inside app....</p>
  <p>{this.state.id}</p>
  
<employeecontext.Provider value ={this.state}> 
<Employee3></Employee3> </employeecontext.Provider>

    </div>
  }
}

class Employee3 extends React.Component
{
  constructor(props)
  {
    super(props);
   
  }
  static aa =employeecontext;
  
  render()
  {
    return <div>
        <p>inside employee....</p>
        
        <p>{this.aa}</p>
        <Salary2></Salary2>
    </div>
  }
}

class Salary2 extends React.Component
{

  render()
  {
    return <div>
      <p>inside salary....</p>
    </div>
  }
}

const element10 = <App></App>

ReactDOM.render(element10,document.getElementById("root"));

//-----------------------------------------------------------------------------------------------------------------------------------------------

const Gopicntxt = React.createContext({

  data:'',
  changeEmploymentInfo:()=>{}

});
class App2 extends React.Component
{

  constructor(props)
  {
    super(props)
    this.state={
     data:{
      id:101,
      name:Gopi,
      salary:200
    },
    changeEmploymentInfo:this.updateEmployeeDetails
    
  }
  }

  updateEmployeeDetails=()=>{
    this.setState({data:{id:102}});
  }
  render()
  {
    return <div>

  <p>{this.state.data.id}</p>
  <p>fsdfdsf</p>
  <Gopicntxt.Provider value={this.state}>
  <Employee4></Employee4>
  </Gopicntxt.Provider>

    </div>
  }
}

class Employee4 extends React.Component
{

  static vale= Gopicntxt;

  render()
  {
    return <div>
        <p> {this.vale}</p>
        <button onClick={this.vale}></button>
    </div>
  }
}

const element11 = <App2></App2>

ReactDOM.render(element11,document.getElementById("root"));


//-------------------------------------------------------------------------------------------------------------------------------------------------------------


const emp = [
  {id:101,Name:'Gopi',Location:'Hyderabad'},
  {id:102,Name:'Anurag',Location:'Hyderabad'},
  {id:103,Name:'Taniya',Location:'Hyderabad'}
]

class EmpList extends React.Component
{
constructor(props)
{
  super(props)
}
render()
{
  return <div>

<label>Employee ID: {this.props.data.id}</label>
<label>Employee Name: {this.props.data.Name}</label>
<label>Employee Location: {this.props.data.Location}</label>
  </div>
}

}

function DisplayEmployee(props)
{
  const empList = props.employeeList;
  const ListofElements =empList.map((emp)=><EmpList data={emp}></EmpList>

  );

  return (
    <div>
      {ListofElements}
    </div>
  )
}

const elements12 = <DisplayEmployee employeeList={emp}></DisplayEmployee>

ReactDOM.render(elements12,document.getElementById("root"));


//---------------------------------------------------------------------------------------------------------------------------------------------


// Call Rest Api


//-------------------------------------------------------------------------------------------------------------------------------------------------------


//post rest api


//--------------------------------------------------------------------------------------------------------------------------------------------------------

//Forms on React

//controller inputs or components are the one which was controlled by React.

class FormsExample extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      employee:{
      id:'',
      Name:'',
      Salary:'',
      Location:''
    }
    }
  }

  oncreateEmployee=()=>{
    console.log(this.state.employee);
  }

     changehandler=(e)=>{
       const ame = e.target.name;
       const value = e.target.value;
      this.setState({employee:{
        ...this.state.employee,
        [ame]:value
      }});
    }

     

    render(){
      return  (<div>
        <h2>Employee Form...</h2>
        <form>
         
        <p><label>Employee Id: <input type ="text" name="id" value ={this.state.employee.id} onChange={this.changehandler}></input></label></p>
            <p><label>Employee Name: <input type ="text" name="Name" value ={this.state.employee.Name} onChange={this.changehandler}></input></label></p>
            <p><label>Employee Salary: <input type ="text" name="Salary" value ={this.state.employee.Salary} onChange={this.changehandler}></input></label></p>
            <p><label>Employee Location: <input type ="text" name="Location" value ={this.state.employee.Location} onChange={this.changehandler}></input></label></p>


          
        </form>
        <button onClick={this.oncreateEmployee}>Submit</button>
      </div>)
    
  }

}

const aa = <FormsExample></FormsExample>

ReactDOM.render(aa,document.getElementById("root"));

//------------------------------------------------------------------------------------------------------------------------------------------

//Formik for Forms 

//Formik is a small group of React Components and functions used for building forms in react 
//controller inputs or components are the one which was controlled by React.

const Validateemp =(empdata)=>{
  const errors ={};
  
  if(!empdata.Name)
  {
    errors.Name ='Please enter Name';
  }
 
  return errors;

}

const Formikcomponent1 =()=>
{
  const formik = useFormik({
    initialValues:{
      Id:'',
      Name:'',
      Location:'',
      Salary:''
    },
    validate: Validateemp,
    onSubmit:(values)=>{
      alert(JSON.stringify(values));

    }
   
  });

  return (<div>
    <h2>
      New Employee Form...
    </h2>
    <form onSubmit={formik.handleSubmit}>
<p><label htmlFor="Id">EmployeeId : </label>
<input type="text" name="Id" id ="Id" value = {formik.values.id} onChange={formik.handleChange}></input>
</p>

<p><label htmlFor="Name">Name : </label>
<input type="text" name="Name" id ="Name" value = {formik.values.Name} onChange={formik.handleChange}
onBlur={formik.handleBlur}></input>
{formik.touched.Name && formik.errors.Name?<span style={{color:'red'}}>{formik.errors.Name} </span>:null}
</p>

<p><label htmlFor="Salary">Salary : </label>
<input type="text" name="Salary" id ="Salary" value = {formik.values.Salary} onChange={formik.handleChange}></input>
</p>

<p><label htmlFor="Location">Location : </label>
<input type="text" name="Location" id ="Location" value = {formik.values.Location} onChange={formik.handleChange}></input>
</p>

<button type ="submit">Create</button>
    </form>
  </div>

  )
}
const cur =<Formikcomponent1></Formikcomponent1>

ReactDOM.render(cur,document.getElementById("root")); 


//---------------------------------------------------------------------------------------------------------------------------------------


// Lift up state

// Fragments

//Error Boundaries

//Refs

// forwardig refs












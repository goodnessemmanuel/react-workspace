import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { createBrowserRouter, RouterProvider, Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from 'react';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/', 
        element: <Home />
      },
      {
        path: '/welcome', 
        element: <Welcome/>
      },
      {
        path: "/todo",
        element: <TodosManagement/>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]

  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
    // <div className="App container">
    //   <BrowserRouter>
    //   <header>
    //     <h1>This is a common header <Link to={"/login"}></Link> </h1>
    //   </header>
    //     <Routes>
    //       <Route path='/' element={ <Welcome/> } />
    //       <Route path='/todo' element={ <TodosManagement/> } />
    //       <Route path='/login' element={ <Login/> } />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;

function TodosManagement(){
  let todos = [
    {"id" : 1, "description": "Learn Azure", "date": "02-02-2023", "isDone": true},
    {"id" : 2, "description": "Getting started Kubernates", "date": "05-02-2023", "isDone": false},
    {"id" : 3, "description": "Understanding Terraform and Application", "date": "04-02-2023", "isDone": false},
    {"id" : 4, "description": "Introduction to Open ID", "date": "05-02-2023", "isDone": false},
  ]

  return (
    <div className='container todos-management'>
        <h2 className='text-center'>Manage todos</h2>
        <table className='table'>
            <thead className='table-dark'>
              <tr>
                <th>id</th>
                <th>description</th>
                <th>date</th>
                <th>done</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map(todo => {
                      return <tr key={todo.id}>
                          <td>{todo.id}</td>
                          <td>{todo.description}</td>
                          <td>{todo.date}</td>
                          <td>{todo.isDone.toString()}</td>
                      </tr>
                    })
              }
            </tbody>
        </table>
    </div>
  )
}

function Login(){
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('');
  const [isAuthSuccess, setAuthSuccess] = useState(false)
  const [isAuthFailure, setAuthFailure] = useState(false)
  const navigate = useNavigate();

  // function handleUsername(event){
  //   console.log("username value: ", event.target.value)
  //   setUsername(event.target.value)
  // }


  // function handlePassword(event){
  //   console.log("Password value: ", event.target.value)
  //   setPassword(event.target.value)
  // }

  function handleInput(event, callback){
    callback(event.target.value)
  }

  function handleSubmit(){
    if(username ===  "test" && password === "test"){
      console.log("login success!")
      setAuthSuccess(true)
      setAuthFailure(false)
      navigate("/welcome")
    }
    else {
      console.log("login failure!")
      navigate("/login")
      setAuthSuccess(false)
      setAuthFailure(true)
    }
  }

  return (
    <div className='container'>
      <h2>Todo Login </h2>
      <form className='form'>
        {isAuthSuccess && <p className='alert alert-success'> Login successful! </p> }
        {isAuthFailure && <p className='alert alert-danger' role="alert"> incorrect username or password! </p> }
        <input className='form-control my-4' 
            type="text" 
            value={ username }
            onChange={(e) => handleInput(e, setUsername)}
        />
        <input  className='form-control' 
                type="password" 
                name='password'
                // value={password}
                onChange={ (event) => handleInput(event, setPassword)}
        />
        <button type='button'
                className='btn btn-success mt-3' 
                onClick={handleSubmit}>
                Login
        </button>
      </form>
    </div>
  )
}
function Home(){
  return(
    <div className='container text-center'>
      <p>This is a todo management app, <Link to="/Login">Click here</Link>  to sign in and manage todos</p>
    </div>
  )
}
function  Welcome(){
  return(
    <div className='container'>
      <h1>Todo Management Application</h1>
      <p> View your todos <Link to='/todo'>here</Link> </p> 
    </div>
  )
}

function  Logout(){
  return(
    <div className='container'>
      <h1>You have been logged out!</h1>
    </div>
  )
}

function CommonHeader(){
  return (
    <div className='border-bottom border-5 mb-5 border-light p-2'>
      <header className='container'>
          <nav className='navbar navbar-expand-lg'>
            <a  className='navbar-brand fw-bold fs-2'
              href='https://www.linkedin.com/in/oche-ejeh/'>
              Developer
              </a>
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link to="/" className='nav-link'>Home</Link>
                    </li>
                  <li className='nav-item'>
                  <Link to="/todo" className='nav-link'> Todos </Link>
                    </li>
                </ul>

              </div>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link className='nav-link' to="/login"> Login </Link> 
                  </li>
                  <li className='nav-item'>
                    <Link to="/logout" className='nav-link'>Logout</Link> 
                  </li>
                </ul>
          </nav>
      </header>
    </div>
  )
}

function ErrorPage(){
  return (
    <div className='container'>
      <h1> 404   :(</h1>
      <p>The request resource could not be found! </p>
    </div>
  )
}

function Layout(){
  return (
    <>
      <CommonHeader/>
      <Outlet/>
    </>
  )
}
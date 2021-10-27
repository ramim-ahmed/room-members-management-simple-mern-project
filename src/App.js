import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddMember from "./components/AddMembers/AddMember";
import Dashboard from "./components/Dashboard/Dashboard";
import Members from "./components/Members/Members";
import SideBar from "./components/SideBar/SideBar";
import Update from "./components/Update/Update";

export const MembersContext = createContext();
export const MethodContext = createContext()
const  App = () => {
  const [members, setMembers] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8000/members')
        .then(res => res.json())
        .then( data => {
            setMembers(data)
        })
    }, []);

    const handleDelete = id => {
      const url = `http://localhost:8000/members/${id}`
     const proceed = window.confirm('Are you sure want to delete ??');
     if(proceed) {
          fetch(url, {
              method:'DELETE'
          })
          .then( res => res.json())
          .then( data => {
              if(data.deletedCount > 0) {
                  alert('documents Successfully Deleted');
                  const remainingMembers = members.filter( member => member._id !== id);
                  setMembers(remainingMembers)
              }
          })
     }
  }


  return (
    <>
    <MethodContext.Provider value={handleDelete}>
    <MembersContext.Provider value={[members]}>
      <Router>
        <div style={{display:'flex'}}>
          <SideBar />
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route  path='/dashboard'>
              <Dashboard />
            </Route>
            <Route exact path='/members'>
              <Members />
            </Route>
            <Route exact path='/members/update/:id'>
              <Update />
            </Route>
            <Route path='/addmember'>
              <AddMember />
            </Route>
          </Switch>
        </div>
      </Router>
      </MembersContext.Provider>
      </MethodContext.Provider>
    </>
  );
}

export default App;

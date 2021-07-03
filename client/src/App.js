import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Create from './pages/Create';

import Notes from './pages/Notes';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import Layout from './pages/Layout';


const them = createMuiTheme();


function App() {
  
  return (
    <>
    
    <div className="App ">
    <ThemeProvider theme={them} />
       <Router>
         <Layout>
         <Switch>
           <Route path='/create' component={Create} />
           <Route exact path='/' component={Notes} />
           <Redirect to='/' />
         </Switch>
         </Layout>
       </Router>
       </div>
       </>
  );
}

export default App;

import React from 'react';
import postform from './components/postform'
import postlist from './components/postlist'
import {BrowserRouter,Link,Route,} from 'react-router-dom'
import home from './components/home'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <div>
       {
      
      
         
              
                 <ul>
                   <li>
                  <Link to ="/postlists" className="nav-link">Puslised</Link>
                </li>
                 <li>
                 <Link to="/posts" className="nav-link"> New post</Link> 

                </li>
                
                </ul>
               
        

       }
             
                
                

              
       
       
      
      
        <Route path="/" component={home} exact={true}/>
             
              <Route path="/posts" component={postform}/>
              <Route path="/postlists" component={postlist} exact={true}/>
         
           
              </div>








       </BrowserRouter>
    </div>
  );
}

export default App;

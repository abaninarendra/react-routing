
1) start basic react
npx create-react-app react-basic

2) cd react-basic
npm i react-router-dom --save

3)
in public/index.html 
		<!DOCTYPE html>
		<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <meta name="viewport"
		          content="width=device-width, initial-scale=1, shrink-to-fit=no">
		    <title>React Router Example</title>
		</head>
		<body>
		    <div id="root"></div>
		</body>
		</html>

npm start 
localhost:3000

4) in src/index.js
		import React from "react";
		import ReactDOM from "react-dom";
		import Main from "./Main";

		ReactDOM.render{
		  <Main/>,
		  document.getElementById("root");
		}

5) create src/Main.js (the one imported to index.js)

6) establish routing:

	import HashRouter,Routes and route from "react-router-dom"
	 Inside HashRouter you define the top div that renders the entire component.
	 then inside Routes, you define the routes.
	 	exact to means if the path is exactly matching (no wild character)

	Also NavLink - to define link

	Example:
	 --------
	 	import React, { Component } from "react";
		import {
		    Routes,
		    Route,    
		    NavLink,
		    HashRouter,   
		} from "react-router-dom";

		import Home from "./Home";
		import Stuff from "./Stuff";
		import Contact from "./Contact";

		class Main extends Component {
		    render(){
		        return(
		            <HashRouter>
		        <div>
		            <h1>Simple SPA</h1>
		            <ul className="header">
		                <li><NavLink exact to="/">Home</NavLink></li>
		                <li><NavLink path to="/Stuff">Stuff</NavLink></li>
		                <li><NavLink path to="/Contact">Contact</NavLink></li>
		            </ul>
		            <div className="content">
		                <Routes>
		                <Route exact path="/" element={<Home/>}/>
		                <Route path="/Stuff" element={<Stuff/>}/>
		                <Route path="/Contact" element={<Contact/>}/>
		                </Routes>
		            </div>
		        </div>
		        </HashRouter>
		        );
		    }
		}

		export default Main;
		---------

7) define index.css inside src directory
 then in index.js file:
 	import "./index.css";



----------------------------------------------------------------------------------------------------------------------------------------
Error1.0 ERROR
A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.
    at invariant (http://localhost:3000/static/js/bundle.js:844:11)
    at Route (http://localhost:3000/static/js/bundle.js:39960:78)
    at renderWithHooks (http://localhost:3000/static/js/bundle.js:25374:22)
    at mountIndeterminateComponent (http://localhost:3000/static/js/bundle.js:28660:17)
    at beginWork (http://localhost:3000/static/js/bundle.js:29956:20)
    at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/bundle.js:14966:18)
    at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/bundle.js:15010:20)
    at invokeGuardedCallback (http://localhost:3000/static/js/bundle.js:15067:35)
    at beginWork$1 (http://localhost:3000/static/js/bundle.js:34941:11)
    at performUnitOfWork (http://localhost:3000/static/js/bundle.js:34188:16)

  Solution:
  From Version 6 onwards, Route cannot be used directly instead it should be used inside Routes.

  So from :
  		-------
	  	import {
	    Route,    
	    NavLink,
	    HashRouter,   
			} from "react-router-dom";


		<div className="content">
                <Route exact path="/" component={Home}/>
        </div>
        -------

   Change to :
   		-------
   		import {
   		Routes,
	    Route,    
	    NavLink,
	    HashRouter,   
			} from "react-router-dom";


		<div className="content">
				<Routes>
                <Route exact path="/" component={Home}/>
                </Routes>
        </div>
        -------

----------------------------------------------------------------------------------------------------------------------------------------

Err2.0
Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

Solution:
		So from :
		--------
		import React from "react";
		import ReactDOM from "react-dom";
		import Main from "./Main";

		ReactDOM.render(
		  <Main/>,
		   document.getElementById("root")
		)

		to:
		import React from "react";
		import ReactDOM from "react-dom/client";
		import Main from "./Main";

		
		const root=ReactDOM.createRoot(document.getElementById("root"));
		root.render(
		  <Main></Main>
		);
		------

----------------------------------------------------------------------------------------------------------------------------------------
Err 3.0
When I click on any link, it does not render and console shows this error:
Matched leaf route at location "/Stuff" does not have an element or Component.

Solution: 
	So from:
	 <div className="content">
                <Routes>
                <Route exact path="/" component={Home}/>
                <Route path="/Stuff" component={Stuff}/>
                </Routes>
                
            </div>

	to:
	  <div className="content">
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Stuff" element={<Stuff/>}/>
                </Routes>
                
      </div>


-------------

Err 3.0
 Received `true` for a non-boolean attribute `exact`.

If you want to write it to the DOM, pass a string instead: exact="true" or exact={value.toString()}.
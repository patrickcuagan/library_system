const Router = window.ReactRouterDOM.HashRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;
const hashHistory = window.ReactRouterDOM.hashHistory;

class AppBox extends React.Component {

    render() {
        return (
        <Router>
            <div id="content">
            	<div id="aside" className="app-aside modal fade nav-dropdown">

			    <div className="left navside dark dk" layout="column">
			      <div className="navbar no-radius">

			        <a className="navbar-brand">
			          <div ui-include="client/img/logo.svg'"></div>
			          <img src="/public/img/logo.png" alt="." className="hide" />
			          <span className="hidden-folded inline">Library Catalog</span>
			        </a>

			      </div>
			       <div className="hide-scroll">
			          <nav className="scroll nav-light">
			          
			              <ul className="nav">
			                
			                <li>
			                  <a href="signin" >
			                    <span className="nav-icon">
			                      <i className="material-icons">&#xe3fc;
			                        <span ui-include="client/img/i_0.svg'"></span>
			                      </i>
			                    </span>
			                    <span className="nav-text">Sign Out</span>
			                  </a>
			                </li> 

			                <li className="nav-header hidden-folded">
			                  <small className="text-muted">Admin</small>
			                </li>
			              
			                <li>
			                  <a href="#/manage_books" >
			                    <span className="nav-icon">
			                      <i className="material-icons">&#xe3fc;
			                        <span ui-include="'../assets/images/i_0.svg'"></span>
			                      </i>
			                    </span>
			                    <span className="nav-text">Manage Books</span>
			                  </a>
			                </li>  
			              </ul>
			          </nav>
			      </div>
			      
			    </div>
			  </div>
                <Route exact path="/" component={ManageBooks} />
                <Route exact path="/add_book" component={ManageBooks} />

                <Route exact path="/manage_books" component={ManageBooks} />
            </div>
      </Router>            

        );
    }
}
const ManageBooks = () => <ManageBooksBox />

ReactDOM.render(<AppBox />, document.getElementById("root"));

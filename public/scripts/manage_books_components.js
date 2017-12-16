class ManageBooksBox extends React.Component {

    componentWillMount() {
    	console.log("ey");
        $.ajax({
   		    //type: "POST",
            //url: "/manage_books"
/*            headers: {
                "Authorization": sessionStorage.getItem("token")
            }*/
        })/*
        .done((status, xhr) => {
            console.log("ey");
        }).fail((xhr) => {
            console.log(xhr.status);

            if(xhr.status == 401) {
                this.setState({
                    auth: false
                });
            }
        });

        if(!sessionStorage.getItem("token")) {
            this.setState({
                auth: false
            });
        }*/
    }

    render() {
        /*if(!this.state.auth) {
            return (
                <Redirect to="/meeting" />
            );
        }

        if(this.state.editMode) {
            return (
                <Redirect to="/meeting/new" />
            );
        }*/
        return (
        	<div id="content" className="app-content box-shadow-z0" role="main">
			    <div className="app-header white box-shadow">
			        <div className="navbar">
			            <a data-toggle="modal" data-target="#aside" className="navbar-item pull-left hidden-lg-up">
			              <i className="material-icons">&#xe5d2;</i>
			            </a>
			        
			            <div className="navbar-item pull-left h5" ng-bind="$state.current.data.title" id="pageTitle"></div>
			        
			            <div className="collapse navbar-toggleable-sm" id="collapse">
			              <div ui-include="'../views/blocks/navbar.form.right.html'"></div>
			              <ul className="nav navbar-nav">
			                <li className="nav-item dropdown">
			                  <a className="nav-link" data-toggle="modal" data-target="#m">
			                    <i className="fa fa-fw fa-plus text-muted"></i>
			                    <span>Add Book</span>
			                  </a>
			                  <div ui-include="'../views/blocks/dropdown.new.html'"></div>
			                </li>
			              </ul>
			            </div>
			        </div>
			    </div>
			    <div id="m" className="modal" data-backdrop="true">
				  <div className="modal-dialog">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title">Add A Book</h5>
				      </div>
				      <div className="modal-body p-lg">

				      <div className="box">
				        <div className="box-body">
				          <form method="post" action="/add_book">
				            <div className="form-group">
				              <label htmlFor="exampleInputEmail1">Title</label>
				              <input type="text" name="title" id="title" className="form-control" placeholder="Title" />
				            </div>
				            <div className="form-group">
				              <label htmlFor="exampleInputPassword1">Author</label>
				              <input type="text" name="author" id="author" className="form-control" placeholder="Author" />
				            </div>
				            <div className="form-group">
				              <label htmlFor="exampleInputPassword1">Genre</label>
				              <input type="text" name="genre" id="genre" className="form-control" placeholder="Genre" />
				            </div>
				            <div className="form-group">
				              <label htmlFor="exampleInputPassword1">Description</label>
				              <input type="text" name="description" id="description" className="form-control" placeholder="Description" />
				            </div>
				            <div className="form-group">
				              <label htmlFor="exampleInputPassword1">Year</label>
				              <input type="text" name="year" id="year" className="form-control" placeholder="Year of Publication" />
				            </div>
				            <div className="form-group">

				            <button type="submit" className="btn success m-b">Submit</button>
				                        </div>

				          </form>

				      </div>
				    </div>
				      </div>
				      
				    </div>
				  </div>
				</div>
				<div className="padding" style={{marginTop:'50px'}}>
				  <div className="box">
				    <div className="box-header">
				      <h2>All Users</h2>
				    </div>
				    <div className="table-responsive">
				      <table ui-jp="dataTable" ui-options="{
				          sAjaxSource: 'api/datatable.json',
				          aoColumns: [
				            { mData: 'engine' },
				            { mData: 'browser' },
				            { mData: 'platform' },
				            { mData: 'version' },
				            { mData: 'grade' }
				          ]
				        }" className="table table-striped b-t b-b">
				        <thead>
				          <tr>
				            <th style={{width:'40%'}}>Name</th>
				            <th style={{width:'30%'}}>Author</th>
				            <th style={{width:'10%'}}>Status</th>
				            <th style={{width:'10%', align: 'center'}}>Edit</th>
				            <th style={{width:'10%', align: 'center'}}>Delete</th>
				          </tr>
				        </thead>
				        <tbody>
				          <tr>
				            <td>Turtles All The Way Down</td>
				            <td>John Green</td>
				            <td>Available</td>
				            <td style={{align: 'center'}}><a onClick={this._handleClick.bind(this)}><i className="fa fa-edit"></i></a></td>
				            <td style={{align: 'center'}}><a onClick={this._handleClick.bind(this)}><i className="fa fa-trash"></i></a></td>
				          </tr>
				          <tr>
				            <td>The Sun and Her Flowers</td>
				            <td>Rupi Kaur</td>
				            <td>Available</td>
				            <td style={{align: 'center'}}><i className="fa fa-edit"></i></td>
				            <td style={{align: 'center'}}><i className="fa fa-trash"></i></td>
				          </tr>
				          <tr>
				            <td>Origin: A Novel</td>
				            <td>Dan Brown</td>
				            <td>Available</td>
				            <td style={{align: 'center'}}><i className="fa fa-edit"></i></td>
				            <td style={{align: 'center'}}><i className="fa fa-trash"></i></td>
				          </tr>
				          <tr>
				            <td>Everything is Mama</td>
				            <td>Jimmy Fallon</td>
				            <td>Available</td>
				            <td style={{align: 'center'}}><i className="fa fa-edit"></i></td>
				            <td style={{align: 'center'}}><i className="fa fa-trash"></i></td>
				          </tr>
				          
				        </tbody>
				      </table>
				    </div>
				  </div>
				</div>
			  </div>

        );

    
    }   
    _handleClick(e) {
        e.preventDefault();

        console.log("clicked!");
    } 
}
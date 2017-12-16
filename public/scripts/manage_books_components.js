class ManageBooksBox extends React.Component {
	constructor() {
        super();

        this.state = {
            books: [],

        }
    }

    componentWillMount() {
    	console.log("ey");
        $.ajax({
   		    type: "GET",
            url: "/get_books",
            success: (books) => {
                this.setState({
                    books
                });
                console.log(books);

            }
        })
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
				          <form onSubmit={this._handleSubmit.bind(this)}>
				            <div className="form-group">
				              <label htmlFor="exampleInputEmail1">Title</label>
				              <input type="text" name="title" id="title" ref={(input) => this._title = input} className="form-control" placeholder="Title" />
				            </div>
				            <div className="form-group">
				              <label htmlFor="exampleInputPassword1">Author</label>
				              <input type="text" name="author" id="author" ref={(input) => this._author = input} className="form-control" placeholder="Author" />
				            </div>
				            <div className="form-group">
				              <label htmlFor="exampleInputPassword1">Genre</label>
				              <input type="text" name="genre" id="genre" ref={(input) => this._genre = input} className="form-control" placeholder="Genre" />
				            </div>
				            <div className="form-group">
				              <label htmlFor="exampleInputPassword1">Description</label>
				              <input type="text" name="description" id="description" ref={(input) => this._description = input} className="form-control" placeholder="Description" />
				            </div>
				            <div className="form-group">
				              <label htmlFor="exampleInputPassword1">Year</label>
				              <input type="text" name="year" id="year" ref={(input) => this._year = input} className="form-control" placeholder="Year of Publication" />
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
				            <th style={{width:'30%'}}>Title</th>
				            <th style={{width:'20%'}}>Author</th>
				            <th style={{width:'13%'}}>Genre</th>
				            <th style={{width:'13%'}}>Year Published</th>
				            <th style={{width:'7%', align: 'center'}}>Edit</th>
				            <th style={{width:'7%', align: 'center'}}>Delete</th>
				          </tr>
				        </thead>
				        <tbody>
				        	<BookList books={this.state.books} />
				         
				          			          
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

	    _handleSubmit(e) {
        e.preventDefault();

        let book = {
            title: this._title.value,
            author: this._author.value,
            genre: this._genre.value,
            description: this._description.value,
            year: this._year.value
        }

        $.ajax({
            type: "POST",
            url: "/api/add_book",
            headers: {
                "Authorization": sessionStorage.getItem("token")
            },
            data: book
        }).done((book, status, xhr) => {
			window.location.href = "http://localhost:3000/";
        }).fail((xhr) => {
            console.log(xhr.status);
        });


    }

}

class BookList extends React.Component {

    render() {
        let books = this._getBooks();

        return(
            books.map((book) => 
                    <BookRow 
                        key={book._id}
                        bookId={book._id}
                        title={book.title}
                        author={book.author}
                        genre={book.genre}
                        year={book.year} />
                )
        );
    }

    _getBooks() {
        return this.props.books;
    }
}

class BookRow extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
	        <tr>
		            <td>{this.props.title}</td>
		            <td>{this.props.author}</td>
		            <td>{this.props.genre}</td>
		            <td>{this.props.year}</td>
		            <td style={{align: 'center'}}><a data-toggle="modal" data-target={'#'  + this.props.bookId}><i className="fa fa-edit"></i></a>


					<div id={this.props.bookId} className="modal" data-backdrop="true">
						<div className="modal-dialog">
						    <div className="modal-content">
						        <div className="modal-header">
						            <h5 className="modal-title">Edit This Book</h5>
						      	</div>
						        <div className="modal-body p-lg">

						        <div className="box">
						            <div className="box-body">
						                <form onSubmit={this._handleEdit.bind(this, this.props.bookId)}>
						                <div className="form-group">
						              		<label htmlFor="exampleInputEmail1">Title</label>
						              		<input type="text" name="title" id="title" ref={(input) => this._title = input} className="form-control" placeholder={this.props.title} />
						            	</div>
						            	<div className="form-group">
						              		<label htmlFor="exampleInputPassword1">Author</label>
						              		<input type="text" name="author" id="author" ref={(input) => this._author = input} className="form-control" placeholder={this.props.author} />
						            	</div>
						            	<div className="form-group">
						              		<label htmlFor="exampleInputPassword1">Genre</label>
						              		<input type="text" name="genre" id="genre" ref={(input) => this._genre = input} className="form-control" placeholder={this.props.genre} />
						            	</div>
						            	<div className="form-group">
						              		<label htmlFor="exampleInputPassword1">Description</label>
						              		<input type="text" name="description" id="description" ref={(input) => this._description = input} className="form-control" placeholder={this.props.description} />
						            	</div>
						            	<div className="form-group">
						              		<label htmlFor="exampleInputPassword1">Year</label>
						              		<input type="text" name="year" id="year" ref={(input) => this._year = input} className="form-control" placeholder={this.props.year} />
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
		            </td>
		            <td style={{align: 'center'}}><a onClick={this._handleDelete.bind(this, this.props.bookId)}><i className="fa fa-trash"></i></a></td>
		    </tr>
        );
    }
    _handleEdit(bookId) {

		console.log("Edit clicked! Id is " + bookId);

		let book = {
            title: this._title.value,
            author: this._author.value,
            genre: this._genre.value,
            description: this._description.value,
            year: this._year.value
        }

        $.ajax({
            type: "PUT",
            url: `/api/edit_book/${bookId}`,
            data: book
        }).done((book, status, xhr) => {
			window.location.href = "http://localhost:3000/";
        }).fail((xhr) => {
            console.log(xhr.status);
        });
    } 

    _handleDelete(bookId) {
        console.log("Delete clicked! Id is" + bookId);

         $.ajax({
            type: "DELETE",
            url: `/api/book/${bookId}`,
            headers: {
                "Authorization": sessionStorage.getItem("token")
            }
        }).done((res, status, xhr) => {
        	window.location.href = "http://localhost:3000/";
            this.setState({
                refresh: true
            });
        }).fail((xhr) => {
            console.log(xhr.status);
        });
    }

}
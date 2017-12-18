class SignInBox extends React.Component {
	render () {
		return (
			<div className="app" id="app">
			  <div className="center-block w-xxl w-auto-xs p-y-md">
			    <div className="navbar">
			      <div className="pull-center">
			        <div ui-include="'/public/views/blocks/navbar.brand.html'"></div>
			      </div>
			    </div>
			    <div className="p-a-md box-color r box-shadow-z1 text-color m-a">
			      <div className="m-b text-sm">
			        Sign in with your Library Account
			      </div>
			      <form method="post" id="signIn" action="/trysignin">
			        <div className="md-form-group float-label">
			          <input type="email" className="md-input" id="emailInput" />
			          <label>Email</label>
			        </div>
			        <div className="md-form-group float-label">
			          <input type="password" className="md-input" id="passwordInput" />
			          <label>Password</label>
			        </div>
			        <div className="m-b-md">
			          <label className="md-check">
			            <input type="checkbox" /><i className="primary"></i> Keep me signed in
			          </label>
			        </div>
			        <input className="btn primary btn-block p-x-md" value="Sign in" type="submit" />
			      </form>
			    </div>

			    <div className="p-v-lg text-center">
			      <div className="m-b"><a ui-sref="access.forgot-password" href="forgot-password.html" className="text-primary _600">Forgot password?</a></div>
			      <div>Do not have an account? <a ui-sref="access.signup" href="signup" className="text-primary _600">Sign up</a></div>
			    </div>
			  </div>
		  </div>
		);
	}
}
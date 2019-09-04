let emptyCustomer = {
  "firstName": "",
  "lastName": "",
  "username": "",
  "email": "",
  "phone": "",
};

class Customer extends React.Component {
  state = {
    customer: emptyCustomer
  }
  componentDidMount() {
    let currentCustomer = store.getState().currentCustomer;
    this.setState({ customer: currentCustomer });
    store.subscribe(() => {
      let currentCustomer = store.getState().currentCustomer;
      this.setState({ customer: currentCustomer });
    })
  }

  render() {
    return (
      <div id="add-customer" className="page">
        <form>
          <div className="form-group">
            <label htmlFor="email-address">Email address</label>
            <input value={this.state.customer.email} onChange={(e) => {
              this.setState({ customer: { ...this.state.customer, email: e.target.value } })
            }} type="email" className="form-control" id="email-address" placeholder="Enter email"></input>

          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last name</label>
            <input value={this.state.customer.lastName} onChange={(e) => {
              this.setState({ customer: { ...this.state.customer, lastName: e.target.value } })
            }} type="text" className="form-control" id="last-name" placeholder="Enter last name"></input>

          </div>
          <div className="form-group">
            <label htmlFor="first-name">First name</label>
            <input value={this.state.customer.firstName} onChange={(e) => {
              this.setState({ customer: { ...this.state.customer, firstName: e.target.value } })
            }} type="text" className="form-control" id="first-name" placeholder="Enter first name"></input>

          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input value={this.state.customer.phone} onChange={(e) => {
              this.setState({ customer: { ...this.state.customer, phone: e.target.value } })
            }} type="phone" className="form-control" id="phone" placeholder="Enter phone"></input>
          </div>
          <button onClick={(e) => {
            store.dispatch({ type: "ADD_CUSTOMER", value: this.state.customer });
            this.setState({ customer: emptyCustomer });
          }} type="button" className="btn btn-primary">Add</button>
          <button onClick={(e) => {
            store.dispatch({ type: "CHANGE_CURRENT_CUSTOMER", value: emptyCustomer });
            this.setState({ customer: emptyCustomer });
          }} type="button" className="btn btn-primary" style={{ marginLeft: "10px" }}>Clear</button>
        </form>
      </div>
    )
  }
}

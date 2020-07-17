import React, { Component } from 'react';
import AddRoom from './Components/AddRoom';
import Rooms from './Components/Rooms';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: "products"
    }
    this.onProductsClicked = this.onProductsClicked.bind(this);
    this.onAddProductsClicked = this.onAddProductsClicked.bind(this);
  }
  onProductsClicked() {
    this.setState({
      menu: "products"
    })
  }
  onAddProductsClicked() {
    this.setState({
      menu: "add-product"
    })
  }
  render() {

    return (

      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous" />

        <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"></link>
        <script src="//code.jquery.com/jquery.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><i class="fas fa-heart">VIT HOTEL</i> </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" onClick={this.onProductsClicked}>Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.onAddProductsClicked}>Add Room <span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Price</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Image</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link disabled" href="#">About Us</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Nhu Nhu Oficial</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                <button className="btn btn-outline-success my-2 my-sm-0" onChange={this.handleChange} type="submit">Search</button>
                <button className="bt" class="btn btn-info" onClick={this.onCartClicked}>Cart</button>
              </form>
            </div>
          </nav>
        </div>

        <center><h1>WELCOME TO VIT HOTEL</h1></center>
        <center><div className="Menu">

        </div>
        </center>
        <br />
        <hr />
        <br />
        {this.state.menu === "products" ? <Rooms /> : null}
        {this.state.menu === "add-product" ? <AddRoom /> : null}

      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
import Navbar from "./nav";
import { Route, Routes } from "react-router";
import Details from "./productDetails";
import Menu from "./Menu";
import Home from "./Home";
import Login from "./login";
import axios from "axios";
import Admin from "./Admin";
import Add from "./AddItem";
// import About from "./about";
// import Team from "./aboutteam";
class App extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3000/products");
    this.setState({ products: data });
    // console.log(data);
    // const data = fetch('https://jsonplaceholder.typicode.com/posts')
    // // console.log(data)
    // const out =data.then(res=>res.json())
    // console.log(out)
  }

  deleteHandler = (product) => {
    axios.delete(`http://localhost:3000/products/${product.id}`)
    
    this.setState({
      products: this.state.products.filter((p) => p.id !== product.id),
    });
  };
  onClickhandler = (product) => {
    let products = this.state.products;
    let index = this.state.products.indexOf(product);
    // console.log(index);
    products[index].count++;
    this.setState({ products });
  };
  onClickminus = (product) => {
    let products = this.state.products;
    let index = this.state.products.indexOf(product);
    // console.log(index);
    if (products[index].count === 0);
    else products[index].count--;
    this.setState({ products });
  };
  handleInCart = (product) => {
    let products = [...this.state.products];
    let index = this.state.products.indexOf(product);
    // console.log(products)
    products[index] = { ...products[index] };
    // console.log(products)

    products[index].inCart = !products[index].inCart;

    this.setState({ products });
  };
  render() {
    return (
      <>
        <Navbar
          listCount={this.state.products.filter((p) => p.inCart).length}
        ></Navbar>
        {/* <Navbar products={this.state.products.length}></Navbar> */}

        <main className="container">
          <Routes>
            <Route
              path="/menu"
              element={
                <Menu
                  products={this.state.products}
                  onClick={this.handleInCart}
                />
              }
            ></Route>
            {/* <Route
              path="/products/:id/:name?"
              render={(props) => (
                <Details products={this.state.products} {...props} />
              )}
            /> */}
            {/* <Route path='/about' element={<About/>}>
                <Route path='/about/team' element={<Team />}  />

            </Route> */}

            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <Admin
                  products={this.state.products}
                  onClick={this.deleteHandler}
                />
              }
            />
            <Route path="/add" element={<Add />} />
            <Route
              path="/shoppingcart"
              element={
                <ShoppingCart
                  // products={this.state.products}
                  products={this.state.products.filter((p) => p.inCart)}
                  onDelete={this.handleInCart}
                  onClickhandler={this.onClickhandler}
                  onClickminus={this.onClickminus}
                />
              }
            />
            <Route
              path="/product/:id"
              element={<Details product={this.state.products} />}
            ></Route>
          </Routes>
        </main>
      </>
    );
  }
}

export default App;

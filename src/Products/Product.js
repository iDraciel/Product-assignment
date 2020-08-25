import React,{Component} from 'react';
import './Product.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Products extends Component {
    state = {
        products: [],
       categorys:[]
      };
    getCategory() {
        axios
        .get(`https://aveosoft-react-assignment.herokuapp.com/categories`)
        .then(response =>
            response.data.map(category =>({
                name:`${category.name}`,
                id:`${category.id}`
            }))
            
        )
        .then(categorys => {
            this.setState({
              categorys: categorys,
          
            });
          })
    }
      getUsers() {
        axios
          .get(`https://aveosoft-react-assignment.herokuapp.com/products`)
          .then(response =>
            response.data.map(product => ({
              name: `${product.name}`,
              price:`${product.price}`,
              categoryId:`${product.categoryId}`,
              model:`${product.model}`,
              id:`${product.id}`,
            }))
          )
          .then(products => {
            this.setState({
              products:products,
          
            });
          })
      }
    
      componentDidMount() {
        this.getUsers();
        this.getCategory();
      }
    
      render() {
        const { products, categorys } = this.state;

        return (
          <React.Fragment>
            <h1 style={{marginTop:"22px",fontWeight:'bolder'}}>Top Ordered Games</h1>
            <div>
            {categorys.map(category => {
                const {name} = category;
                return(
                    <p style={{color:'black'}}>{name}</p>
                )
            })}
            </div>
            <div className="live-update">
        <div className="inner">
        </div>
        <h6 className="header-6">Product list</h6>
        </div>
            <div className="row">
           { products.map(product => {
                  const { name,price,model,id } = product;
                  return (
                         <div className="column" key={name}>
                      <div className="card">
                      
                        <h6 style={{marginTop:"15px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontWeight:'bold'}}>{name}</h6>
                        <p>Model - {model}</p>
                        <p>price - {price}</p>

                      <Link
                    className="button-link"
                    to={{
                      pathname: "products/" + product.id,
                      
                    }}
                  > <button className="learn-more">Details</button>
                  </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </React.Fragment>
        );
      }
    
}
export default Products;
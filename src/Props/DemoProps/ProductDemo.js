import React, { Component } from 'react'

export default class ProductDemo extends Component {
    render() {
       
        // let product = this.props.product;
        // viết tắt
        let {product} = this.props


        return (
            <div className="card">
                <img src="https://picsum.photos/200/200" />
                <div className="card-body">
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                </div>
            </div>
        )
    }
}

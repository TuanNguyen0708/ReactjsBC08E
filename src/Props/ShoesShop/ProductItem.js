import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {prd} = this.props;

        return (
            <div className="card">
                <img className="" src={prd.image} />
                <div className="card-body">
                    <h4 style={{height: '60'}}>{prd.name}</h4>
                    <span>{prd.price}</span>
                    <br />
                    <button className="p-2" style={{backgroundColor: '#000', border: 'none', color: '#fff'}}>Add to cart</button>
                </div>
            </div>
        )
    }
}

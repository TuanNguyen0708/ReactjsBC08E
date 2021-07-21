import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className="card">
                <img src={item.img}/>
                <div className="card-body">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={()=>{
                        this.props.viewDetail(item)
                    }}>Xem Chi Tiết</button>
                </div>
            </div>
        )
    }
}

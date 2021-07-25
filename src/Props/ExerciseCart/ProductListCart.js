import React, { Component } from 'react'
import ProductItemCart from './ProductItemCart'

export default class ProductListCart extends Component {
    render() {
        let {mangSanPham, themGioHang} = this.props;
        return (
            <div className='row'>
                {mangSanPham.map((sanPham,index) => {
                    return <div className='col-4' key={index}>
                            <ProductItemCart sp={sanPham} themGioHang={themGioHang} />
                    </div>
                })}
            </div>
        )
    }
}

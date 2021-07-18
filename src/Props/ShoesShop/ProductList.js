import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProduct = () => {
       return this.props.arrProduct.map ((product, index) => {
            return <div className="col-4 mt-2" key={index}>
                <ProductItem prd={product} />
            </div>
        })
    }

    render() {
        return (
            //từ mảng tạo ra giao diện như bài tập và sử dụng thẻ <productItem /> để hiển thị thông tin sản phẩm
            <div>
                <h3 className="text-center">Shoes Shop</h3>
                <div className="row">
                   {this.renderProduct()}
                   
                </div>
            </div>
        )
    }
}

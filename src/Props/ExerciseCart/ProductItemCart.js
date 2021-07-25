import React, { Component } from 'react'

export default class ProductItemCart extends Component {


    render() {
        let {sp, themGioHang} = this.props;
        return (
            <div className='card'>
                <img src={sp.hinhAnh} style={{height:'350'}} />
                <div className='card-body'>
                    <h3>{sp.tenSanPham}</h3>
                    <p>{sp.giaBan.toLocaleString()}</p>
                    <button className='btn btn-danger' onClick={() => {
                        //click vào gọi hàm themGioHang
                        themGioHang(sp)
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}

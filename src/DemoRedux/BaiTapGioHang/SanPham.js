import React, { Component } from 'react'
//kết nối dữ liệu đến redux
import { connect } from 'react-redux';
class SanPham extends Component {


    render() {
        console.log('props',this.props)
        let {sanPham} = this.props;

        return (
            <div className='card'>
                <img className='w-100' height={300} src={sanPham.hinhAnh} />
                <div className='card-body'>
                    <h3>{sanPham.tenSP}</h3>
                    <h3>{sanPham.giaBan}</h3>
                    <button className='btn btn-success' onClick={() => {
                        const action = {
                            type:'THEM_GIO_HANG',//Thuộc tính bắt buộc để xác định xử lí
                            sanPhamClick:sanPham
                        }
                        //đưa dữ liệu lên redux
                        this.props.dispatch(action);
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}


//kết nối redux
export default connect()(SanPham);